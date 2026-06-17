import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '人生RPG ステータス診断',
  description: 'あなたの人生をRPGのステータスで診断！二つ名と装備まで判明する無料診断',
  openGraph: {
    title: '人生RPG ステータス診断',
    description: 'あなたの人生をRPGのステータスで診断！',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ background: '#0a0a1a' }}>
        {children}
      </body>
    </html>
  )
}
