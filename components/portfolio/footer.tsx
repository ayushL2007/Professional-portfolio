import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="py-10 px-6 mt-8 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-mono" style={{ color: "var(--foreground)" }}>
            ayush.dev
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
            &copy; {new Date().getFullYear()} Ayush Lahiri. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ayushL2007"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "var(--muted-foreground)" }}
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-lahiri"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "var(--muted-foreground)" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="mailto:ayushlahiri2007@gmail.com"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: "var(--muted-foreground)" }}
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
