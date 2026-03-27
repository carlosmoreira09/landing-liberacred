"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Instagram } from "lucide-react"

const INSTAGRAM_URL = "https://www.instagram.com/hadenamotomar"

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Liberacred", href: "#liberacred" },
  { label: "Modelos", href: "#modelos" },
  { label: "Unidades", href: "#unidades" },
  { label: "FAQ", href: "#faq" },
]

interface NavbarProps {
  onCtaClick: () => void
}

export function Navbar({ onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-30 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "oklch(0.1 0.01 240 / 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(0.55 0.22 240 / 0.12)"
            : "1px solid transparent",
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex flex-col leading-tight"
          >
            <span
              className="text-lg font-black uppercase tracking-tight font-sans"
              style={{ color: "var(--foreground)" }}
            >
              Hadena
            </span>
            <span
              className="text-xs uppercase tracking-widest font-semibold font-sans -mt-0.5"
              style={{ color: "var(--yamaha-blue-bright)" }}
            >
              Motomar · Yamaha
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs uppercase tracking-widest font-semibold transition-colors duration-200 font-sans"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--yamaha-blue-bright)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "oklch(0.65 0.04 240)")
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Hadena Motomar"
              className="p-2 rounded-lg transition-colors"
              style={{ color: "oklch(0.65 0.04 240)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--yamaha-blue-bright)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "oklch(0.65 0.04 240)")
              }
            >
              <Instagram className="w-5 h-5" />
            </a>
            <motion.button
              onClick={onCtaClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-lg text-white font-sans"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
              }}
            >
              Quero minha Yamaha
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-20 lg:hidden py-4 px-6 flex flex-col gap-2"
            style={{
              backgroundColor: "oklch(0.1 0.01 240 / 0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid oklch(0.55 0.22 240 / 0.15)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 text-sm font-semibold uppercase tracking-wide border-b font-sans"
                style={{
                  color: "oklch(0.75 0.04 240)",
                  borderColor: "oklch(0.2 0.015 240)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false)
                onCtaClick()
              }}
              className="mt-2 py-3 rounded-lg text-sm font-black uppercase tracking-wider text-white font-sans"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 240) 0%, oklch(0.45 0.22 250) 100%)",
              }}
            >
              Quero minha Yamaha pelo Liberacred
            </button>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-sm font-semibold font-sans"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              <Instagram className="w-4 h-4" />
              @hadenamotomar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
