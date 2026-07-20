import { AIWorkflow } from '../components/AIWorkflow'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { highlights } from '../data/site'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Building intelligent systems with practical impact." />
        <div className="about-grid">
          <Reveal><p className="lead">I am an AI Engineer and Machine Learning Engineer focused on developing reliable, end-to-end solutions across computer vision, data science, Python development, and mobile AI. My work combines model development, technical evaluation, and software integration to transform complex problems into practical applications.</p></Reveal>
        </div>
        <div className="highlights">{highlights.map(([value, label], index) => <Reveal key={label} delay={index * .1} className="highlight"><strong>{value}</strong><span>{label}</span></Reveal>)}</div>
        <Reveal><AIWorkflow /></Reveal>
      </div>
    </section>
  )
}
