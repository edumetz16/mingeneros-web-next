import type { Metadata } from 'next'
import { Encode_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar"
import localFont from 'next/font/local'
const encodeSans = Encode_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Editorial mingeneros',
  description: 'Editorial mingeneros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={encodeSans.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
