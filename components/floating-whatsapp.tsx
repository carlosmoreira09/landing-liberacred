"use client"

import { motion, AnimatePresence } from "motion/react"
import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const WHATSAPP_NUMBER = "5522999990881"
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, vim da LP, quero mais informações sobre o liberacred, por favor."
)

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Show pulsing label after 3s
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
        >
          <AnimatePresence>
            {showLabel && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg px-4 py-2 text-sm font-bold font-sans text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
                }}
              >
                Fale conosco agora!
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Hadena Motomar no WhatsApp"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
            }}
          >
            {/* Ping ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-40"
              style={{ backgroundColor: "var(--yamaha-blue)" }}
            />
            <MessageCircle className="w-7 h-7 text-white relative z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
