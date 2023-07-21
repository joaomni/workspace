import './globals.css'
import type { Metadata } from 'next'
import { Rambla } from 'next/font/google'

const rambla = Rambla({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={rambla.className}>
        {children}
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      </body>
    </html>
  )
}
