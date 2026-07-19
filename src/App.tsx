import { AnimatedBackground } from './components/AnimatedBackground'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Applications } from './sections/Applications'
import { Certifications } from './sections/Certifications'
import { Connect } from './sections/Connect'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Expertise } from './sections/Expertise'
import { Projects } from './sections/Projects'
import { Publications } from './sections/Publications'
import { Skills } from './sections/Skills'

export default function App() {
  return <><AnimatedBackground /><Navbar /><main id="main-content"><Hero /><About /><Expertise /><Skills /><Projects /><Applications /><Publications /><Experience /><Education /><Certifications /><Connect /></main><Footer /></>
}
