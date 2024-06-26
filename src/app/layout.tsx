import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'
import { createClient, repositoryName } from '@/prismicio'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PrismicPreview } from '@prismicio/next'

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

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()
  const settings = await client.getSingle('settings')

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: [settings.data.share_image.url || ''],
    },
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_Sans.variable)}>
      <body>
        <Header/>
        {children}
        <Footer/>
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-60" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
