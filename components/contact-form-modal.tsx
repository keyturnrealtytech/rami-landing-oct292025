'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

const BEDROOM_OPTIONS = ['3', '4', '5+', 'Need office']
const TIMELINE_OPTIONS = [
  'ASAP (0-30 days)',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring',
  'Need lease buyout',
]
const PAYMENT_OPTIONS = ['$1,800-$2,300', '$2,300-$2,500', '$2,500-$3,000', '$3,000+']
const VETERAN_OPTIONS = ['No', 'Yes', 'Yes - 100% disabled']
const FINANCING_OPTIONS = ['Already pre-approved', 'Need help']

const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  workingWithAgent: z.string().min(1, 'Please select an option'),
  bedrooms: z.string().min(1, 'Please select an option'),
  moveInTimeline: z.string().min(1, 'Please select an option'),
  desiredArea: z.string().min(1, 'Desired area is required'),
  monthlyPayment: z.string().min(1, 'Please select an option'),
  veteranStatus: z.string().min(1, 'Please select an option'),
  financingStatus: z.string().min(1, 'Please select an option'),
})

type FormData = z.infer<typeof formSchema>

type FieldName = keyof FormData

// Fields grouped into the 3 wizard steps. Order here drives validation-per-step.
const STEPS: { title: string; fields: FieldName[] }[] = [
  { title: 'About you', fields: ['fullName', 'phoneNumber', 'email'] },
  { title: 'Your situation', fields: ['workingWithAgent', 'financingStatus', 'moveInTimeline', 'veteranStatus'] },
  { title: 'Your home', fields: ['bedrooms', 'desiredArea', 'monthlyPayment'] },
]
const LAST_STEP = STEPS.length - 1

interface ContactFormModalProps {
  children: React.ReactNode
}

export function ContactFormModal({ children }: ContactFormModalProps) {
  const [open, setOpen] = React.useState(false)
  const [step, setStep] = React.useState(0)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      workingWithAgent: '',
      bedrooms: '',
      moveInTimeline: '',
      desiredArea: '',
      monthlyPayment: '',
      veteranStatus: '',
      financingStatus: '',
    },
  })

  const resetWizard = React.useCallback(() => {
    setStep(0)
    form.reset()
  }, [form])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) resetWizard()
  }

  const goNext = async () => {
    const valid = await form.trigger(STEPS[step].fields)
    if (valid) setStep((s) => Math.min(s + 1, LAST_STEP))
  }

  const goBack = () => setStep((s) => Math.max(s - 1, 0))

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Shared ID so the browser pixel and the server Conversions API event de-duplicate into one.
    const eventId =
      typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, eventId }),
      })

      if (response.ok) {
        // Meta Pixel: track the lead conversion (same eventID as the server CAPI event)
        if (typeof window !== 'undefined') {
          ;(window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'Lead', {}, { eventID: eventId })
        }
        toast.success('Thank you! We will contact you soon.')
        handleOpenChange(false)
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Enter advances steps; only the final step actually submits.
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === LAST_STEP) {
      void form.handleSubmit(onSubmit)()
    } else {
      void goNext()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Step {step + 1} of {STEPS.length} · {STEPS[step].title}
          </DialogDescription>
          <div className="flex items-center gap-1.5 pt-2" aria-hidden="true">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === step ? 'w-6 bg-primary' : i < step ? 'w-4 bg-primary/50' : 'w-4 bg-muted'
                }`}
              />
            ))}
          </div>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleFormSubmit} className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
            {step === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (Optional)</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="workingWithAgent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you currently working with a Real Estate Agent? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-wrap gap-x-6 gap-y-2 pt-1"
                        >
                          {['Yes', 'No'].map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-sm font-normal cursor-pointer">
                              <RadioGroupItem value={opt} />
                              {opt}
                            </label>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="financingStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Financing status? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col gap-2 pt-1"
                        >
                          {FINANCING_OPTIONS.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-sm font-normal cursor-pointer">
                              <RadioGroupItem value={opt} />
                              {opt}
                            </label>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="moveInTimeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired move-in date? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TIMELINE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="veteranStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you a Veteran? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col gap-2 pt-1"
                        >
                          {VETERAN_OPTIONS.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-sm font-normal cursor-pointer">
                              <RadioGroupItem value={opt} />
                              {opt}
                            </label>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrooms? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bedrooms" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {BEDROOM_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desiredArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired area? *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Stone Oak, Alamo Ranch, Schertz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="monthlyPayment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Max affordable monthly payment? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {PAYMENT_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex justify-between gap-3 pt-2">
              {step > 0 ? (
                <Button type="button" variant="outline" onClick={goBack} disabled={isSubmitting}>
                  Back
                </Button>
              ) : (
                <span />
              )}
              {step < LAST_STEP ? (
                <Button type="button" onClick={goNext}>
                  Next
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
