import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

const filters = ['All', 'Computer Vision', 'Data Science', 'Explainable AI'] as const

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = filter === 'All' ? projects : projects.filter(project => project.category === filter)
  return (
    <section id="projects" className="section section-tinted"><div className="container"><SectionHeading eyebrow="04 / Selected work" title="AI research, built with evidence." intro="Four projects demonstrating comparative evaluation, responsible data science, computer vision, and model interpretation." />
      <div className="filters" aria-label="Filter projects">{filters.map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
      <div className="project-list">{visible.map(project => <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />)}</div>
    </div></section>
  )
}
