import React from 'react'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
