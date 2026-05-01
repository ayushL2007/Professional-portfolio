import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm font-mono"
          style={{ color: "var(--muted-foreground)" }}
        >
          Built by{" "}
          <span style={{ color: "var(--foreground)" }}>Ayush Lahiri</span>
        </p>

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
