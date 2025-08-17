import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { Github } from 'lucide-react'

export const Projects = () => (
  <section className="section py-16" id="projects">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Projects
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-5">
      {projects.map((p, idx) => (
        <motion.article
          key={p.name}
          className="card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-xs text-slate-400">{p.period}</p>
            </div>
            {p.live && (
              <a
                href={p.live}
                className="text-sm underline underline-offset-4 hover:text-brand-500"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-300">
            {p.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <div className="mt-4">
            {p.source && (
              <a
                href={p.source}
                className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-brand-500"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
)
