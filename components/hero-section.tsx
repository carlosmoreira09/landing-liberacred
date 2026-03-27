"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  onCtaClick: () => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const imgOffsetX = useTransform(springX, [-0.5, 0.5], ["-10px", "10px"])
  const imgOffsetY = useTransform(springY, [-0.5, 0.5], ["-6px", "6px"])

  // Parallax via scroll offset — plain state, no useScroll, fully SSR-safe
  const imgParallax = `${scrollY * 0.3}px`
  const textParallax = `${scrollY * 0.15}px`
  const heroOpacity = Math.max(0, 1 - scrollY / 500)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5)
      mouseY.set((e.clientY / window.innerHeight) - 0.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const scrollToNext = () => {
    document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-dark)" }}
      aria-label="Hero principal"
    >
      {/* Background motorcycle image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imgParallax, x: imgOffsetX }}
      >
        <motion.img
          src="/images/mt07.jpeg"
          alt="Yamaha MT-07 2025 — elegância e poder"
          className="w-full h-full object-cover object-center"
          style={{ y: imgOffsetY }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--yamaha-dark))",
          }}
        />
      </motion.div>

      {/* Scanline texture */}
      <div className="absolute inset-0 z-0 stripe-bg opacity-30 pointer-events-none" />

      {/* Blue light accent top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.55 0.22 240 / 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24"
        style={{
          transform: `translateY(${textParallax})`,
          opacity: heroOpacity,
        }}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span
              className="px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border font-sans"
              style={{
                color: "var(--yamaha-blue-bright)",
                borderColor: "oklch(0.55 0.22 240 / 0.4)",
                backgroundColor: "oklch(0.55 0.22 240 / 0.1)",
              }}
            >
              Concessionária Autorizada Yamaha
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-5xl md:text-7xl font-black uppercase leading-none mb-5 text-balance font-sans"
            style={{ color: "var(--foreground)" }}
          >
            Cansado de ter o{" "}
            <span className="text-glow" style={{ color: "var(--yamaha-blue-bright)" }}>
              financiamento negado?
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl leading-relaxed mb-10 font-sans"
            style={{ color: "oklch(0.82 0.04 240)" }}
          >
            Não importa se você está negativado ou é autônomo sem comprovação de
            renda. Com o{" "}
            <strong style={{ color: "var(--yamaha-blue-bright)" }}>
              Liberacred do Banco Yamaha
            </strong>{" "}
            na Hadena Motomar, a aprovação do seu financiamento é{" "}
            <strong style={{ color: "var(--foreground)" }}>garantida.</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={onCtaClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wider rounded-lg text-white blue-glow font-sans"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
              }}
            >
              Quero Minha Yamaha Agora
              <span className="text-xl">→</span>
            </motion.button>

            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold uppercase tracking-wider rounded-lg border font-sans"
              style={{
                borderColor: "oklch(0.55 0.22 240 / 0.5)",
                color: "var(--yamaha-blue-bright)",
                backgroundColor: "oklch(0.55 0.22 240 / 0.08)",
              }}
            >
              Como funciona?
            </motion.button>
          </motion.div>

          {/* Social proof micro-strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-6 flex-wrap"
          >
            {[
              { value: "0%", label: "Burocracia" },
              { value: "SEM", label: "Consulta SPC/Serasa" },
              { value: "100%", label: "Digital" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span
                  className="text-2xl font-black font-sans"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm font-sans"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        aria-label="Rolar para baixo"
        style={{ color: "oklch(0.65 0.04 240)" }}
      >
        <span className="text-xs uppercase tracking-widest font-sans">Descubra mais</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
