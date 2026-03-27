"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { LiberacredSection } from "@/components/liberacred-section"
import { StepsSection } from "@/components/steps-section"
import { ModelsSection } from "@/components/models-section"
import { DealersSection } from "@/components/dealers-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { SiteFooter } from "@/components/site-footer"
import { LeadFormModal } from "@/components/lead-form-modal"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  const [formOpen, setFormOpen] = useState(false)

  const openForm = () => setFormOpen(true)
  const closeForm = () => setFormOpen(false)

  return (
    <main>
      <Navbar onCtaClick={openForm} />

      <HeroSection onCtaClick={openForm} />
      <ProblemSection onCtaClick={openForm} />
      <LiberacredSection onCtaClick={openForm} />
      <StepsSection onCtaClick={openForm} />
      <ModelsSection onCtaClick={openForm} />
      <DealersSection onCtaClick={openForm} />
      <FaqSection />
      <FinalCtaSection onCtaClick={openForm} />

      <SiteFooter />

      <LeadFormModal isOpen={formOpen} onClose={closeForm} />
      <FloatingWhatsApp />
    </main>
  )
}
