import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tawanda Gweshe - Front-End Developer",
  description:
    "Portfolio of Tawanda Gweshe, a passionate Front-End Developer specializing in React, Next.js, and modern web technologies.",
  keywords: "Tawanda Gweshe, Front-End Developer, React, Next.js, JavaScript, Web Development, Portfolio",
  authors: [{ name: "Tawanda Gweshe" }],
  openGraph: {
    title: "Tawanda Gweshe - Front-End Developer",
    description:
      "Portfolio of Tawanda Gweshe, a passionate Front-End Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
