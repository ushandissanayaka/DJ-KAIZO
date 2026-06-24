'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#gallery', label: 'EVENTS' },
  { href: '#stats', label: 'STATS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,107,0,0.2)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: '#FF6B00', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '0.65rem', color: 'black' }}>DJ</span>
            </div>
            <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1.1rem', color: 'white', letterSpacing: '3px' }}>
              KAIZO
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-bold tracking-widest transition-all duration-300 text-white/60 hover:text-[#FF6B00] hover:scale-110"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-bold tracking-widest transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: '#FF6B00',
                color: 'black',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              }}
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-20 px-8 gap-6"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-black tracking-widest uppercase border-b py-4 text-white transition-colors duration-300 hover:text-[#FF6B00]"
                style={{ fontFamily: 'Orbitron, monospace', borderColor: 'rgba(255,107,0,0.15)' }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
