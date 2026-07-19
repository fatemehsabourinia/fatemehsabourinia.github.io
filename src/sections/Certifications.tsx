import { Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { certifications } from '../data/certifications'

export function Certifications() {
  return <section className="section"><div className="container"><SectionHeading eyebrow="09 / Continuous learning" title="Certifications." /><div className="cert-grid">{certifications.map((cert, index) => <Reveal className="cert-item" key={cert} delay={(index % 3) * .08}><Check size={17} /><span>{cert}</span></Reveal>)}</div></div></section>
}
