import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { STATS } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="About Me" title="Building, learning, and growing every day" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="rounded-2xl glass p-7 leading-relaxed text-muted-foreground">
            <p>
              I am currently pursuing a Diploma in Artificial Intelligence and
              Machine Learning at{' '}
              <span className="font-semibold text-foreground">
                Rajarambapu Institute of Technology
              </span>
              . I enjoy building responsive web applications, learning new
              technologies, and solving real-world problems through technology.
            </p>
            <p className="mt-4">
              My goal is to grow as a{' '}
              <span className="font-semibold text-foreground">
                full-stack developer
              </span>{' '}
              while expanding my expertise in Artificial Intelligence, Machine
              Learning, and modern web technologies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-center rounded-2xl glass p-5 text-center transition-transform hover:-translate-y-1 hover:glow-primary">
                <span className="font-heading text-2xl font-bold text-gradient">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
