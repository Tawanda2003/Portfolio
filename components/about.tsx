export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            About{" "}
            <span className="underline decoration-4 underline-offset-8 decoration-black dark:decoration-white">Me</span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full" />
        </div>

        <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="flex items-start mb-6">
            <span className="text-4xl mr-4">💻</span>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">About Me</h3>
          </div>

          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-lg">
            <p>
              I'm <span className="text-black dark:text-white font-semibold">Tawanda Gweshe</span>, a passionate
              Front-End Developer who began my coding journey from scratch — starting with visual platforms like Scratch
              to build simple games and animations. That experience fueled my curiosity and led me into web development.
            </p>

            <p>
              I specialize in creating{" "}
              <span className="text-black dark:text-white font-medium">
                responsive, user-friendly websites and web applications
              </span>{" "}
              using HTML, CSS, JavaScript, React, Node.js, and Next.js. I also work with Supabase for backend services
              like databases and authentication.
            </p>

            <p>
              In addition, I have some knowledge of{" "}
              <span className="text-black dark:text-white font-medium">Python</span>, a powerful backend programming
              language widely used for server-side development, scripting, and data processing.
            </p>

            <p>
              I also understand the basics of{" "}
              <span className="text-black dark:text-white font-medium">UI/UX design and digital marketing</span>, which
              helps me build digital experiences that are both functional and user-focused. I'm always learning and
              excited to grow as a developer by exploring new technologies and building real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
