"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 dark:bg-white/95 backdrop-blur-md border-b-2 border-white dark:border-black"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-all duration-300 border-2 px-3 py-1 rounded-lg hover:scale-105 ${
              scrolled
                ? "text-white dark:text-black border-white dark:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                : "text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            }`}
          >
            TG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 border-2 rounded-lg ${
                    isActive(item.href)
                      ? scrolled
                        ? "bg-white dark:bg-black text-black dark:text-white border-white dark:border-black font-bold"
                        : "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white font-bold"
                      : scrolled
                        ? "text-white dark:text-black border-transparent hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                        : "text-black dark:text-white border-transparent hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CV View Button */}
            <a
              href="/TAWANDA-GWESHE-CV.pdf" // Must be inside /public
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 font-medium rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? "bg-white dark:bg-black text-black dark:text-white border-white dark:border-black hover:bg-transparent hover:text-white dark:hover:text-black"
                  : "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>View CV</span>
            </a>

            <ThemeToggle scrolled={scrolled} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle scrolled={scrolled} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                scrolled
                  ? "text-white dark:text-black border-white dark:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                  : "text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-black dark:bg-white backdrop-blur-md rounded-lg mt-2 border-2 border-white dark:border-black">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-md border-2 ${
                    isActive(item.href)
                      ? "text-black dark:text-white bg-white dark:bg-black border-white dark:border-black font-bold"
                      : "text-white dark:text-black border-transparent hover:border-white dark:hover:border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="/TAWANDA-GWESHE-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center space-x-2 px-3 py-2 bg-white dark:bg-black text-black dark:text-white font-medium rounded-md border-2 border-white dark:border-black hover:bg-transparent hover:text-white dark:hover:text-black transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>View CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
