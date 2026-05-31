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

// Friendly, rounded styling shared across fields (teal brand accent #81D8D0).
const FIELD_CLASS =
  'h-12 rounded-2xl border-2 border-[#cdeae6] bg-white text-base shadow-sm focus-visible:border-[#81D8D0] focus-visible:ring-4 focus-visible:ring-[#81D8D0]/20'
const LABEL_CLASS = 'text-[15px] font-semibold text-foreground'

function optionCardClass(selected: boolean) {
  return `flex items-center gap-3 rounded-2xl border-2 px-4 py-3 cursor-pointer transition-all ${
    selected
      ? 'border-[#81D8D0] bg-[#81D8D0]/15 shadow-sm'
      : 'border-[#e6efee] hover:border-[#81D8D0]/60 hover:bg-[#81D8D0]/5'
  }`
}

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
const STEPS: { title: string; emoji: string; fields: FieldName[] }[] = [
  { title: 'About you', emoji: '👋', fields: ['fullName', 'phoneNumber', 'email'] },
  {
    title: 'Your situation',
    emoji: '🧭',
    fields: ['workingWithAgent', 'financingStatus', 'moveInTimeline', 'veteranStatus'],
  },
  { title: 'Your home', emoji: '🏡', fields: ['bedrooms', 'desiredArea', 'monthlyPayment'] },
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

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[440px] rounded-[28px] border-2 border-[#d8eeec] bg-[#fbfdfc] p-6 shadow-2xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold tracking-tight">Let&apos;s find your place 🏡</DialogTitle>
          <DialogDescription className="text-[15px]">
            <span className="font-semibold text-[#2c8f87]">
              {STEPS[step].emoji} {STEPS[step].title}
            </span>{' '}
            · Step {step + 1} of {STEPS.length}
          </DialogDescription>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#e6efee]">
            <div
              className="h-full rounded-full bg-[#81D8D0] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleFormSubmit} className="space-y-5 max-h-[62vh] overflow-y-auto pr-1">
            {step === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={LABEL_CLASS}>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className={FIELD_CLASS} {...field} />
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
                      <FormLabel className={LABEL_CLASS}>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" className={FIELD_CLASS} {...field} />
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
                      <FormLabel className={LABEL_CLASS}>Email (Optional)</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className={FIELD_CLASS} {...field} />
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
                      <FormLabel className={LABEL_CLASS}>Working with a Real Estate Agent? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-2 gap-3 pt-1">
                          {['Yes', 'No'].map((opt) => (
                            <label key={opt} className={optionCardClass(field.value === opt)}>
                              <RadioGroupItem value={opt} className="size-5 border-2 border-[#81D8D0] text-[#2c8f87]" />
                              <span className="text-sm font-medium">{opt}</span>
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
                      <FormLabel className={LABEL_CLASS}>Financing status? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col gap-3 pt-1">
                          {FINANCING_OPTIONS.map((opt) => (
                            <label key={opt} className={optionCardClass(field.value === opt)}>
                              <RadioGroupItem value={opt} className="size-5 border-2 border-[#81D8D0] text-[#2c8f87]" />
                              <span className="text-sm font-medium">{opt}</span>
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
                      <FormLabel className={LABEL_CLASS}>Desired move-in date? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={FIELD_CLASS}>
                            <SelectValue placeholder="Select a timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-2xl">
                          {TIMELINE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt} className="rounded-xl">
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
                      <FormLabel className={LABEL_CLASS}>Are you a Veteran? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col gap-3 pt-1">
                          {VETERAN_OPTIONS.map((opt) => (
                            <label key={opt} className={optionCardClass(field.value === opt)}>
                              <RadioGroupItem value={opt} className="size-5 border-2 border-[#81D8D0] text-[#2c8f87]" />
                              <span className="text-sm font-medium">{opt}</span>
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
                      <FormLabel className={LABEL_CLASS}>Bedrooms? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={FIELD_CLASS}>
                            <SelectValue placeholder="Select bedrooms" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-2xl">
                          {BEDROOM_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt} className="rounded-xl">
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
                      <FormLabel className={LABEL_CLASS}>Desired area? *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Stone Oak, Alamo Ranch, Schertz" className={FIELD_CLASS} {...field} />
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
                      <FormLabel className={LABEL_CLASS}>Max affordable monthly payment? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className={FIELD_CLASS}>
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-2xl">
                          {PAYMENT_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt} className="rounded-xl">
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
                <Button
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  disabled={isSubmitting}
                  className="h-12 rounded-2xl border-2 px-6 text-base font-semibold"
                >
                  ← Back
                </Button>
              ) : (
                <span />
              )}
              {step < LAST_STEP ? (
                <Button
                  type="button"
                  onClick={goNext}
                  className="h-12 rounded-2xl px-7 text-base font-bold bg-[#81D8D0] text-[#0b3b37] hover:bg-[#74cdc5] shadow-[0_4px_0_0_#57bdb4] hover:shadow-[0_2px_0_0_#57bdb4] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all"
                >
                  Next →
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 rounded-2xl px-7 text-base font-bold bg-[#81D8D0] text-[#0b3b37] hover:bg-[#74cdc5] shadow-[0_4px_0_0_#57bdb4] hover:shadow-[0_2px_0_0_#57bdb4] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all"
                >
                  {isSubmitting ? 'Submitting…' : 'Submit 🎉'}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
