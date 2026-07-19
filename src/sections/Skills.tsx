import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section"><div className="container"><SectionHeading eyebrow="03 / Technical toolkit" title="Tools chosen for the problem." intro="A practical stack spanning experimentation, evaluation, explainability, software integration, and on-device inference." />
      <div className="skills-grid">{skillGroups.map((group, index) => <Reveal className="skill-group" key={group.title} delay={(index % 2) * .1}><span className="skill-number">{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill, i) => <span key={skill} style={{ '--delay': `${i * .025}s` } as React.CSSProperties}>{skill}</span>)}</div></Reveal>)}</div>
    </div></section>
  )
}
