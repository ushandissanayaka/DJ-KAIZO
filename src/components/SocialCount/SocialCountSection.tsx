'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  count: number
  suffix: string
  label: string
}

const STATS: StatItem[] = [
  { count: 100, suffix: '+', label: 'EVENTS PERFORMED' },
  { count: 5, suffix: '+ years', label: 'EXPERIENCE' },
  { count: 1000, suffix: '+', label: 'HANDLING CROWD' },
]

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let startTime: number | null = null
    let animFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        animFrame = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    animFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animFrame)
  }, [target, duration, shouldStart])

  return count
}

function StatCard({ stat, index, isInView }: { stat: StatItem; index: number; isInView: boolean }) {
  const count = useCountUp(stat.count, 2000, isInView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 90 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative flex flex-col items-center justify-center text-center p-10 cursor-pointer group"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,107,0,0.15)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.08), transparent 70%)`,
        }}
      />

      {/* Count — large number */}
      <div
        className="font-black leading-none mb-3 relative z-10"
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          color: '#FF6B00',
          textShadow: '0 0 30px rgba(255,107,0,0.4)',
        }}
      >
        {count}
        <span style={{ color: '#FF6B00', fontSize: '0.4em', marginLeft: '4px' }}>{stat.suffix}</span>
      </div>

      {/* Label */}
      <div
        className="text-sm md:text-base tracking-[4px] uppercase font-bold relative z-10"
        style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(255,255,255,0.8)' }}
      >
        {stat.label}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, #FF6B00, transparent)` }}
      />
    </motion.div>
  )
}

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
            — TRACK RECORD —
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

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
