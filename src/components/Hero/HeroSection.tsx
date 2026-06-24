'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const DJ_NAME = 'DJ KAIZO'
const SKILLS = [
  'WEDDING SPECIALIST',
  'LIVE MIXING EXPERT',
  'CROWD CONTROLLER',
  'BASS DROP MASTER',
  'EVENT ARCHITECT',
  'SOUND DESIGNER',
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typing effect for DJ name
  useEffect(() => {
    const skill = SKILLS[currentSkill]
    const speed = isDeleting ? 50 : 100

    if (!isDeleting && charIndex < skill.length) {
      const t = setTimeout(() => {
        setDisplayText(skill.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    }

    if (!isDeleting && charIndex === skill.length) {
      const t = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(skill.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, speed)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentSkill(s => (s + 1) % SKILLS.length)
    }
  }, [charIndex, isDeleting, currentSkill])

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

          {/* Typing skills subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <div
              className="flex items-center gap-2"
              style={{ height: '2.5rem' }}
            >
              <span
                className="text-white/40 text-sm tracking-widest"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
              >
                ▶
              </span>
              <span
                className="text-lg md:text-2xl tracking-[4px] uppercase border-r-2 border-orange-500 pr-1"
                style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  color: '#ffffff',
                  minWidth: '320px',
                  display: 'inline-block',
                  animation: 'blink-caret 0.75s step-end infinite',
                }}
              >
                {displayText}
                <span className="animate-pulse" style={{ color: '#FF6B00' }}>_</span>
              </span>
            </div>
          </motion.div>

          {/* Skill badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['HOUSE', 'EDM', 'HIPHOP', 'BAILA', 'BOLLYWOOD', 'TOP 40'].map((tag, i) => (
              <span key={tag} className="skill-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                {tag}
              </span>
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
