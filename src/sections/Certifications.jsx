import React from 'react'
import { motion } from 'framer-motion'
import { trainings, certifications } from '../data'

export const Certifications = () => (
  <section className="section py-16" id="certifications">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Trainings & Certifications
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-5">
      {trainings.map((t) => (
        <div key={t.name} className="card">
          <h3 className="font-semibold">{t.name}</h3>
          <p className="text-xs text-slate-400">{t.period}</p>
          <p className="mt-2 text-sm text-slate-300">{t.details}</p>
          <a href={t.certificate} target="_blank" rel="noreferrer" className="mt-3 inline-block underline underline-offset-4 hover:text-brand-500">
            View Certificate
          </a>
        </div>
      ))}

      <div className="card">
        <h3 className="font-semibold mb-3">Other Certifications</h3>
        <ul className="space-y-2 text-sm">
          {certifications.map((c) => (
            <li key={c.name}>
              <a href={c.link} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-brand-500">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)
