import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  )
}
