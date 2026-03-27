"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

interface FinalCtaSectionProps {
  onCtaClick: () => void
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [bgOffset, setBgOffset] = useState(0)

  // Scroll-driven parallax via plain event listener — no useScroll, fully SSR-safe
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const viewH = window.innerHeight
      // progress 0→1 as section scrolls from entering to leaving viewport
      const progress = 1 - (rect.bottom / (viewH + rect.height))
      setBgOffset(progress * 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-32 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${bgOffset}%)`, willChange: "transform" }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-xtz690-dpbmc-eur-yam-xtz700-eu-dpbmc-act-014-03-20medium-n6z87bXNBBHqLjtoz1nmKhtEFSPC96.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.08 0.01 240 / 0.97) 0%, oklch(0.08 0.01 240 / 0.85) 50%, oklch(0.08 0.01 240 / 0.7) 100%)",
          }}
        />
      </div>

      {/* Blue accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom, oklch(0.55 0.22 240 / 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest font-semibold mb-4 font-sans"
          style={{ color: "var(--yamaha-blue-bright)" }}
        >
          Hadena Motomar — Concessionária Autorizada Yamaha
        </motion.p>

        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 text-balance font-sans"
          style={{ color: "var(--foreground)" }}
        >
          Sua Yamaha 0km{" "}
          <span className="text-glow" style={{ color: "var(--yamaha-blue-bright)" }}>
            está mais perto
          </span>{" "}
          do que você imagina
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-sans"
          style={{ color: "oklch(0.78 0.04 240)" }}
        >
          Não deixe o CPF negativado ou a falta de comprovante de renda te
          impedir de conquistar esse sonho. Nossa equipe está pronta para{" "}
          <strong style={{ color: "var(--foreground)" }}>
            aprovar o seu financiamento agora.
          </strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-black uppercase tracking-wider rounded-lg text-white blue-glow font-sans"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
            }}
          >
            Quero minha Yamaha agora
            <span className="text-lg">→</span>
          </motion.button>

          <motion.a
            href="https://wa.me/5522999990001?text=Ol%C3%A1%21+Tenho+interesse+no+programa+Liberacred+da+Hadena+Motomar."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-bold uppercase tracking-wider rounded-lg border font-sans"
            style={{
              borderColor: "oklch(0.55 0.22 240 / 0.5)",
              color: "var(--yamaha-blue-bright)",
              backgroundColor: "oklch(0.55 0.22 240 / 0.08)",
            }}
          >
            Falar no WhatsApp
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-8"
        >
          {[
            "Concessionária Oficial Yamaha",
            "Atendimento 100% Digital",
            "Processo Transparente",
          ].map((trust) => (
            <div
              key={trust}
              className="flex items-center gap-2"
              style={{ color: "oklch(0.55 0.04 240)" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--yamaha-blue-bright)" }}
              />
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">
                {trust}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
