import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export const Contact = () => (
  <section className="section py-16" id="contact">
    <motion.h2
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Contact
    </motion.h2>

    <div className="card">
      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-400">Email</p>
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <p className="text-slate-400">Phone</p>
          <a className="underline underline-offset-4" href={`tel:${profile.phone}`}>{profile.phone}</a>
        </div>
        <div>
          <p className="text-slate-400">Location</p>
          <p>{profile.location}</p>
        </div>
        <div>
          <p className="text-slate-400">GitHub</p>
          <a className="underline underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </div>
      </div>
    </div>
  </section>
)
