"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { XCircle, CheckCircle2 } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
}

interface ProblemSectionProps {
  onCtaClick: () => void
}

export function ProblemSection({ onCtaClick }: ProblemSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    "Trabalha duro todos os dias, mas não tem contracheque para provar renda?",
    "Tentou financiar uma moto para trabalhar ou passear, mas o banco disse 'NÃO'?",
    "Está com alguma restrição no CPF e acha que ter uma moto 0km é impossível?",
  ]

  return (
    <section
      id="problema"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-dark)" }}
      aria-labelledby="problema-heading"
    >
      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.55 0.22 240 / 0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with blue overlay effect */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/08-pack-yamaha-VRUPUwd85VxmtrJwWy6EteQentI0sU.jpg"
                alt="Yamaha MT-07 e MT-03 — dois modelos, infinitas possibilidades"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--yamaha-dark) 0%, transparent 50%)",
                }}
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 flex items-center gap-3 p-4 rounded-xl yamaha-card"
              >
                <CheckCircle2
                  className="w-8 h-8 shrink-0"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                />
                <div>
                  <p
                    className="text-sm font-bold font-sans"
                    style={{ color: "var(--foreground)" }}
                  >
                    Boa notícia: existe uma solução oficial
                  </p>
                  <p
                    className="text-xs font-sans mt-0.5"
                    style={{ color: "oklch(0.65 0.04 240)" }}
                  >
                    Banco Yamaha criou o programa Liberacred especialmente para você
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Problem cards */}
          <div className="order-1 lg:order-2">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-xs uppercase tracking-widest font-semibold mb-3 font-sans"
              style={{ color: "var(--yamaha-blue-bright)" }}
            >
              Você já passou por isso?
            </motion.p>

            <motion.h2
              id="problema-heading"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8 text-balance font-sans"
              style={{ color: "var(--foreground)" }}
            >
              O banco sempre diz{" "}
              <span style={{ color: "oklch(0.65 0.22 25)" }}>NÃO</span>{" "}
              para você?
            </motion.h2>

            <div className="space-y-4 mb-10">
              {problems.map((problem, i) => (
                <motion.div
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-3 p-4 rounded-xl yamaha-card"
                >
                  <XCircle
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "oklch(0.65 0.22 25)" }}
                  />
                  <p
                    className="text-sm leading-relaxed font-sans"
                    style={{ color: "oklch(0.82 0.02 240)" }}
                  >
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-base leading-relaxed mb-8 font-sans"
              style={{ color: "oklch(0.72 0.04 240)" }}
            >
              Nós, da{" "}
              <strong style={{ color: "var(--foreground)" }}>
                Hadena Motomar
              </strong>
              , sabemos como isso é frustrante. Mas o Banco Yamaha criou uma
              solução oficial para você{" "}
              <strong style={{ color: "var(--yamaha-blue-bright)" }}>
                não depender mais da análise de crédito tradicional.
              </strong>
            </motion.p>

            <motion.button
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              onClick={onCtaClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-lg text-white blue-glow font-sans"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
              }}
            >
              Fale com nossa equipe agora
              <span>→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
