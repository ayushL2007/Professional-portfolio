import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Freelance } from "@/components/portfolio/freelance"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Freelance />
      <Experience />
      <Education />
      <Footer />
    </main>
  )
}
