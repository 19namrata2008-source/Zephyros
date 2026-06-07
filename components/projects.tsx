import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { PROJECTS } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of projects spanning web development, data, and AI/ML."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-transform hover:-translate-y-1.5">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <GithubIcon className="size-4" aria-hidden="true" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
