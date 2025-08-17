import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export const About = () => (
  <section className="section py-16" id="about">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      About Me
    </motion.h2>
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      <p className="leading-7 text-slate-300">{profile.summary}</p>
    </motion.div>
  </section>
)
