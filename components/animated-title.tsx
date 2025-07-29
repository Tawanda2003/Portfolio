"use client"

import { useState, useEffect } from "react"

interface AnimatedTitleProps {
  text: string
  className?: string
  animationType?: "wave" | "bounce" | "fade" | "slide"
}

export default function AnimatedTitle({ text, className = "", animationType = "wave" }: AnimatedTitleProps) {
  const [animatedLetters, setAnimatedLetters] = useState<boolean[]>([])

  useEffect(() => {
    const letters = new Array(text.length).fill(false)
    setAnimatedLetters(letters)

    // Trigger animation for each letter with delay
    text.split("").forEach((_, index) => {
      setTimeout(() => {
        setAnimatedLetters((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, index * 100)
    })
  }, [text])

  const getAnimationClass = (index: number, isAnimated: boolean) => {
    if (!isAnimated) return "opacity-0 transform translate-y-4"

    switch (animationType) {
      case "wave":
        return `animate-wave opacity-100 transform translate-y-0`
      case "bounce":
        return `animate-bounce-letter opacity-100 transform translate-y-0`
      case "fade":
        return `animate-fade-in opacity-100 transform translate-y-0`
      case "slide":
        return `animate-slide-in opacity-100 transform translate-y-0`
      default:
        return "opacity-100 transform translate-y-0"
    }
  }

  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${getAnimationClass(index, animatedLetters[index])}`}
          style={{
            animationDelay: `${index * 0.1}s`,
            transitionDelay: `${index * 0.05}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
}
