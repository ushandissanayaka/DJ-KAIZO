'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILLS_LIST = [
  { name: 'Live Mixing', level: 98 },
  { name: 'Crowd Reading', level: 95 },
  { name: 'Sound Engineering', level: 90 },
  { name: 'Music Production', level: 85 },
  { name: 'Event Planning', level: 92 },
  { name: 'Wedding Curation', level: 97 },
]

const HIGHLIGHTS = [
  { icon: '🎵', text: '100+ Events Performed' },
  { icon: '🎓', text: 'Certified Sound Engineer' },
  { icon: '🌍', text: 'International Stage Experience' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32"
      style={{ background: '#000000' }}
    >
      {/* Top divider */}
      <div className="section-divider mb-20" />

      {/* Section label */}
      <div className="text-center mb-16 px-6">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[8px] uppercase mb-4 block"
          style={{ color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}
        >
          — THE ARTIST —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 100 }}
          className="font-black tracking-tight text-3d"
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: 'white',
          }}
        >
          ABOUT <span style={{ color: '#FF6B00' }}>DJ KAIZO</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 80 }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative">
            {/* Decorative frame */}
            <div
              className="absolute -inset-3 rounded-none"
              style={{
                border: '1px solid rgba(255,107,0,0.3)',
                transform: 'translate(12px, 12px)',
              }}
            />
            <div
              className="absolute -inset-3 rounded-none"
              style={{
                border: '1px solid rgba(255,107,0,0.15)',
                transform: 'translate(-12px, -12px)',
              }}
            />

            {/* Profile image — standard img for reliable z-index */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 'clamp(260px, 35vw, 420px)',
                aspectRatio: '3/4',
                background: '#1a1a1a',
              }}
            >
              {/* Actual photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile/dj-profile.jpg.placeholder.jpeg"
                alt="DJ KAIZO Profile"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: 'contrast(1.1) saturate(0.9)',
                  zIndex: 2,
                  display: 'block',
                }}
              />

              {/* Fallback gradient behind photo */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #1a1a1a, #2a1500)',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '4rem', color: '#FF6B00', opacity: 0.2 }}>DJ</div>
                </div>
              </div>

              {/* Orange gradient overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '33%',
                  background: 'linear-gradient(to top, rgba(255,107,0,0.2), transparent)',
                  zIndex: 3,
                }}
              />
            </div>

            {/* Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 px-4 py-3"
              style={{
                background: '#FF6B00',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-black font-black" style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.5rem' }}>10+</div>
              <div className="text-black/70 text-xs font-bold tracking-widest">YEARS EXP</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: About content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
          className="text-white"
        >
          {/* Intro */}
          <p
            className="text-lg md:text-xl mb-6 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
          >
            <strong style={{ color: '#FF6B00' }}>DJ KAIZO</strong> is a Dubai-based Progressive House,
            Deep House , Tech House, Afro House and Organic House DJ known for delivering deep, emotional,
            and melodic journeys on the dancefloor. With a passion for storytelling through music,
            his sets blend hypnotic grooves, atmospheric textures, and driving rhythms,
            creating immersive experiences that connect with audiences from start to finish.
          </p>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif' }}
          >
            Specializing in Progressive House, Deep House, Tech House, Afro House,
            and Organic House with a focus on melodic, emotional, and immersive performances.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  background: 'rgba(255,107,0,0.05)',
                  border: '1px solid rgba(255,107,0,0.2)',
                }}
              >
                <span className="text-xl">{h.icon}</span>
                <span className="text-sm font-semibold tracking-wide text-white/80">{h.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Skills bars */}
          <div>
            <h3
              className="text-sm tracking-[6px] uppercase mb-5"
              style={{ color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}
            >
              SKILL MATRIX
            </h3>
            <div className="space-y-3">
              {SKILLS_LIST.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(255,255,255,0.7)' }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'Share Tech Mono, monospace', color: '#FF6B00' }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 relative">
                    <motion.div
                      className="h-full"
                      style={{ background: 'linear-gradient(90deg, #FF6B00, #FF8C00)' }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.9 + i * 0.1, ease: 'easeOut' }}
                    />
                    {/* Glow tip */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{ background: '#FF6B00', boxShadow: '0 0 8px #FF6B00' }}
                      initial={{ left: 0 }}
                      animate={isInView ? { left: `calc(${skill.level}% - 4px)` } : { left: 0 }}
                      transition={{ duration: 1, delay: 0.9 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-20" />
    </section>
  )
}
