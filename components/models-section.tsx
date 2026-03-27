"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

const models = [
  {
    name: "MT-07",
    category: "Naked Sport",
    image: "/images/mt07.jpeg",
    imageAlt: "Yamaha MT-07 2025 com motociclista em cenário urbano azul",
    highlight: "Motor CP2 689cc",
    badge: "Mais vendida",
  },
  {
    name: "MT-03",
    category: "Naked",
    image: "/images/mt03.jpeg",
    imageAlt: "Yamaha MT-03 2025 em rua iluminada com neons japoneses",
    highlight: "Motor Paralelo 321cc",
    badge: "Entrada facilitada",
  },
  {
    name: "R3",
    category: "Sport",
    image: "/images/r3.jpeg",
    imageAlt: "Yamaha R3 2025 em alta velocidade na pista",
    highlight: "DNA MotoGP",
    badge: "Esportiva",
  },
  {
    name: "Ténéré 700",
    category: "Adventure",
    image: "/images/tenere700.jpg",
    imageAlt: "Yamaha Ténéré 700 2025 em terreno off-road com piloto",
    highlight: "Off-road e asfalto",
    badge: "Aventura total",
  },
  {
    name: "Aerox",
    category: "Scooter Sport",
    image: "/images/aerox.jpeg",
    imageAlt: "Yamaha Aerox 2025 com piloto em ambiente de skate",
    highlight: "Urbana e conectada",
    badge: "Estilo de vida",
  },
]

interface ModelsSectionProps {
  onCtaClick: () => void
}

export function ModelsSection({ onCtaClick }: ModelsSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="modelos"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-surface)" }}
      aria-labelledby="modelos-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.55 0.22 240 / 0.4), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 100% 50%, oklch(0.55 0.22 240 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest font-semibold mb-3 font-sans"
              style={{ color: "var(--yamaha-blue-bright)" }}
            >
              Disponíveis no Liberacred
            </motion.p>
            <motion.h2
              id="modelos-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase leading-tight text-balance font-sans"
              style={{ color: "var(--foreground)" }}
            >
              Qual é a{" "}
              <span style={{ color: "var(--yamaha-blue-bright)" }}>sua</span>{" "}
              Yamaha?
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={onCtaClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-lg text-white font-sans"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
            }}
          >
            Simular meu financiamento
            <span>→</span>
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer yamaha-card ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={onCtaClick}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <motion.img
                  src={model.image}
                  alt={model.imageAlt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--yamaha-surface) 0%, transparent 60%)",
                  }}
                />
                {/* Badge */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide font-sans"
                  style={{
                    backgroundColor: "oklch(0.55 0.22 240 / 0.85)",
                    color: "white",
                  }}
                >
                  {model.badge}
                </div>
              </div>

              <div className="p-5">
                <p
                  className="text-xs uppercase tracking-widest mb-1 font-sans"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                >
                  {model.category}
                </p>
                <h3
                  className="text-2xl font-black uppercase mb-1 font-sans"
                  style={{ color: "var(--foreground)" }}
                >
                  Yamaha {model.name}
                </h3>
                <p
                  className="text-sm font-sans mb-4"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                >
                  {model.highlight}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-bold uppercase tracking-wide font-sans"
                    style={{ color: "var(--yamaha-blue-bright)" }}
                  >
                    Ver condições Liberacred
                  </span>
                  <span
                    className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--yamaha-blue-bright)" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
