'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { ContactFormPrefill } from './contact-form-body'

// The form pulls in react-hook-form + zod + radix select/radio (~120 KiB). It's
// useless until the modal is opened, so load it on demand — keeps it out of the
// initial bundle and off the homepage's critical path.
const ContactFormBody = dynamic(
  () => import('./contact-form-body').then((m) => m.ContactFormBody),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-sm text-muted-foreground">
        <DialogTitle className="sr-only">Contact Rami</DialogTitle>
        Loading…
      </div>
    ),
  },
)

interface ContactFormModalProps {
  children: React.ReactNode
  /** Pre-fill answers (e.g. from the calculator or VA checker) so the lead doesn't repeat themselves. */
  prefill?: ContactFormPrefill
}

export function ContactFormModal({ children, prefill }: ContactFormModalProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[440px] rounded-[28px] border-2 border-[#d8eeec] bg-[#fbfdfc] p-6 shadow-2xl">
        {/* Radix unmounts content on close, so the body (and its heavy chunk) only
            loads on first open, and the wizard resets to a fresh state each time. */}
        {open && <ContactFormBody prefill={prefill} onClose={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  )
}
