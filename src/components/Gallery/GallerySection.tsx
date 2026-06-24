'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Gallery images data
const GALLERY_IMAGES = [
  { src: '/images/gallery/event1.jpg.placeholder.jpeg', label: 'Public Parties', tag: 'EVENT' },
  { src: '/images/gallery/event2.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event3.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event4.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event5.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event6.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event7.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event8.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
  { src: '/images/gallery/event4.jpg.placeholder.jpeg', label: 'Public Event', tag: 'EVENT' },
]

// Placeholder colors for demo
const PLACEHOLDER_COLORS = [
  'from-orange-900 to-black',
  'from-gray-900 to-orange-950',
  'from-black to-orange-900',
  'from-orange-950 to-gray-950',
  'from-gray-950 to-black',
  'from-black to-gray-900',
  'from-orange-900 to-gray-950',
  'from-gray-900 to-black',
  'from-black to-orange-900',
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/gallery/bg-texture.jpg.placeholder.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      >
        {/* Fallback animated BG */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(255,107,0,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(255,107,0,0.05) 0%, transparent 50%),
              #080808
            `,
          }}
        />
      </div>

      {/* Dark overlay on BG */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.82)', zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[8px] uppercase mb-4 block"
            style={{ color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}
          >
            — CAPTURED MOMENTS —
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
            EVENTS
          </motion.h2>
        </div>

        {/* Masonry-style gallery with animation from sides */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 md:gap-4 auto-rows-[260px] md:auto-rows-[300px]">
            {GALLERY_IMAGES.map((img, i) => {
              const isLeft = i % 2 === 0
              const isLarge = i === 0 || i === 5 // Make some images span 2 rows
              const isWide = i === 2 // Make some span 2 cols

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isLeft ? -80 : 80, scale: 0.9 }}
                  transition={{ duration: 0.7, delay: 0.05 + i * 0.07, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{
                    gridRow: isLarge ? 'span 2' : 'span 1',
                    gridColumn: isWide ? 'span 2' : 'span 1',
                    border: '1px solid rgba(255,107,0,0.15)',
                  }}
                >
                  {/* Placeholder gradient BG */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${PLACEHOLDER_COLORS[i]}`}
                    style={{ transition: 'all 0.3s ease' }}
                  />

                  {/* Actual image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${img.src})`,
                      filter: 'contrast(1.1) saturate(0.85)',
                    }}
                  />

                  {/* DJ logo watermark style placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity">
                    <span
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '3rem',
                        color: '#FF6B00',
                        fontWeight: 900,
                      }}
                    >
                      ◈
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(255,107,0,0.8), rgba(0,0,0,0.4))',
                    }}
                  >
                    <span
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(0,0,0,0.7)' }}
                    >
                      {img.tag}
                    </span>
                    <span
                      className="font-bold text-black"
                      style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.1rem' }}
                    >
                      {img.label}
                    </span>
                  </div>

                  {/* Tag badge */}
                  <div
                    className="absolute top-3 left-3 px-2 py-1 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'rgba(0,0,0,0.8)',
                      border: '1px solid #FF6B00',
                      color: '#FF6B00',
                      fontFamily: 'Share Tech Mono, monospace',
                    }}
                  >
                    {img.tag}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom row note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10"
          >
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-orange-500/10 hover:scale-105"
              style={{
                fontFamily: 'Orbitron, monospace',
                border: '1px solid rgba(255,107,0,0.4)',
                color: '#FF6B00',
              }}
            >
              <span>VIEW MORE ON INSTAGRAM</span>
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
