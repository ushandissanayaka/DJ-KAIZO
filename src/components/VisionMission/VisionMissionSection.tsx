'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

/* ─── Content ──────────────────────────────────────────── */
const VISION = {
  tag: 'MY VISION',
  icon: '◈',
  titleWhite: 'MY ',
  titleOrange: 'VISION',
  body: "My vision is to create meaningful musical experiences that connect people through emotion, energy, and storytelling. As Kaizo, I aim to contribute to the global progressive and melodic house scene by delivering unique performances, developing my own sound, and sharing music that inspires lasting memories on and off the dancefloor.",
  points: [
    'Delivering world-class experiences across Dubai, UAE',
    'Elevating event music culture to global standards',
    'Creating memories that transcend the celebration',
  ],
}

const MISSION = {
  tag: 'MY MISSION',
  icon: '⬡',
  titleWhite: 'MY',
  titleOrange: 'MISSION',
  body: 'My mission as Kaizo is to craft immersive musical journeys through Progressive House, Deep House, Tech House, Afro House, and Organic House. By blending melodic depth, emotional storytelling, and rhythmic energy, I strive to create unforgettable experiences that unite people on the dancefloor. Through authentic performances, continuous artistic growth, and a dedication to quality music, I aim to inspire connection, movement, and lasting memories while contributing to the evolution of the global electronic music community.',
  points: [
    'Personalized music curation for every couple & event',
    'Professional-grade sound engineering at every venue',
    'Building genuine human connections through music',
  ],
}

/* ─── Main Component ───────────────────────────────────── */
export default function VisionMissionSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Fires as soon as section scrolls into the viewport
  const isInView = useInView(containerRef, { once: false, margin: '-5% 0px -5% 0px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /* Parallax — BG image drifts upward as you scroll */
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  /* Vision EXIT only — it starts visible, exits at 44%→57% */
  const visionExitOpacity = useTransform(scrollYProgress, [0.44, 0.57], [1, 0])
  const visionExitY = useTransform(scrollYProgress, [0.44, 0.57], [0, -70])

  /* Mission ENTRANCE — rises from below at 48%→62% */
  const missionOpacity = useTransform(scrollYProgress, [0.48, 0.62], [0, 1])
  const missionY = useTransform(scrollYProgress, [0.48, 0.62], [70, 0])

  /* Scroll dots */
  const dot1W = useTransform(scrollYProgress, [0, 0.5], [40, 14])
  const dot2W = useTransform(scrollYProgress, [0.5, 1], [14, 40])
  const dot1O = useTransform(scrollYProgress, [0, 0.5], [1, 0.25])
  const dot2O = useTransform(scrollYProgress, [0.5, 1], [0.25, 1])

  /* Center divider fades in during transition */
  const dividerOpacity = useTransform(scrollYProgress, [0.40, 0.55], [0, 1])

  return (
    <section
      ref={containerRef}
      style={{ height: '210vh', position: 'relative' }}
    >
      {/* ── Sticky Viewport ─────────────────────────── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* ── Fixed BG ──────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/gallery/bg-texture.jpg.placeholder.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(4px) brightness(0.5) saturate(0.75)',
            zIndex: 0,
          }}
        />

        {/* ── Dark Overlay ─────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(160deg,rgba(0,0,0,0.70) 0%,rgba(8,3,0,0.55) 50%,rgba(0,0,0,0.58) 100%)',
            zIndex: 1,
          }}
        />

        {/* ── Scanline ─────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* ── Decorative Lines & Brackets ──────────── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
          {/* Top accent */}
          <div style={{ position: 'absolute', top: 0, left: '8%', right: '8%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,107,0,0.5),transparent)' }} />
          {/* Bottom accent */}
          <div style={{ position: 'absolute', bottom: 0, left: '8%', right: '8%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,107,0,0.5),transparent)' }} />
          {/* TL bracket */}
          <div style={{ position: 'absolute', top: 24, left: 24, width: 48, height: 48, borderTop: '2px solid rgba(255,107,0,0.38)', borderLeft: '2px solid rgba(255,107,0,0.38)' }} />
          {/* BR bracket */}
          <div style={{ position: 'absolute', bottom: 24, right: 24, width: 48, height: 48, borderBottom: '2px solid rgba(255,107,0,0.38)', borderRight: '2px solid rgba(255,107,0,0.38)' }} />
          {/* Center vertical divider */}
          <motion.div style={{
            position: 'absolute', top: '12%', bottom: '12%', left: '50%', width: 1,
            background: 'linear-gradient(to bottom,transparent,rgba(255,107,0,0.6) 30%,rgba(255,107,0,0.6) 70%,transparent)',
            opacity: dividerOpacity,
          }} />
        </div>

        {/* ══════════════════════════════════════════════
            VISION PANEL
            Outer wrapper  → entrance (useInView)
            Inner wrapper  → scroll exit
        ═══════════════════════════════════════════════ */}
        <motion.div
          /* Animate IN as soon as section enters viewport */
          initial={{ opacity: 0, y: 72 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 72 }
          }
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'absolute', inset: 0, zIndex: 10 }}
        >
          {/* Scroll EXIT layer */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: visionExitOpacity,
              y: visionExitY,
            }}
          >
            <ContentPanel data={VISION} />
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            MISSION PANEL
            Purely scroll-driven entrance from below
        ═══════════════════════════════════════════════ */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            opacity: missionOpacity,
            y: missionY,
          }}
        >
          <ContentPanel data={MISSION} />
        </motion.div>

        {/* ── Scroll Progress Dots ─────────────────── */}
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, zIndex: 20,
        }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <motion.div style={{ height: 3, borderRadius: 2, background: '#FF6B00', width: dot1W, opacity: dot1O }} />
            <motion.div style={{ height: 3, borderRadius: 2, background: '#FF6B00', width: dot2W, opacity: dot2O }} />
          </div>
          <span style={{ fontSize: '0.55rem', letterSpacing: '4px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Share Tech Mono, monospace' }}>
            SCROLL
          </span>
        </div>
      </div>
    </section>
  )
}

/* ─── Content Panel ────────────────────────────────────── */
interface PanelData {
  tag: string; icon: string
  titleWhite: string; titleOrange: string
  body: string; points: string[]
}

function ContentPanel({ data }: { data: PanelData }) {
  return (
    <div style={{ maxWidth: 760, width: '90%', padding: '0 20px', textAlign: 'center' }}>

      {/* Tag */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
        <div style={{ height: 1, width: 50, background: '#FF6B00', boxShadow: '0 0 6px rgba(255,107,0,0.5)' }} />
        <span style={{ fontSize: '0.68rem', letterSpacing: '7px', color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}>
          {data.tag}
        </span>
        <div style={{ height: 1, width: 50, background: '#FF6B00', boxShadow: '0 0 6px rgba(255,107,0,0.5)' }} />
      </div>

      {/* Icon */}
      <div style={{ fontSize: '2.6rem', color: '#FF6B00', marginBottom: 16, textShadow: '0 0 24px rgba(255,107,0,0.7)', lineHeight: 1 }}>
        {data.icon}
      </div>

      {/* Heading */}
      <div style={{ marginBottom: 18, lineHeight: 1.05 }}>
        <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(2rem, 5.5vw, 4rem)', color: 'white', letterSpacing: '-1px' }}>
          {data.titleWhite}
        </div>
        <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(2rem, 5.5vw, 4rem)', color: '#FF6B00', letterSpacing: '-1px', textShadow: '0 0 40px rgba(255,107,0,0.35)' }}>
          {data.titleOrange}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 2, width: 72, background: 'linear-gradient(90deg,transparent,#FF6B00,transparent)', margin: '0 auto 22px' }} />

      {/* Body */}
      <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 620, margin: '0 auto 26px' }}>
        {data.body}
      </p>

      {/* Bullets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
        {data.points.map((point, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', background: 'rgba(255,107,0,0.05)', border: '1px solid rgba(255,107,0,0.18)', maxWidth: 520, width: '100%' }}>
            <div style={{ width: 6, height: 6, background: '#FF6B00', flexShrink: 0, transform: 'rotate(45deg)', boxShadow: '0 0 8px rgba(255,107,0,0.6)' }} />
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.5px', textAlign: 'left' }}>
              {point}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
