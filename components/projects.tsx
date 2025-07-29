"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Business Cards",
      description:
        "Professional and stylish business cards to help you make a lasting first impression.",
      image: "/card.jpg?height=300&width=400",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/Tawanda2003/Card",
      liveUrl: "https://card-delta-ruddy.vercel.app/",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Stop Watch",
      description:
        "A simple and accurate stopwatch to time your activities with ease.",
      image: "/watch.jpg?height=300&width=400",
      technologies: ["HTML5", "JavaScript", "CSS3"],
      githubUrl: "https://github.com/Tawanda2003/Stop-Watch",
      liveUrl: "https://stop-watch-two-ruby.vercel.app/",
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Calculator",
      description:
        "A simple and fast calculator for everyday math—perfect for quick and easy calculations",
      image: "/calculator.jpg?height=300&width=400",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Tawanda2003/Calculator",
      liveUrl: "https://calculator-henna.vercel.app/",
      category: "Full Stack",
    },
    {
      id: 4,
      title: "Wedding Planner",
      description:
        "A simple app to plan your dream wedding—manage guests, budget, and tasks all in one place.",
      image: "/beach.jpg?height=300&width=400",
      technologies: ["Next.js", "Typscript","Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com/Tawanda2003/wedding-app",
      liveUrl: "https://wedding-app-delta-topaz.vercel.app/",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing creative design and smooth animations with optimized performance.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Frontend",
    },
  ]

  const categories = ["All", "Frontend", "Full Stack"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 px-4 bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My{" "}
            <span className="underline decoration-4 underline-offset-8 decoration-black dark:decoration-white">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in modern web development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 border-2 ${
                  activeCategory === category
                    ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white font-semibold"
                    : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-black dark:hover:border-white transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Overlay with links */}
                <div
                  className={`absolute inset-0 bg-black/90 dark:bg-white/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    href={project.githubUrl}
                    className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-white dark:text-black" />
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-white dark:text-black" />
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:underline transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-black dark:text-white bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-black dark:text-white bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Want to see more of my work or discuss a project?</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 border-2 border-black dark:border-white"
          >
            <Eye className="mr-2 w-5 h-5" />
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  )
}
