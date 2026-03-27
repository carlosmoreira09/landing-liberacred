"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ShieldCheck, Banknote, UserCheck, Zap } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Sem consulta ao SPC/Serasa",
    desc: "Para aderir ao programa, não há análise de crédito restritiva. Negativado? Sem problema.",
  },
  {
    icon: Banknote,
    title: "Sem comprovante de renda",
    desc: "Autônomo, MEI, profissional liberal? Não precisa apresentar contracheque.",
  },
  {
    icon: UserCheck,
    title: "Financiamento garantido",
    desc: "Ao pagar as parcelas da entrada pontualmente, o restante é aprovado automaticamente.",
  },
  {
    icon: Zap,
    title: "Pode antecipar e pegar mais rápido",
    desc: "A partir do 6º mês (plano 40%+), você já pode antecipar o restante e sair com sua moto.",
  },
]

interface LiberacredSectionProps {
  onCtaClick: () => void
}

export function LiberacredSection({ onCtaClick }: LiberacredSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="liberacred"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-surface)" }}
      aria-labelledby="liberacred-heading"
    >
      {/* Subtle background accent */}
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
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.55 0.22 240 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-semibold mb-3 font-sans"
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            Programa Exclusivo
          </motion.p>
          <motion.h2
            id="liberacred-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6 text-balance font-sans"
            style={{ color: "var(--foreground)" }}
          >
            O{" "}
            <span
              className="text-glow"
              style={{ color: "var(--yamaha-blue-bright)" }}
            >
              Liberacred
            </span>{" "}
            é a sua virada
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto leading-relaxed font-sans"
            style={{ color: "oklch(0.72 0.04 240)" }}
          >
            O programa exclusivo do{" "}
            <strong style={{ color: "var(--foreground)" }}>Banco Yamaha</strong>{" "}
            onde você parcela a entrada da sua motocicleta. Pagou certinho?{" "}
            <strong style={{ color: "var(--yamaha-blue-bright)" }}>
              O financiamento do restante está aprovado.
            </strong>{" "}
            Simples assim.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
              className="yamaha-card rounded-2xl p-6 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "oklch(0.55 0.22 240 / 0.12)",
                  border: "1px solid oklch(0.55 0.22 240 / 0.2)",
                }}
              >
                <benefit.icon
                  className="w-6 h-6"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                />
              </div>
              <h3
                className="text-base font-bold mb-2 font-sans"
                style={{ color: "var(--foreground)" }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-sans"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key rule highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden text-center"
          style={{
            background: "oklch(0.55 0.22 240 / 0.08)",
            border: "1px solid oklch(0.55 0.22 240 / 0.3)",
          }}
        >
          <div
            className="absolute inset-0 stripe-bg opacity-40 pointer-events-none rounded-2xl"
          />
          <p
            className="text-sm uppercase tracking-widest font-semibold mb-3 font-sans"
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            A regra é simples
          </p>
          <p
            className="text-2xl md:text-3xl font-black uppercase leading-tight mb-6 font-sans"
            style={{ color: "var(--foreground)" }}
          >
            Pagou a entrada parcela certinho?{" "}
            <span style={{ color: "var(--yamaha-blue-bright)" }}>
              O financiamento está aprovado.
            </span>
          </p>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed mb-8 font-sans"
            style={{ color: "oklch(0.72 0.04 240)" }}
          >
            Sem burocracia, sem consulta ao SPC/Serasa para aderir e sem pedir
            comprovante de renda. Você parcelou a entrada em{" "}
            <strong style={{ color: "var(--foreground)" }}>12x ou 18x</strong>{" "}
            e pronto.
          </p>
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg text-white blue-glow font-sans"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
            }}
          >
            Quero começar agora
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
