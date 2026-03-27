"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Search, Calculator, Clock, Bike } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Escolha sua Yamaha 0km",
    desc: "O primeiro passo é escolher a moto (ou motor de popa) que vai mudar a sua rotina.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-rua-yamaha-20medium-T3FjO3MNMkJSzVUvLQVDN6FrFkNWYY.jpeg",
    imageAlt: "Yamaha MT-03 na rua à noite — escolha o modelo certo para você",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Defina sua entrada (30% a 50%)",
    desc: "Você escolhe quanto quer dar de entrada e a gente parcela esse valor para você em 12x ou 18x.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-mt03-6251-20medium-W9hjMvp9k09OUCKysLQ3DOTMkHAPxV.jpeg",
    imageAlt: "Yamaha MT-03 2025 em cenário urbano noturno com neons",
  },
  {
    number: "03",
    icon: Clock,
    title: "Pague com pontualidade",
    desc: "Essa é a chave! Mantendo o pagamento das parcelas em dia, você constrói seu histórico direto com a Yamaha.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-capacete-yamaha-20v2-20medium-uBqauRgLbGBOLsunJbbPNW8jYnnBzZ.jpeg",
    imageAlt: "Motociclista com capacete Yamaha — comprometido com a pontualidade",
  },
  {
    number: "04",
    icon: Bike,
    title: "Financiamento liberado!",
    desc: "Terminou de pagar as parcelas do programa? Pronto! O restante é financiado automaticamente e você sai de Yamaha novinha!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-yamaha-r3-5591-20medium-VoWrIcA7BE2DAmRIabVf7oX9vUxpAY.jpeg",
    imageAlt: "Yamaha R3 2025 em ação na estrada — sua moto liberada",
  },
]

interface StepsSectionProps {
  onCtaClick: () => void
}

export function StepsSection({ onCtaClick }: StepsSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-dark)" }}
      aria-labelledby="steps-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.55 0.22 240 / 0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-semibold mb-3 font-sans"
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            4 passos simples
          </motion.p>
          <motion.h2
            id="steps-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight text-balance font-sans"
            style={{ color: "var(--foreground)" }}
          >
            O caminho para sua{" "}
            <span style={{ color: "var(--yamaha-blue-bright)" }}>garagem</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative rounded-2xl overflow-hidden ${
                  i % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 240 / 0.15) 0%, transparent 50%)",
                  }}
                />
                {/* Step number overlay */}
                <div
                  className="absolute top-4 left-4 text-7xl font-black leading-none font-sans select-none"
                  style={{ color: "oklch(0.55 0.22 240 / 0.3)" }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div
                className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "oklch(0.55 0.22 240 / 0.15)",
                      border: "1px solid oklch(0.55 0.22 240 / 0.3)",
                    }}
                  >
                    <step.icon
                      className="w-7 h-7"
                      style={{ color: "var(--yamaha-blue-bright)" }}
                    />
                  </div>
                  <span
                    className="text-sm font-bold uppercase tracking-widest font-sans"
                    style={{ color: "oklch(0.55 0.22 240 / 0.6)" }}
                  >
                    Passo {step.number}
                  </span>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-black uppercase leading-tight mb-4 font-sans"
                  style={{ color: "var(--foreground)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed font-sans"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                >
                  {step.desc}
                </p>

                {i === 3 && (
                  <div
                    className="mt-6 p-4 rounded-xl"
                    style={{
                      backgroundColor: "oklch(0.55 0.22 240 / 0.08)",
                      border: "1px solid oklch(0.55 0.22 240 / 0.25)",
                    }}
                  >
                    <p
                      className="text-sm font-bold mb-1 font-sans"
                      style={{ color: "var(--yamaha-blue-bright)" }}
                    >
                      Dica de Ouro Hadena
                    </p>
                    <p
                      className="text-sm leading-relaxed font-sans"
                      style={{ color: "oklch(0.72 0.04 240)" }}
                    >
                      Quer pegar a moto mais rápido? Com plano de 40%+, você
                      pode adiantar o pagamento no{" "}
                      <strong style={{ color: "var(--foreground)" }}>
                        6º ou 8º mês
                      </strong>{" "}
                      e efetivar o financiamento muito antes!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-base font-bold uppercase tracking-wider rounded-lg text-white blue-glow font-sans"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
            }}
          >
            Quero minha Yamaha pelo Liberacred
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
