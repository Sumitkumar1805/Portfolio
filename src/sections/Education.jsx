import React from 'react'
import { motion } from 'framer-motion'
import { education } from '../data'

export const Education = () => (
  <section className="section py-16" id="education">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Education
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-5">
      {education.map((ed, idx) => (
        <motion.article
          key={ed.school}
          className="card"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
        >
          <h3 className="text-lg font-semibold">{ed.school}</h3>
          <p className="text-sm text-brand-500">{ed.degree}</p>
          <div className="mt-2 text-xs text-slate-400 flex items-center justify-between">
            <span>{ed.location}</span>
            <span>{ed.period}</span>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
)
