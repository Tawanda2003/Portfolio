

"use client"

import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Supabase", level: 75, category: "Backend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "UI/UX Design", level: 75, category: "Design" },
    { name: "Digital Marketing", level: 65, category: "Marketing" },
  ]

  const categories = ["All", "Frontend", "Backend", "Design", "Marketing"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My{" "}
            <span className="underline decoration-4 underline-offset-8 decoration-black dark:decoration-white">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-black dark:hover:border-white transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">{skill.name}</h3>
              </div>

              <span className="text-xs text-black dark:text-white mt-2 inline-block px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

