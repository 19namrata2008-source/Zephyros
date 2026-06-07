import { Reveal } from '@/components/reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
