"use client"

import { useState } from "react"
import { Camera, Upload } from "lucide-react"

export default function ProfileSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Meet{" "}
            <span className="underline decoration-4 underline-offset-8 decoration-black dark:decoration-white">
              Tawanda
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Picture Section */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-700">
                {!imageError ? (
                  <img
                    src="/tg.jpg?height=320&width=320&text=Your+Profile+Picture"
                    alt="Tawanda Gweshe"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                    <Camera className="w-16 h-16 text-black dark:text-white mb-4" />
                    <h3 className="text-black dark:text-white font-semibold mb-2">Add Your Photo</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Replace this placeholder with your professional photo
                    </p>
                    <div className="bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-3 text-xs text-black dark:text-white">
                      <Upload className="w-4 h-4 inline mr-1" />
                      Upload to /public/images/profile.jpg
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-black dark:bg-white rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse animation-delay-500" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 border-2 border-black dark:border-white rotate-45 animate-spin-slow" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">Tawanda Gweshe</h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Front-End Developer</p>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse" />
                  <span>Passionate about creating amazing web experiences</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse animation-delay-200" />
                  <span>Specialized in React, Next.js, and modern web technologies</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse animation-delay-400" />
                  <span>Always learning and exploring new technologies</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                {["React", "Next.js", "JavaScript", "TypeScript", "Node.js"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full text-black dark:text-white text-sm animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
