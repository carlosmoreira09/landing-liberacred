import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
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
  icons: {
    icon: '/icon.svg',
  },
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPFKJFX3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <Script id="gtm-hadena-motomar-yamaha" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPFKJFX3');`}
        </Script>
      </body>
    </html>
  )
}
