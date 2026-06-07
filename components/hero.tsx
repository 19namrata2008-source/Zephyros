'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, FolderGit2, Mail, MapPin } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { CONTACT } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-0 size-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 size-[24rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            Available for internships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Namrata Amar <span className="text-gradient">Shinde</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-lg font-semibold text-foreground/90"
          >
            Web Development Intern{' '}
            <span className="text-muted-foreground">|</span> AI &amp; ML Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            I am a Web Development Intern with a strong interest in designing and
            developing responsive, user-friendly websites. I have hands-on
            experience with HTML, CSS, JavaScript, and modern web technologies.
            Along with web development, I am passionate about Artificial
            Intelligence and Machine Learning and enjoy exploring how intelligent
            technologies can be integrated into modern applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 glow-primary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <FolderGit2 className="size-4" aria-hidden="true" />
              View Projects
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="inline-flex size-11 items-center justify-center rounded-xl glass text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Send email"
                className="inline-flex size-11 items-center justify-center rounded-xl glass text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-2">
            <Image
              src="/profile.png"
              alt="Portrait of Namrata Amar Shinde"
              width={480}
              height={560}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm font-medium">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {CONTACT.location}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
