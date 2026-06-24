'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Dynamic imports for client components
const HeroSection = dynamic(() => import('@/components/Hero/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/About/AboutSection'), { ssr: false })
const VisionMissionSection = dynamic(() => import('@/components/VisionMission/VisionMissionSection'), { ssr: false })
const GallerySection = dynamic(() => import('@/components/Gallery/GallerySection'), { ssr: false })
const SocialCountSection = dynamic(() => import('@/components/SocialCount/SocialCountSection'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/Contact/ContactSection'), { ssr: false })

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <GallerySection />
      <SocialCountSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
