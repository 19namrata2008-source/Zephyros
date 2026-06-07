import { Award, BadgeCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CERTIFICATIONS } from '@/lib/portfolio-data'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & achievements"
          description="Continuously upskilling through industry-recognized certifications."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl glass p-6 transition-transform hover:-translate-y-1 hover:glow-primary">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                  <Award className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
