import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export const Hero = () => {
  return (
    <section className="section pt-16 pb-20" id="hero">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-3 text-brand-500 font-medium">{profile.title}</p>
          <p className="mt-6 text-slate-300 max-w-2xl">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-brand-600/20 border border-brand-600/40 hover:bg-brand-600/30"
            >
              Visit GitHub
            </a>
            <a
              href={profile.resumeLink}
              className="px-4 py-2 rounded-xl border border-white/10 hover:border-brand-500/50"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="card min-h-[200px] flex items-center justify-center">
  <motion.img
    img src={`${import.meta.env.BASE_URL}DSC_003.jpg`} alt="Profile" 
    className="w-55 h-55 rounded-full shadow-lg border-4 border-white object-cover"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  />
</div>
        </motion.div>
      </div>
    </section>
  )
}
