import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data'

const Group = ({ title, items }) => (
  <div className="card">
    <h3 className="font-medium mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="badge">{s}</span>
      ))}
    </div>
  </div>
)

export const Skills = () => (
  <section className="section py-16" id="skills">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Skills
    </motion.h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Group title="Languages" items={skills.languages} />
      <Group title="Frameworks" items={skills.frameworks} />
      <Group title="Databases" items={skills.databases} />
      <Group title="Developer Tools" items={skills.tools} />
      <Group title="Concepts" items={skills.concepts} />
    </div>
  </section>
)
