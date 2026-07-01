"use client"

import { Mail, CheckCircle2 } from "lucide-react"

const freelanceWorks = [
  {
    title: "Custom Ruby on Rails Web Application",
    client: "Private Client",
    type: "Full-Stack Development",
    description:
      "Architected and delivered a full-stack Ruby on Rails web application — from database schema design to front-end integration. Implemented RESTful APIs, Devise authentication, and a responsive UI.",
    deliverables: [
      "Custom Rails API with authentication",
      "Responsive front-end UI",
      "Database design & optimization",
      "Deployment on Render",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "HTML/CSS", "JavaScript"],
    accent: "#6366f1",
    status: "Completed",
  },
  {
    title: "Native Android Application",
    client: "Startup Client",
    type: "Mobile Development",
    description:
      "Designed and built a production-ready native Android app from scratch in Java. Covered UI/UX in XML, REST API integration, offline-first SQLite persistence, and Play Store submission support.",
    deliverables: [
      "Native Android app in Java",
      "REST API integration",
      "Offline-first with SQLite",
      "Google Play deployment prep",
    ],
    tech: ["Java", "XML", "Android SDK", "SQLite"],
    accent: "#22c55e",
    status: "Completed",
  },
  {
    title: "Backend API & GitHub Integration Service",
    client: "Developer Client",
    type: "Backend Engineering",
    description:
      "Built a backend service integrating with the GitHub API via Octokit — aggregating repo data, language stats, and project highlights. Implemented smart file-based caching with a 24-hour refresh strategy.",
    deliverables: [
      "GitHub API integration via Octokit",
      "Smart file-based caching",
      "Language & repo analytics",
      "JSON data service layer",
    ],
    tech: ["Ruby on Rails", "Octokit", "JSON", "Caching"],
    accent: "#ef4444",
    status: "Completed",
  },
  {
    title: "Android Dev Mentorship Sessions",
    client: "GDG IIIT Kalyani",
    type: "Technical Education",
    description:
      "Delivered structured Android development sessions as App Dev Lead at Google Developer Group IIIT Kalyani. Covered the full Android lifecycle for a cohort of student developers — layouts to networking.",
    deliverables: [
      "Structured Android dev curriculum",
      "Hands-on coding workshops",
      "Project guidance & code reviews",
      "Resource materials",
    ],
    tech: ["Native Android", "Java", "XML", "Teaching"],
    accent: "#f89720",
    status: "Ongoing",
  },
]

export function Freelance() {
  return (
    <section id="freelance" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            Freelance Work
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
        <p className="text-sm mb-10" style={{ color: "var(--muted-foreground)" }}>
          Selected client work and independent engagements outside of academic projects.
        </p>

        <div className="flex flex-col gap-4">
          {freelanceWorks.map((work) => (
            <article
              key={work.title}
              className="rounded-xl border p-6 transition-colors duration-300"
              style={{
                background: "var(--surface-raised)",
                borderColor: "var(--border)",
                borderLeftColor: work.accent,
                borderLeftWidth: "3px",
              }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-xs font-mono" style={{ color: work.accent }}>
                      {work.type}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      · {work.client}
                    </span>
                  </div>
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium shrink-0"
                  style={{
                    background:
                      work.status === "Ongoing"
                        ? "rgba(99,102,241,0.1)"
                        : "rgba(34,197,94,0.1)",
                    color: work.status === "Ongoing" ? "#6366f1" : "#22c55e",
                    border: `1px solid ${work.status === "Ongoing" ? "rgba(99,102,241,0.25)" : "rgba(34,197,94,0.25)"}`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: work.status === "Ongoing" ? "#6366f1" : "#22c55e",
                    }}
                  />
                  {work.status}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--muted-foreground)" }}
              >
                {work.description}
              </p>

              {/* Deliverables + Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Deliverables
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {work.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        <CheckCircle2
                          size={12}
                          className="mt-0.5 shrink-0"
                          style={{ color: work.accent }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{
                          background: `${work.accent}12`,
                          color: work.accent,
                          border: `1px solid ${work.accent}28`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-8 rounded-xl border p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "rgba(6,182,212,0.07)",
            borderColor: "rgba(6,182,212,0.2)",
          }}
        >
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
              Open to freelance opportunities
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
              Rails backends, Android apps, API integrations &amp; more.
            </p>
          </div>
          <a
            href="mailto:ayushlahiri2007@gmail.com"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-85 shrink-0"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <Mail size={14} />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
