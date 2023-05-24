import './globals.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit({ subsets: ['latin'], weight: "200" })

export const metadata = {
  title: 'Book Contact',
  description: 'Book Contact',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
