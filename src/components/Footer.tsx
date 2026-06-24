'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-40px' })

  return (
    <footer
      ref={ref}
      className="relative py-12 px-6 text-center"
      style={{ background: '#000', borderTop: '1px solid rgba(255,107,0,0.15)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Social icons with stagger */}
        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {[FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="p-3 transition-all duration-200 hover:text-orange-500 hover:scale-110"
              style={{ color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.2, color: '#FF6B00', borderColor: '#FF6B00' }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* DJ Name */}
        <motion.div
          style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.5rem', fontWeight: 900, color: '#FF6B00', letterSpacing: '6px' }}
          className="mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          DJ KAIZO
        </motion.div>

        {/* Copyright */}
        <motion.p
          style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Share Tech Mono, monospace', fontSize: '0.7rem', letterSpacing: '2px' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.45 }}
        >
          © {new Date().getFullYear()} DJ KAIZO. You've reached the end of the journey. Thank you for scrolling and being part of the experience.
        </motion.p>
      </div>
    </footer>
  )
}
