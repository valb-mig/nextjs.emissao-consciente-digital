import { Inter } from 'next/font/google'
import '@/app/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emissão Consciente Digital',
  description: 'Webpage para calcular o custo de Co² Recife e Brasil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
