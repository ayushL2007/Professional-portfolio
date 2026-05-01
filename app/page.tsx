import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Freelance } from "@/components/portfolio/freelance"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>

      <Projects />

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>

      <Freelance />

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>

      <Experience />

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>

      <Education />

      <Footer />
    </main>
  )
}
