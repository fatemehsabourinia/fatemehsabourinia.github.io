import { FileText } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Publications() {
  return <section id="research" className="section section-tinted"><div className="container"><SectionHeading eyebrow="06 / Research" title="Research & Publications" intro="Author of two artificial intelligence research papers currently under peer review, with research spanning machine learning, deep learning, computer vision, transfer learning, explainable AI, and model evaluation." /><div className="publication-grid">{['AI Research Paper I', 'AI Research Paper II'].map((title, index) => <Reveal className="publication-card" key={title} delay={index * .12}><div><FileText /><span>Manuscript {String(index + 1).padStart(2, '0')}</span></div><h3>{title}</h3><p>Publication details will be added when they are publicly available.</p><strong><i /> Under Peer Review</strong></Reveal>)}</div></div></section>
}
