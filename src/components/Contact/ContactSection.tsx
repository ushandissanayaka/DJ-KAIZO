'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn,
  FaYoutube, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa'

const SOCIALS = [
  { icon: <FaFacebookF size={22} />, label: 'Facebook', url: 'https://facebook.com', color: '#1877F2' },
  { icon: <FaInstagram size={22} />, label: 'Instagram', url: 'https://instagram.com', color: '#E1306C' },
  { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', url: 'https://wa.me/971561558774', color: '#25D366' },
  { icon: <FaLinkedinIn size={22} />, label: 'LinkedIn', url: 'https://linkedin.com', color: '#0077B5' },
  { icon: <FaYoutube size={22} />, label: 'YouTube', url: 'https://youtube.com', color: '#FF0000' },
  { icon: <FaTiktok size={22} />, label: 'TikTok', url: 'https://tiktok.com', color: '#69C9D0' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#070707' }}>
      {/* BG grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,107,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.5) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            className="text-xs tracking-[8px] uppercase mb-4 block" style={{ color: '#FF6B00', fontFamily: 'Share Tech Mono, monospace' }}>
            — GET IN TOUCH —
          </motion.span>
          <motion.h2 initial={{ opacity: 0, scale: 0.85 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }} transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
            className="font-black text-3d" style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'white' }}>
            BOOK <span style={{ color: '#FF6B00' }}>DJ KAIZO</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact info + Socials + QR */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
            className="space-y-12">

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-bold mb-6 tracking-widest uppercase text-center" style={{ fontFamily: 'Orbitron, monospace', color: '#FF6B00' }}>
                CONTACT INFO
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <FaPhone size={16} />, text: '0561558774', label: 'CALL / WHATSAPP', link: 'https://wa.me/971561558774' },
                  { icon: <FaEnvelope size={16} />, text: 'Kasunanuradha994@gmail.com', label: 'EMAIL', link: 'mailto:Kasunanuradha994@gmail.com' },
                  { icon: <FaMapMarkerAlt size={16} />, text: 'Dubai', label: 'LOCATION', link: null },
                ].map((item, i) => {
                  const Wrapper = item.link ? 'a' : 'div'
                  const linkProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {}

                  return (
                    <Wrapper
                      key={i}
                      {...linkProps as any}
                      className={`flex items-center gap-4 p-4 ${item.link ? 'transition-all duration-300 hover:bg-orange-500/10 cursor-pointer group' : ''}`}
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,107,0,0.1)', display: 'flex', textDecoration: 'none' }}
                    >
                      <div className="p-2 rounded transition-colors group-hover:bg-orange-500 group-hover:text-black" style={{ background: 'rgba(255,107,0,0.1)', color: '#FF6B00' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Share Tech Mono, monospace' }}>{item.label}</div>
                        <div className="text-white font-semibold group-hover:text-orange-500 transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.text}</div>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>
            </div>

            {/* Social icons */}
            <div>
              <h3 className="text-sm font-bold mb-4 tracking-widest uppercase text-center" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(255,255,255,0.4)' }}>
                FOLLOW DJ KAIZO
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="social-icon-btn flex flex-col items-center justify-center gap-2 p-4"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07 }}
                  >
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <span className="text-[10px] tracking-wider mt-1" style={{ fontFamily: 'Share Tech Mono, monospace', color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp QR Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-6 text-center"
              style={{ background: 'rgba(37,211,102,0.05)', border: '1px solid rgba(37,211,102,0.2)' }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaWhatsapp size={20} style={{ color: '#25D366' }} />
                <span className="text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Share Tech Mono, monospace', color: '#25D366' }}>
                  WHATSAPP QR
                </span>
              </div>
              <div className="inline-block qr-container mb-3">
                <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="120" fill="white" />
                  <rect x="10" y="10" width="30" height="30" fill="black" /><rect x="14" y="14" width="22" height="22" fill="white" /><rect x="18" y="18" width="14" height="14" fill="black" />
                  <rect x="80" y="10" width="30" height="30" fill="black" /><rect x="84" y="14" width="22" height="22" fill="white" /><rect x="88" y="18" width="14" height="14" fill="black" />
                  <rect x="10" y="80" width="30" height="30" fill="black" /><rect x="14" y="84" width="22" height="22" fill="white" /><rect x="18" y="88" width="14" height="14" fill="black" />
                  {[46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110].map((x, i) =>
                    [46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110].map((y, j) =>
                      (i + j) % 3 === 0 ? <rect key={`${i}-${j}`} x={x - 36} y={y - 36} width="4" height="4" fill="black" /> : null
                    )
                  )}
                </svg>
              </div>
              <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Rajdhani, sans-serif' }}>
                Scan to chat on WhatsApp
              </p>
              <a
                href="https://wa.me/971561558774"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2 text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105"
                style={{ background: '#25D366', color: 'black', fontFamily: 'Share Tech Mono, monospace' }}
              >
                OPEN WHATSAPP
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
