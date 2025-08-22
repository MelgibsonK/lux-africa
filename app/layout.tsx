import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lux Africa - Luxury Tours, Safaris & Car Hire",
  description:
    "Experience the ultimate luxury travel in Africa with our premium tours, wildlife safaris, and car hire services.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${inter.variable} antialiased`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
