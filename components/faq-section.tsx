"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Quem pode participar do Liberacred?",
    a: "Qualquer pessoa maior de 18 anos com CPF ativo pode aderir ao Liberacred. Não há consulta ao SPC/Serasa para participar do programa. Mesmo quem está negativado ou sem comprovante de renda pode se inscrever.",
  },
  {
    q: "Preciso pagar toda a entrada de uma vez?",
    a: "Não! A grande vantagem do Liberacred é justamente essa: o valor da entrada (30% a 50% do valor da moto) é parcelado em 12x ou 18x mensais. Você paga essa entrada de forma programada antes de receber a moto.",
  },
  {
    q: "Qual é o valor mínimo de entrada?",
    a: "O mínimo é de 30% do valor da motocicleta. Quanto maior a entrada, menores serão as parcelas do financiamento na etapa final.",
  },
  {
    q: "Consigo pegar a moto antes de terminar de pagar a entrada?",
    a: "Sim! Com o plano de 40%+, a partir do 6º mês você pode antecipar o pagamento das parcelas restantes da entrada e efetivar o financiamento imediatamente, saindo com sua Yamaha muito antes do prazo.",
  },
  {
    q: "O que acontece se eu atrasar uma parcela?",
    a: "A pontualidade é fundamental no Liberacred — é ela que garante a aprovação do financiamento. Em caso de atraso, a equipe Hadena Motomar entra em contato para ajudar. Em situações extremas, a reserva pode ser cancelada, por isso recomendamos planejamento antes de aderir.",
  },
  {
    q: "Quais motos estão disponíveis no programa?",
    a: "A linha completa Yamaha disponível na Hadena Motomar está incluída no Liberacred: MT-03, MT-07, R3, Ténéré 700, Aerox e outros modelos. Entre em contato para confirmar o estoque atual.",
  },
  {
    q: "Posso fazer tudo pelo WhatsApp?",
    a: "Sim! Todo o processo pode ser iniciado de forma 100% digital pelo WhatsApp com nossa equipe. Você não precisa sair de casa para simular, aderir ou tirar suas dúvidas.",
  },
]

export function FaqSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--yamaha-surface)" }}
      aria-labelledby="faq-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.55 0.22 240 / 0.4), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest font-semibold mb-3 font-sans"
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            Tire suas dúvidas
          </motion.p>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight text-balance font-sans"
            style={{ color: "var(--foreground)" }}
          >
            Perguntas{" "}
            <span style={{ color: "var(--yamaha-blue-bright)" }}>
              frequentes
            </span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left yamaha-card rounded-xl px-6 py-4 flex items-center justify-between gap-4 group"
                aria-expanded={open === i}
              >
                <span
                  className="text-sm md:text-base font-semibold leading-relaxed font-sans pr-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown
                    className="w-5 h-5"
                    style={{ color: "var(--yamaha-blue-bright)" }}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 py-4 rounded-b-xl -mt-1"
                      style={{
                        backgroundColor: "oklch(0.55 0.22 240 / 0.05)",
                        borderLeft: "2px solid oklch(0.55 0.22 240 / 0.4)",
                      }}
                    >
                      <p
                        className="text-sm leading-relaxed font-sans"
                        style={{ color: "oklch(0.72 0.04 240)" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
