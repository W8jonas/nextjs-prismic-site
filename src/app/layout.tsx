import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunito_Sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Next Site with Prismic CMS',
  description: 'Next Site with Prismic CMS, Typescript and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(nunito.className, nunito_Sans.className)}>{children}</body>
    </html>
  )
}
