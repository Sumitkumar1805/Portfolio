import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Github } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
      <nav className="section flex items-center justify-between h-16">
        <a href="#" className="font-semibold tracking-wide">
          Portfolio<span className="text-brand-500"></span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </ScrollLink>
          ))}
          <a
            href="https://github.com/Sumitkumar1805"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-brand-500/50"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
