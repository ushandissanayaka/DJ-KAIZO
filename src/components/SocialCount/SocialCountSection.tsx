'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GENRES = [
  { name: 'PROGRESSIVE', icon: '◈' },
  { name: 'MELODIC TECHNO', icon: '◈' },
  { name: 'AFRO HOUSE', icon: '◈' },
  { name: 'EDM', icon: '◈' },
  { name: 'HOUSE', icon: '◈' },
]



export default function SocialCountSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/gallery/bg-texture.jpg.placeholder.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />

      {/* Dark Transparent Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,0.85)',
          zIndex: 1,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            className="text-xs tracking-[8px] uppercase mb-4 block"
            style={{ color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}
          >
            — SOUND IDENTITY —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
            className="font-black text-3d"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'white',
            }}
          >
            MY <span style={{ color: '#FF6B00' }}>EXPERIENCE</span>
          </motion.h2>
        </div>

        {/* Genres grid */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-8 max-w-5xl mx-auto">
          {GENRES.map((genre, i) => (
            <motion.div
              key={genre.name}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.85 }}
              transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 90 }}
              whileHover={{ y: -8, scale: 1.06 }}
              className="relative flex flex-col items-center justify-center text-center px-10 py-8 cursor-pointer group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,107,0,0.18)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                minWidth: '180px',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.1), transparent 70%)',
                }}
              />

              {/* Icon */}
              <div
                className="text-3xl mb-4 relative z-10 group-hover:scale-125 transition-transform duration-300"
                style={{ color: '#FF6B00', textShadow: '0 0 20px rgba(255,107,0,0.5)' }}
              >
                {genre.icon}
              </div>

              {/* Genre name */}
              <div
                className="font-black tracking-[3px] uppercase relative z-10"
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                  color: 'white',
                  textShadow: '0 0 20px rgba(255,255,255,0.1)',
                }}
              >
                {genre.name}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
