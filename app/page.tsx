"use client"

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
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const WHATSAPP_NUMBER = "5522999990881"
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, vim da LP, quero mais informações sobre o liberacred, por favor."
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function Home() {
  const openWhatsApp = () => window.open(WHATSAPP_URL, "_blank")

  return (
    <main>
      <Navbar onCtaClick={openWhatsApp} />

      <HeroSection onCtaClick={openWhatsApp} />
      <ProblemSection onCtaClick={openWhatsApp} />
      <LiberacredSection onCtaClick={openWhatsApp} />
      <StepsSection onCtaClick={openWhatsApp} />
      <ModelsSection onCtaClick={openWhatsApp} />
      <DealersSection onCtaClick={openWhatsApp} />
      <FaqSection />
      <FinalCtaSection onCtaClick={openWhatsApp} />

      <SiteFooter />

      <FloatingWhatsApp />
    </main>
  )
}
