import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imersão | Pedro Lucca',
  description: 'Página da imersão presencial - Evento Pedro Lucca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
