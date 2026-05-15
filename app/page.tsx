"use client"

import { useEffect, useState } from "react"
import { ParticleBackground } from "@/components/particle-background"
import { LoadingScreen } from "@/components/loading-screen"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
  }, [loading])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-slate-900 text-slate-100">
      <ParticleBackground />

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TimelineSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />

      <BackToTop />
    </div>
  )
}
