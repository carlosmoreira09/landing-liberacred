import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Hadena Motomar — Revendedora Autorizada Yamaha | Liberacred',
  description:
    'Realize o sonho da sua Yamaha 0km mesmo negativado ou sem comprovação de renda. Hadena Motomar — concessionária autorizada Yamaha em Campos dos Goytacazes, Santo Antônio de Pádua e São Francisco de Itabapoana.',
  keywords: 'Yamaha, moto financiamento, Liberacred, Hadena Motomar, moto negativado, financiamento sem comprovação renda',
  openGraph: {
    title: 'Hadena Motomar — Sua Yamaha 0km está mais perto do que você imagina',
    description: 'Financiamento aprovado mesmo para negativados e autônomos. Programa Liberacred do Banco Yamaha.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
