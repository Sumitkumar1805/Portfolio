import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data'

export const Experience = () => (
  <section className="section py-16" id="experience">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Experience
    </motion.h2>

    <div className="space-y-5">
      {experience.map((e, idx) => (
        <motion.article
          key={e.company}
          className="card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">{e.company}</h3>
              <p className="text-sm text-brand-500">{e.role}</p>
            </div>
            <p className="text-xs text-slate-400">{e.period}</p>
          </div>
          <ul className="mt-4 list-disc list-inside space-y-1 text-slate-300">
            {e.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
)
