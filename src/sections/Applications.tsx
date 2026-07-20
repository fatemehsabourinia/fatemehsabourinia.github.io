import { ApplicationCard } from '../components/ApplicationCard'
import { SectionHeading } from '../components/SectionHeading'
import { applications } from '../data/applications'

export function Applications() {
  return <section id="applications" className="section"><div className="container"><SectionHeading eyebrow="05 / Mobile AI" title="Published Android applications." intro="These applications bring optimized image-classification models into accessible, user-friendly on-device experiences." /><div className="applications-grid">{applications.map((app, index) => <ApplicationCard app={app} index={index} key={app.title} />)}</div></div></section>
}
