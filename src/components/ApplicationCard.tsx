import { ArrowUpRight, Play } from 'lucide-react'
import { Reveal } from './Reveal'
import type { applications } from '../data/applications'
import { GitHubIcon } from './SocialIcons'

export function ApplicationCard({ app, index }: { app: (typeof applications)[number]; index: number }) {
  return (
    <Reveal className="app-card" delay={index * .12}>
      <div className="phone-wrap"><div className="phone"><span className="phone-speaker" /><img src={app.image} alt={app.alt} loading="lazy" /></div></div>
      <div className="app-copy"><span className="app-label"><Play size={13} fill="currentColor" /> Published Android application</span><h3>{app.title}</h3><p>{app.description}</p>
        <div className="tag-list">{app.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="app-actions">
          <a className="button button-primary button-small" href={app.play} target="_blank" rel="noopener noreferrer"><Play size={16} fill="currentColor" /> Google Play</a>
          <a className="button button-secondary button-small" href={app.repository} target="_blank" rel="noopener noreferrer"><GitHubIcon size={16} /> Repository <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </Reveal>
  )
}
