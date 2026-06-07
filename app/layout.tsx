import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Namrata Amar Shinde | Web Developer & AI/ML Student',
  description:
    'Portfolio of Namrata Amar Shinde — Web Development Intern and AI & ML student passionate about building responsive, user-friendly web applications and exploring intelligent technologies.',
  keywords: [
    'Namrata Amar Shinde',
    'Web Developer',
    'Web Development Intern',
    'AI ML Student',
    'Frontend Developer',
    'Portfolio',
    'Pune',
  ],
  authors: [{ name: 'Namrata Amar Shinde' }],
  openGraph: {
    title: 'Namrata Amar Shinde | Web Developer & AI/ML Student',
    description:
      'Web Development Intern and AI & ML student building responsive, user-friendly web applications.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#0b1020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
