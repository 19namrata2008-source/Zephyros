import { Mail, Phone, Code2 } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { CONTACT, NAV_LINKS } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a
              href="#home"
              className="flex items-center justify-center gap-2 font-heading text-lg font-bold md:justify-start"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="size-4" aria-hidden="true" />
              </span>
              Namrata<span className="text-primary">.</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Designed and Developed by Namrata Amar Shinde
            </p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-5 gap-y-2"
            aria-label="Footer"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-xl glass text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center rounded-xl glass text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              aria-label="Phone"
              className="inline-flex size-10 items-center justify-center rounded-xl glass text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Namrata Amar Shinde. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
