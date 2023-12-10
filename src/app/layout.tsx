import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Things that I write sometimes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
