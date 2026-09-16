'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const DJ_NAME = 'KAIZO'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)



  return (
    <section id="home" className="relative w-full h-screen min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onPlaying={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ zIndex: 1 }}
      >
        <source src="/videos/dj-bg.mp4.placeholder.mp4" type="video/mp4" />
        {/* Fallback gradient */}
      </video>

      {/* Fallback animated background if no video */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" style={{ zIndex: 0 }}>
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Dark overlay — left half transparent dark */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Scanline overlay for DJ aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div className="relative flex items-center h-full px-6 md:px-16 lg:px-24" style={{ zIndex: 10 }}>
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-orange-500" />
            <span
              className="text-xs tracking-[6px] uppercase"
              style={{ color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}
            >
              BASED IN DUBAI, UAE
            </span>
          </motion.div>

          {/* DJ Name — Large typing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <h1
              className="font-black leading-none text-3d"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                color: '#FF6B00',
                letterSpacing: '-2px',
              }}
            >
              {DJ_NAME}
            </h1>
          </motion.div>

          {/* Genre badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['PROGRESSIVE', 'MELODIC TECHNO', 'AFRO HOUSE', 'EDM', 'HOUSE'].map((genre, i) => (
              <motion.span
                key={genre}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.08, type: 'spring', stiffness: 200 }}
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '3px',
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,107,0,0.35)',
                  background: 'rgba(255,107,0,0.06)',
                  padding: '4px 12px',
                  clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                }}
              >
                {genre}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: '#FF6B00',
                color: 'black',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                boxShadow: '0 0 30px rgba(255,107,0,0.4)',
              }}
            >
              BOOK NOW
            </a>
            <a
              href="#gallery"
              className="px-8 py-3 font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:bg-orange-500/10"
              style={{
                fontFamily: 'Orbitron, monospace',
                border: '1px solid #FF6B00',
                color: '#FF6B00',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              VIEW WORK
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest text-white/40" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-orange-500/40" style={{ zIndex: 10 }} />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-orange-500/40" style={{ zIndex: 10 }} />
    </section>
  )
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 4 }}>
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full bg-orange-500"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0.3,
            animation: `particleDrift ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  )
}
