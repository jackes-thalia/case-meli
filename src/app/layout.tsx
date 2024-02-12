import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import MaterialThemeProvider from '@/presentation/providers/MaterialThemeProvider'
import { StepProvider } from '@/presentation/providers/StepProvider'

export const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '300', '500'],
})

export const metadata: Metadata = {
  title: 'Case Meli',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={montserratFont.className}
      >
        <MaterialThemeProvider font={montserratFont}>
          <StepProvider>{children}</StepProvider>
        </MaterialThemeProvider>
      </body>
    </html>
  )
}
