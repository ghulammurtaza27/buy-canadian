import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/LanguageContext"
import type React from "react"
import { Analytics } from '@vercel/analytics/react'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: "Buy Canadian - Product Origin Checker",
  description: "Check the origin of products and support Canadian businesses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} ${plusJakarta.variable}`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-16">
            {children}
            <Analytics />
          </main>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}

