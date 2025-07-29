import About from "@/components/about"
import ProfileSection from "@/components/profile-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black pt-16">
      <ProfileSection />
      <About />
    </main>
  )
}
