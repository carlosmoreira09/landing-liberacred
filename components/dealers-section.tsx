"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { MapPin, Phone, MessageCircle } from "lucide-react"

const units = [
  {
    city: "Campos dos Goytacazes",
    state: "RJ",
    address: "Av. Alberto Torres, 248 — Aterrado",
    phone: "(22) 99999-0001",
    whatsapp: "5522999990001",
    mapLink: "#",
    primary: true,
  },
  {
    city: "Santo Antônio de Pádua",
    state: "RJ",
    address: "Rua Principal, Centro",
    phone: "(22) 99999-0002",
    whatsapp: "5522999990002",
    mapLink: "#",
    primary: false,
  },
  {
    city: "São Francisco de Itabapoana",
    state: "RJ",
    address: "Av. Comercial, 100",
    phone: "(22) 99999-0003",
    whatsapp: "5522999990003",
    mapLink: "#",
    primary: false,
  },
]

interface DealersSectionProps {
  onCtaClick: () => void
}

export function DealersSection({ onCtaClick }: DealersSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="unidades"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-dark)" }}
      aria-labelledby="unidades-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.55 0.22 240 / 0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-semibold mb-3 font-sans"
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            Estamos perto de você
          </motion.p>
          <motion.h2
            id="unidades-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight text-balance font-sans"
            style={{ color: "var(--foreground)" }}
          >
            Nossas{" "}
            <span style={{ color: "var(--yamaha-blue-bright)" }}>unidades</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base max-w-xl mx-auto font-sans leading-relaxed"
            style={{ color: "oklch(0.65 0.04 240)" }}
          >
            Atendemos toda a região Norte Fluminense. Venha nos visitar ou
            inicie seu processo 100% online pelo WhatsApp.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.city}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="yamaha-card rounded-2xl p-6 flex flex-col gap-4"
            >
              {unit.primary && (
                <div
                  className="self-start px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide font-sans"
                  style={{
                    backgroundColor: "oklch(0.55 0.22 240 / 0.15)",
                    color: "var(--yamaha-blue-bright)",
                    border: "1px solid oklch(0.55 0.22 240 / 0.3)",
                  }}
                >
                  Matriz
                </div>
              )}

              <div>
                <h3
                  className="text-xl font-black uppercase font-sans"
                  style={{ color: "var(--foreground)" }}
                >
                  {unit.city}
                </h3>
                <p
                  className="text-xs uppercase tracking-widest font-sans mt-0.5"
                  style={{ color: "oklch(0.55 0.22 240 / 0.7)" }}
                >
                  {unit.state}
                </p>
              </div>

              <div className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                />
                <p
                  className="text-sm font-sans leading-relaxed"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                >
                  {unit.address}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                />
                <p
                  className="text-sm font-sans"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                >
                  {unit.phone}
                </p>
              </div>

              <div className="flex gap-3 mt-auto pt-2">
                <motion.a
                  href={`https://wa.me/${unit.whatsapp}?text=Olá! Tenho interesse no programa Liberacred da Hadena Motomar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold uppercase tracking-wide font-sans text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>
                <motion.button
                  onClick={onCtaClick}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold uppercase tracking-wide font-sans border"
                  style={{
                    borderColor: "oklch(0.55 0.22 240 / 0.4)",
                    color: "var(--yamaha-blue-bright)",
                    backgroundColor: "oklch(0.55 0.22 240 / 0.07)",
                  }}
                >
                  Formulário
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
