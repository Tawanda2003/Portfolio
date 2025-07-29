"use client"

import { useState, useEffect } from "react"
import { Github, Twitter, Linkedin, Instagram, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)

  const titles = ["Front-End Developer", "React Specialist", "Next.js Expert", "UI/UX Enthusiast", "Web Developer"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1))
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            // Finished deleting, move to next title
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/Tawanda2003", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/TawandaG80497", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/tawanda-gweshe-08930435b", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/gweshe.tawanda", label: "Instagram" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Network Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-black dark:bg-white rounded-full animate-network-pulse opacity-60"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {/* Connection Lines */}
            {i < 8 && (
              <div
                className="absolute w-px h-20 bg-gradient-to-b from-black/30 to-transparent dark:from-white/30 dark:to-transparent animate-line-draw origin-top"
                style={{
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            )}
            {i % 3 === 0 && i < 9 && (
              <div
                className="absolute w-24 h-px bg-gradient-to-r from-black/30 to-transparent dark:from-white/30 dark:to-transparent animate-line-draw origin-left"
                style={{
                  top: "50%",
                  left: "100%",
                  transform: "translateY(-50%)",
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            )}
          </div>
        ))}

        {/* Floating Binary Code */}
        {mounted &&
          [...Array(8)].map((_, i) => (
            <div
              key={`binary-${i}`}
              className="absolute text-xs font-mono text-gray-400 dark:text-gray-600 animate-binary-float opacity-40"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            >
              {Array.from({ length: 8 }, () => Math.round(Math.random())).join("")}
            </div>
          ))}

        {/* Ripple Effect */}
        {mounted && (
          <>
            <div
              className="absolute w-96 h-96 border border-black/10 dark:border-white/10 rounded-full animate-ripple"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
              }}
            />
            <div
              className="absolute w-64 h-64 border border-black/20 dark:border-white/20 rounded-full animate-ripple animation-delay-500"
              style={{
                left: mousePosition.x - 128,
                top: mousePosition.y - 128,
              }}
            />
          </>
        )}

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent animate-scan-horizontal" />
          <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-black/20 dark:via-white/20 to-transparent animate-scan-vertical" />
        </div>

        {/* Particle System */}
        {mounted &&
          [...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-black dark:bg-white rounded-full animate-particle-drift opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}

        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="animate-hex-rotate">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon
                  points="50,1 85,25 85,62 50,86 15,62 15,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-black dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* DNA Helix Animation */}
        <div className="absolute right-10 top-1/4 w-2 h-96 animate-dna-helix opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={`dna-${i}`}
              className="absolute w-8 h-1 bg-black dark:bg-white rounded-full"
              style={{
                top: `${i * 8}%`,
                left: "50%",
                transform: `translateX(-50%) rotateZ(${i * 30}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 border-4 border-gray-300 dark:border-gray-600 animate-profile-float">
                <img
                  src="/tg.jpg?height=320&width=320&text=Tawanda+Gweshe"
                  alt="Tawanda Gweshe"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Enhanced Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black dark:bg-white rounded-full animate-orbit" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-600 dark:bg-gray-400 rounded-full animate-orbit-reverse animation-delay-500" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 border-2 border-black dark:border-white rotate-45 animate-spin-slow" />
              <div className="absolute bottom-1/4 -right-8 w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full animate-bounce" />

              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-black/20 dark:border-white/20 animate-pulse-ring" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
              <span className="inline-block animate-slide-in-left">Tawanda</span>{" "}
              <span className="inline-block animate-slide-in-right">Gweshe</span>
            </h1>

            {/* Animated Title with Typewriter Effect */}
            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2 animate-fade-in-up animation-delay-400 min-h-[2.5rem] flex items-center justify-center lg:justify-start">
              <span className="font-mono">
                {displayText}
                <span
                  className={`inline-block w-0.5 h-6 bg-black dark:bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
                />
              </span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up animation-delay-600 max-w-2xl">
              Creating responsive, user-friendly web experiences with modern technologies
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-800">
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 animate-bounce-in"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <Icon className="w-6 h-6 text-black dark:text-white transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Learn More About Me
            <ChevronDown className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
