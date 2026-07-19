import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons'
import { site } from '../data/site'

export function Connect() {
  return <section id="connect" className="connect-section"><div className="connect-glow" aria-hidden="true" /><Reveal className="container connect-inner"><span className="eyebrow"><i />10 / Connect</span><h2>Let’s <em>Connect.</em></h2><p>Explore my projects, research work, and technical contributions through LinkedIn and GitHub.</p><div className="connect-links"><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /><span><small>Professional profile</small>LinkedIn</span><ArrowUpRight /></a><a href={site.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /><span><small>Open-source work</small>GitHub</span><ArrowUpRight /></a></div></Reveal></section>
}
