import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { Reveal } from './Reveal'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className="project-card" direction={index % 2 ? 'right' : 'left'}>
      <div className="project-visual"><img src={project.image} alt={project.alt} loading="lazy" /></div>
      <div className="project-content">
        <div className="project-index"><span>{String(index + 1).padStart(2, '0')}</span><em>{project.category}</em></div>
        <h3><a href={project.repository} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
        <p>{project.description}</p>
        <div className="metric-row">{project.metrics.map(metric => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div>
        <ul className="highlight-list">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">View Repository <ArrowUpRight size={17} /></a>
      </div>
    </Reveal>
  )
}
