import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { expertise } from '../data/site'

export function Expertise() {
  return (
    <section id="expertise" className="section section-tinted">
      <div className="container"><SectionHeading eyebrow="02 / Expertise" title="Depth across the AI lifecycle." intro="A cross-disciplinary practice connecting rigorous model development with clear interpretation and usable software." />
        <div className="expertise-grid">{expertise.map((item, index) => <Reveal className="expertise-card" key={item.title} delay={(index % 3) * .1}><div><span>{item.code}</span><i>{String(index + 1).padStart(2, '0')}</i></div><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div>
      </div>
    </section>
  )
}
