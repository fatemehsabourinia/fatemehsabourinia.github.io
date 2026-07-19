import { ArrowDownRight, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../data/site'
import { GitHubIcon } from './SocialIcons'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <motion.div className="hero-content" initial={reduced ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, .36, 1] }}>
        <p className="hero-kicker"><Sparkles size={15} /> Intelligence, engineered for impact</p>
        <h1 id="hero-title">Fatemeh <span>Sabourinia</span></h1>
        <p className="hero-role">AI Engineer <i /> Machine Learning Engineer</p>
        <p className="hero-fields">Computer Vision <span>/</span> Data Science <span>/</span> Explainable AI <span>/</span> Mobile AI</p>
        <p className="hero-statement">Building intelligent systems across computer vision, data science, explainable AI, and real-world software applications.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore My Work <ArrowDownRight size={18} /></a>
          <a className="button button-secondary" href={site.github} target="_blank" rel="noopener noreferrer"><GitHubIcon size={18} /> View GitHub</a>
        </div>
      </motion.div>
      <div className="hero-signal" aria-hidden="true"><span>01</span><div /><span>07</span></div>
    </section>
  )
}
