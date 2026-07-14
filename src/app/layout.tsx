import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GrowFlow AI | AI That Works While You Sleep',
    template: '%s | GrowFlow AI',
  },
  description:
    'GrowFlow AI helps Australian small and medium businesses automate marketing, documents, customer support, and workflows with AI. Setup in 2 weeks.',
  keywords: [
    'AI automation Australia',
    'small business automation',
    'marketing automation SME',
    'workflow automation',
    'Australian business technology',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://growflowai.com.au',
    siteName: 'GrowFlow AI',
    title: 'GrowFlow AI | AI That Works While You Sleep',
    description:
      'GrowFlow AI helps Australian small and medium businesses automate marketing, documents, customer support, and workflows with AI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GrowFlow AI — AI for Australian Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowFlow AI | AI That Works While You Sleep',
    description: 'AI automation for Australian SMEs. Setup in 2 weeks.',
  },
  metadataBase: new URL('https://growflowai.com.au'),
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GrowFlow AI',
  url: 'https://growflowai.com.au',
  logo: 'https://growflowai.com.au/logo-primary.png',
  description: 'AI automation consulting for Australian small and medium businesses.',
  areaServed: 'AU',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kew',
    addressRegion: 'VIC',
    postalCode: '3101',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@growflowai.com.au',
    contactType: 'customer service',
  },
  sameAs: ['https://growflowai.com.au'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased font-[family-name:var(--font-jakarta)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
