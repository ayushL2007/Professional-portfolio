"use client"

import { ExternalLink, CheckCircle2 } from "lucide-react"

const freelanceWorks = [
  {
    title: "Custom Ruby on Rails Web Application",
    client: "Private Client",
    type: "Full-Stack Development",
    description:
      "Architected and delivered a full-stack Ruby on Rails web application, handling everything from database schema design to front-end integration. Implemented RESTful APIs, authentication, and responsive UI.",
    deliverables: [
      "Custom Rails API with authentication",
      "Responsive front-end UI",
      "Database design & optimization",
      "Deployment on Render/Heroku",
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
      "Designed and built a production-ready native Android application from scratch using Java. Covered UI/UX design in XML, REST API integration, local SQLite persistence, and Google Play submission support.",
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
      "Built a backend service that integrates with the GitHub API using Octokit, automatically aggregating repository data, language stats, and project highlights. Implemented smart caching to minimize API calls with a 24-hour refresh strategy.",
    deliverables: [
      "GitHub API integration via Octokit",
      "Smart file-based caching system",
      "Language & repo analytics",
      "JSON data service layer",
    ],
    tech: ["Ruby on Rails", "Octokit", "JSON", "Caching"],
    accent: "#ef4444",
    status: "Completed",
  },
  {
    title: "Technical Mentorship — Android Dev Sessions",
    client: "GDG IIIT Kalyani",
    type: "Technical Education",
    description:
      "Delivered intensive Android development sessions as App Dev Lead at Google Developer Group IIIT Kalyani. Covered the full Android development lifecycle, from layouts to networking, for a cohort of student developers.",
    deliverables: [
      "Structured curriculum for Android dev",
      "Hands-on coding workshops",
      "Project guidance & code reviews",
      "Resource materials & recordings",
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
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Freelance Work
          </h2>
          <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        </div>
        <p
          className="text-sm mb-12"
          style={{ color: "var(--muted-foreground)" }}
        >
          Selected client work and independent engagements outside of academic projects.
        </p>

        <div className="flex flex-col gap-6">
          {freelanceWorks.map((work) => (
            <div
              key={work.title}
              className="rounded-xl border p-6 transition-all duration-300 hover:border-opacity-80"
              style={{
                background: "var(--surface-raised)",
                borderColor: "var(--border)",
                borderLeftColor: work.accent,
                borderLeftWidth: "3px",
              }}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span
                      className="text-xs font-mono"
                      style={{ color: work.accent }}
                    >
                      {work.type}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      &middot; {work.client}
                    </span>
                  </div>
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium shrink-0"
                  style={{
                    background: work.status === "Ongoing"
                      ? "rgba(99,102,241,0.12)"
                      : "rgba(34,197,94,0.12)",
                    color: work.status === "Ongoing" ? "#6366f1" : "#22c55e",
                    border: `1px solid ${work.status === "Ongoing" ? "rgba(99,102,241,0.3)" : "rgba(34,197,94,0.3)"}`,
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
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                {work.description}
              </p>

              {/* Deliverables + Tech split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Deliverables */}
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
                          size={13}
                          className="mt-0.5 shrink-0"
                          style={{ color: work.accent }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md font-mono"
                        style={{
                          background: `${work.accent}15`,
                          color: work.accent,
                          border: `1px solid ${work.accent}30`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 rounded-xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "var(--accent-muted)",
            borderColor: "var(--accent-border)",
          }}
        >
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Open to freelance opportunities
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: "var(--muted-foreground)" }}
            >
              Rails backends, Android apps, API integrations &amp; more.
            </p>
          </div>
          <a
            href="mailto:ayushlahiri2007@gmail.com"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90 shrink-0"
            style={{
              background: "var(--accent)",
              color: "#fff",
            }}
          >
            <ExternalLink size={14} />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
