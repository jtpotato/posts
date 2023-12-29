import './globals.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "328e28981c8044cca1b839a09b0e30d1"}'></script>
      </body>
    </html>
  )
}