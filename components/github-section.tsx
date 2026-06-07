import { GitFork, Star, Users, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'
import { CONTACT } from '@/lib/portfolio-data'

const CONTRIB_WEEKS = 26
const CONTRIB_DAYS = 7

function pseudoLevel(week: number, day: number) {
  // deterministic pattern so it doesn't hydrate-mismatch
  const v = (week * 7 + day * 3 + ((week * day) % 5)) % 5
  return v
}

const LEVEL_CLASS = [
  'bg-secondary',
  'bg-primary/30',
  'bg-primary/50',
  'bg-primary/70',
  'bg-primary',
]

export function GithubSection() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal>
        <div className="overflow-hidden rounded-3xl glass p-7 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* profile card */}
            <div className="flex flex-col items-start gap-4 lg:col-span-1">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-foreground text-background">
                <GithubIcon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold">
                  @19namrata2008-source
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Building and sharing my projects on GitHub.
                </p>
              </div>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                View Profile
              </a>

              <div className="mt-2 grid w-full grid-cols-3 gap-3">
                {[
                  { icon: GitFork, label: 'Repos', value: '12' },
                  { icon: Star, label: 'Stars', value: '8' },
                  { icon: Users, label: 'Following', value: '15' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-secondary/60 p-3 text-center"
                  >
                    <s.icon
                      className="mx-auto mb-1 size-4 text-accent"
                      aria-hidden="true"
                    />
                    <div className="font-heading text-base font-bold">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* contribution graph */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">
                Contribution activity
              </h4>
              <div
                className="flex gap-1 overflow-x-auto pb-2"
                role="img"
                aria-label="GitHub contribution graph placeholder"
              >
                {Array.from({ length: CONTRIB_WEEKS }).map((_, w) => (
                  <div key={w} className="flex flex-col gap-1">
                    {Array.from({ length: CONTRIB_DAYS }).map((_, d) => {
                      const level = pseudoLevel(w, d)
                      return (
                        <span
                          key={d}
                          className={`size-3 rounded-sm ${LEVEL_CLASS[level]}`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                <span>Less</span>
                {LEVEL_CLASS.map((c, i) => (
                  <span key={i} className={`size-3 rounded-sm ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
