'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { SKILL_GROUPS } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A growing toolkit spanning web development, data, and AI/ML."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = group.icon
            return (
              <Reveal key={group.title} delay={gi * 0.06}>
                <div className="flex h-full flex-col rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-base font-semibold">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-foreground/90">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
