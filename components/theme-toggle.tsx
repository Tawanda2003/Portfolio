"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface ThemeToggleProps {
  scrolled?: boolean
}

export function ThemeToggle({ scrolled = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg border-2 border-transparent bg-transparent" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`relative p-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
        scrolled
          ? "bg-white dark:bg-black text-black dark:text-white border-white dark:border-black hover:bg-transparent hover:text-white dark:hover:text-black"
          : "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-transparent hover:text-black dark:hover:text-white"
      }`}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
