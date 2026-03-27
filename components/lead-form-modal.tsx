"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, CheckCircle2, Loader2 } from "lucide-react"

const WHATSAPP_NUMBER = "5522999990881"

interface LeadFormProps {
  isOpen: boolean
  onClose: () => void
}

type FormState = "idle" | "submitting" | "success"

export function LeadFormModal({ isOpen, onClose }: LeadFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    model: "",
    situation: "",
  })
  const [formState, setFormState] = useState<FormState>("idle")
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))

    const message = encodeURIComponent(
      `Olá, Hadena Motomar! Quero saber mais sobre o Liberacred.\n\n` +
        `Nome: ${form.name}\n` +
        `Telefone: ${form.phone}\n` +
        `Cidade: ${form.city}\n` +
        `Modelo de interesse: ${form.model || "Não informado"}\n` +
        `Situação: ${form.situation || "Não informado"}`
    )

    setFormState("success")

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
        "_blank"
      )
      onClose()
      setFormState("idle")
      setForm({ name: "", phone: "", city: "", model: "", situation: "" })
    }, 1800)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "oklch(0 0 0 / 0.85)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Formulário de interesse Liberacred"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--yamaha-surface)",
              border: "1px solid oklch(0.55 0.22 240 / 0.25)",
            }}
          >
            {/* Header */}
            <div
              className="relative px-6 py-5 border-b"
              style={{
                borderColor: "oklch(0.55 0.22 240 / 0.2)",
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 240 / 0.12) 0%, transparent 60%)",
              }}
            >
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-1 font-sans"
                  style={{ color: "var(--yamaha-blue-bright)" }}
                >
                  Liberacred — Hadena Motomar
                </p>
                <h2
                  className="text-xl md:text-2xl font-black uppercase font-sans"
                  style={{ color: "var(--foreground)" }}
                >
                  Quero minha Yamaha 0km
                </h2>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
                style={{ color: "oklch(0.65 0.04 240)" }}
                aria-label="Fechar formulário"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 gap-4 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "oklch(0.55 0.22 240 / 0.15)" }}
                    >
                      <CheckCircle2
                        className="w-8 h-8"
                        style={{ color: "var(--yamaha-blue-bright)" }}
                      />
                    </div>
                    <h3
                      className="text-xl font-black uppercase font-sans"
                      style={{ color: "var(--foreground)" }}
                    >
                      Recebido!
                    </h3>
                    <p
                      className="text-sm leading-relaxed font-sans"
                      style={{ color: "oklch(0.65 0.04 240)" }}
                    >
                      Redirecionando para o WhatsApp da Hadena Motomar...
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-name"
                          className="text-xs font-semibold uppercase tracking-wide font-sans"
                          style={{ color: "oklch(0.72 0.04 240)" }}
                        >
                          Nome completo *
                        </label>
                        <input
                          id="lead-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Seu nome"
                          value={form.name}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-lg text-sm font-sans outline-none transition-all focus:ring-2"
                          style={{
                            backgroundColor: "oklch(0.1 0.01 240)",
                            border: "1px solid oklch(0.25 0.02 240)",
                            color: "var(--foreground)",
                            "--tw-ring-color": "oklch(0.55 0.22 240 / 0.5)",
                          } as React.CSSProperties}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-phone"
                          className="text-xs font-semibold uppercase tracking-wide font-sans"
                          style={{ color: "oklch(0.72 0.04 240)" }}
                        >
                          WhatsApp / Telefone *
                        </label>
                        <input
                          id="lead-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(22) 99999-0000"
                          value={form.phone}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-lg text-sm font-sans outline-none transition-all focus:ring-2"
                          style={{
                            backgroundColor: "oklch(0.1 0.01 240)",
                            border: "1px solid oklch(0.25 0.02 240)",
                            color: "var(--foreground)",
                            "--tw-ring-color": "oklch(0.55 0.22 240 / 0.5)",
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lead-city"
                        className="text-xs font-semibold uppercase tracking-wide font-sans"
                        style={{ color: "oklch(0.72 0.04 240)" }}
                      >
                        Cidade *
                      </label>
                      <input
                        id="lead-city"
                        name="city"
                        type="text"
                        required
                        placeholder="Sua cidade"
                        value={form.city}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-lg text-sm font-sans outline-none transition-all focus:ring-2"
                        style={{
                          backgroundColor: "oklch(0.1 0.01 240)",
                          border: "1px solid oklch(0.25 0.02 240)",
                          color: "var(--foreground)",
                          "--tw-ring-color": "oklch(0.55 0.22 240 / 0.5)",
                        } as React.CSSProperties}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-model"
                          className="text-xs font-semibold uppercase tracking-wide font-sans"
                          style={{ color: "oklch(0.72 0.04 240)" }}
                        >
                          Modelo de interesse
                        </label>
                        <select
                          id="lead-model"
                          name="model"
                          value={form.model}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-lg text-sm font-sans outline-none transition-all focus:ring-2"
                          style={{
                            backgroundColor: "oklch(0.1 0.01 240)",
                            border: "1px solid oklch(0.25 0.02 240)",
                            color: form.model
                              ? "var(--foreground)"
                              : "oklch(0.5 0.02 240)",
                            "--tw-ring-color": "oklch(0.55 0.22 240 / 0.5)",
                          } as React.CSSProperties}
                        >
                          <option value="" disabled>
                            Selecione
                          </option>
                          <option value="MT-03">MT-03</option>
                          <option value="MT-07">MT-07</option>
                          <option value="R3">R3</option>
                          <option value="Ténéré 700">Ténéré 700</option>
                          <option value="Aerox">Aerox</option>
                          <option value="Outro / Não sei ainda">
                            Outro / Não sei ainda
                          </option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-situation"
                          className="text-xs font-semibold uppercase tracking-wide font-sans"
                          style={{ color: "oklch(0.72 0.04 240)" }}
                        >
                          Sua situação
                        </label>
                        <select
                          id="lead-situation"
                          name="situation"
                          value={form.situation}
                          onChange={handleChange}
                          className="px-4 py-3 rounded-lg text-sm font-sans outline-none transition-all focus:ring-2"
                          style={{
                            backgroundColor: "oklch(0.1 0.01 240)",
                            border: "1px solid oklch(0.25 0.02 240)",
                            color: form.situation
                              ? "var(--foreground)"
                              : "oklch(0.5 0.02 240)",
                            "--tw-ring-color": "oklch(0.55 0.22 240 / 0.5)",
                          } as React.CSSProperties}
                        >
                          <option value="" disabled>
                            Selecione
                          </option>
                          <option value="Nome negativado (SPC/Serasa)">
                            Nome negativado
                          </option>
                          <option value="Autônomo sem comprovante de renda">
                            Autônomo / sem comprovante
                          </option>
                          <option value="CPF regular com renda">
                            CPF regular com renda
                          </option>
                          <option value="Quero entender melhor">
                            Quero entender melhor
                          </option>
                        </select>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formState === "submitting"}
                      whileHover={{ scale: formState === "submitting" ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-lg text-sm font-black uppercase tracking-wider text-white blue-glow font-sans mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
                      }}
                    >
                      {formState === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Quero minha Yamaha pelo Liberacred
                          <span>→</span>
                        </>
                      )}
                    </motion.button>

                    <p
                      className="text-xs text-center font-sans leading-relaxed"
                      style={{ color: "oklch(0.5 0.02 240)" }}
                    >
                      Ao enviar, você será direcionado ao WhatsApp da Hadena
                      Motomar. Sem spam, sem compartilhamento de dados.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
