import { GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Education() {
  const education = [['MSc Computing', 'University of Essex'], ["Bachelor’s Degree", 'Azad University']]
  return <section id="education" className="section section-tinted"><div className="container"><SectionHeading eyebrow="08 / Education" title="Academic foundation." /><div className="education-grid">{education.map(([degree, university], index) => <Reveal className="education-card" key={degree} delay={index * .12}><GraduationCap /><span>0{index + 1}</span><h3>{degree}</h3><p>{university}</p></Reveal>)}</div></div></section>
}
