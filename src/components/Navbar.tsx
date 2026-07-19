import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Fatemeh Sabourinia, home"><span>FS</span><i /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X /> : <Menu />}
      </button>
      <nav id="primary-navigation" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}
