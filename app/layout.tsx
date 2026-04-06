import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Arsalan Solutions | Federal Contracting Excellence',
  description: 'Arsalan Solutions delivers efficient, compliant, and results-driven solutions for federal contracting. Supporting U.S. government agencies with sourcing, bidding, and execution through SAM.gov.',
  generator: 'v0.app',
  keywords: ['federal contracting', 'government contracts', 'SAM.gov', 'procurement', 'NAICS', 'federal acquisition'],
  authors: [{ name: 'Arsalan Solutions' }],
icons: {
  icon: '/favicon.png',
  apple: '/favicon.png',
},
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
