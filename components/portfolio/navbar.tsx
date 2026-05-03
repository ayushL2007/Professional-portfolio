"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("about")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,15,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNav("#about") }}
            className="font-mono text-sm font-semibold tracking-wider transition-colors duration-200"
            style={{ color: "var(--accent)" }}
          >
            ayush.dev
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm font-medium transition-colors duration-200 relative"
                  style={{
                    color: active === link.href.replace("#", "")
                      ? "var(--foreground)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {link.label}
                  {active === link.href.replace("#", "") && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons + resume */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/ayushL2007"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-lahiri"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ayushlahiri2007@gmail.com"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://ayush-uyj6.onrender.com/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 hover:border-indigo-500 hover:text-indigo-400"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
              }}
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--muted-foreground)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-6 md:hidden"
          style={{ background: "var(--background)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-2xl font-medium transition-colors duration-200"
              style={{
                color: active === link.href.replace("#", "")
                  ? "var(--accent)"
                  : "var(--foreground)",
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-6 mt-4">
            <a href="https://github.com/ayushL2007" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--muted-foreground)" }}>
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-lahiri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "var(--muted-foreground)" }}>
              <Linkedin size={22} />
            </a>
            <a href="mailto:ayushlahiri2007@gmail.com" aria-label="Email" style={{ color: "var(--muted-foreground)" }}>
              <Mail size={22} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
