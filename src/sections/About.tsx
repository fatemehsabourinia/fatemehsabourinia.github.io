import { AIWorkflow } from '../components/AIWorkflow'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { highlights } from '../data/site'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Engineering intelligence from concept to application." />
        <div className="about-grid">
          <Reveal><p className="lead">I am an AI Engineer and Machine Learning Engineer with several years of experience across software engineering, artificial intelligence, machine learning, computer vision, data science, explainable AI, and mobile AI development.</p></Reveal>
          <Reveal delay={.1}><p>I develop end-to-end intelligent systems, covering data preparation, model development, evaluation, explainability, optimization, software integration, and real-world application development.</p></Reveal>
        </div>
        <div className="highlights">{highlights.map(([value, label], index) => <Reveal key={label} delay={index * .1} className="highlight"><strong>{value}</strong><span>{label}</span></Reveal>)}</div>
        <Reveal><AIWorkflow /></Reveal>
      </div>
    </section>
  )
}
