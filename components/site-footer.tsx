import { Instagram, MessageCircle } from "lucide-react"

const INSTAGRAM_URL = "https://www.instagram.com/hadenamotomar"
const WHATSAPP_NUMBER = "5522999990881"
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, Hadena Motomar! Tenho interesse no programa Liberacred. Podem me ajudar?"
)

export function SiteFooter() {
  return (
    <footer
      className="relative py-10 px-6 md:px-12"
      style={{
        backgroundColor: "oklch(0.06 0.01 240)",
        borderTop: "1px solid oklch(0.55 0.22 240 / 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p
            className="text-base font-black uppercase tracking-tight font-sans"
            style={{ color: "var(--foreground)" }}
          >
            Hadena Motomar
          </p>
          <p
            className="text-xs uppercase tracking-widest font-sans mt-0.5"
            style={{ color: "var(--yamaha-blue-bright)" }}
          >
            Concessionária Autorizada Yamaha
          </p>
          {/* Social links */}
          <div className="flex items-center gap-4 mt-3 justify-center md:justify-start">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Hadena Motomar"
              className="flex items-center gap-1.5 text-xs font-semibold font-sans transition-colors"
              style={{ color: "oklch(0.65 0.04 240)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--yamaha-blue-bright)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.65 0.04 240)")
              }
            >
              <Instagram className="w-4 h-4" />
              @hadenamotomar
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Hadena Motomar"
              className="flex items-center gap-1.5 text-xs font-semibold font-sans transition-colors"
              style={{ color: "oklch(0.65 0.04 240)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--yamaha-blue-bright)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.65 0.04 240)")
              }
            >
              <MessageCircle className="w-4 h-4" />
              (22) 99999-0881
            </a>
          </div>
        </div>

        <p
          className="text-xs text-center font-sans"
          style={{ color: "oklch(0.45 0.02 240)" }}
        >
          © {new Date().getFullYear()} Hadena Motomar. Todos os direitos
          reservados. Yamaha® é marca registrada da Yamaha Motor Co., Ltd.
        </p>

        <p
          className="text-xs text-center md:text-right font-sans"
          style={{ color: "oklch(0.45 0.02 240)" }}
        >
          Campos dos Goytacazes · Santo Antônio de Pádua ·{" "}
          São Francisco de Itabapoana
        </p>
      </div>
    </footer>
  )
}
