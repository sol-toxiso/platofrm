import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { WalletContextProvider } from '@/contexts/wallet-provider'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${siteConfig.siteName} | ${siteConfig.tagline}`,
  description: siteConfig.metaDescription,
  keywords: `Solana, DeFi, token creation, SPL tokens, trading, markets, distribution, blockchain, cryptocurrency, ${siteConfig.siteName}`,
  authors: [{ name: `${siteConfig.siteName} Team` }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: `${siteConfig.siteName} | Complete Solana DeFi Platform`,
    description: siteConfig.metaDescription,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} | Complete Solana DeFi Platform`,
    description: siteConfig.metaDescription,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  )
}
