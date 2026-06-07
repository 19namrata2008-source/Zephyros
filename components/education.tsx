import { GraduationCap, CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EDUCATION } from '@/lib/portfolio-data'

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Education" title="Academic journey" />

      <div className="relative mx-auto max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2"
        />

        {EDUCATION.map((item, i) => (
          <Reveal key={item.institution} delay={i * 0.1}>
            <div className="relative pl-12 sm:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/20 sm:left-1/2"
              />
              <div className="rounded-2xl glass p-6 sm:ml-[calc(50%+1.5rem)]">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {item.year}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm text-foreground/90">{item.degree}</p>
                <p className="mt-2 inline-block rounded-lg bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                  {item.status}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
