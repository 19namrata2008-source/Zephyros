'use client'

import { useState, type FormEvent } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
} from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/portfolio-data'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')
    const body = `Hi Namrata,%0D%0A%0D%0A${encodeURIComponent(
      message,
    )}%0D%0A%0D%0A— ${encodeURIComponent(name)}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`,
    )}&body=${body}`
    setSent(true)
  }

  const contactItems = [
    { icon: User, label: 'Name', value: CONTACT.name, href: undefined },
    { icon: MapPin, label: 'Location', value: CONTACT.location, href: undefined },
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
    },
  ]

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have an opportunity or just want to say hi? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl glass p-5 transition-colors hover:bg-secondary">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}

            <div className="mt-1 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Mail className="size-4" /> Email
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="size-4" /> Call
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col gap-4 rounded-2xl glass p-7"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-primary"
            >
              {sent ? (
                <>
                  <MessageSquare className="size-4" /> Opening your email...
                </>
              ) : (
                <>
                  <Send className="size-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
