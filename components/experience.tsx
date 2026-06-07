import { Briefcase, CheckCircle2, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EXPERIENCE } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow="Experience" title="Internship experience" />

      <div className="mx-auto max-w-3xl space-y-6">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <div className="rounded-2xl glass p-7 transition-transform hover:-translate-y-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Briefcase className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {job.role}
                    </h3>
                    <p className="text-sm text-accent">{job.company}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Clock className="size-3.5" />
                  {job.duration}
                </span>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {job.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
