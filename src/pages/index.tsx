import type { PageConfig } from "next";
import Image from "next/image";
import Head from "next/head";
import {
  MicroLink,
  SignalPulse,
} from "@/components/amicro/MicroPrimitives";
import {
  caseStudies,
  credentials,
  education,
  experience,
  impactMetrics,
  navItems,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { microInteractionsScript } from "@/lib/micro-interactions";
import { siteUrl } from "@/lib/site-url";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/han-ling-hsu/",
  },
  { label: "GitHub", href: "https://github.com/slashhsu" },
  { label: "Kaggle", href: "https://www.kaggle.com/samhsuslash" },
];

const workPrinciples = [
  {
    title: "Start with the decision",
    description:
      "Define the product or commercial choice first, then work backwards to the evidence that will genuinely change it.",
  },
  {
    title: "Build a shared measurement language",
    description:
      "Create KPIs, event frameworks and reporting rhythms that product, engineering and growth teams can trust together.",
  },
  {
    title: "Turn analysis into momentum",
    description:
      "Translate complex behaviour into clear recommendations, practical experiments and an honest view of what to do next.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Han-Ling Hsu",
  url: siteUrl,
  image: `${siteUrl}/profile-cutout.webp`,
  jobTitle: "Product & Growth Analytics Lead",
  email: "mailto:hanlinghsu300@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Sheffield",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Tunghai University",
    },
  ],
  sameAs: contactLinks.map((link) => link.href),
  knowsAbout: [
    "Product analytics",
    "Growth analytics",
    "Experimentation",
    "User behaviour",
    "SQL",
    "Python",
    "Business intelligence",
  ],
};

export const config: PageConfig = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Han-Ling Hsu | Product &amp; Growth Analytics</title>
        <meta
          name="description"
          content="Product and growth analytics leader in London, turning behavioural data into confident product decisions and measurable growth."
        />
        <meta
          name="keywords"
          content="Han-Ling Hsu, Product Analyst, Growth Analytics, Data Analyst, Product Analytics, London"
        />
        <meta name="author" content="Han-Ling Hsu" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#F7F3EC" />
        <link rel="canonical" href={`${siteUrl}/`} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta
          property="og:title"
          content="Han-Ling Hsu | Product & Growth Analytics"
        />
        <meta
          property="og:description"
          content="I turn behavioural data into product decisions that compound."
        />
        <meta property="og:site_name" content="Han-Ling Hsu" />
        <meta property="og:image" content={`${siteUrl}/og-scroll.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Han-Ling Hsu — Product & Growth Analytics"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Han-Ling Hsu | Product & Growth Analytics"
        />
        <meta
          name="twitter:description"
          content="I turn behavioural data into product decisions that compound."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-scroll.png`} />
        <meta
          name="twitter:image:alt"
          content="Han-Ling Hsu — Product & Growth Analytics"
        />
      </Head>

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell site-nav">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              HL
            </span>
            <span className="brand-text">
              Han-Ling Hsu
              <br />
              Product Analytics
            </span>
            <span className="sr-only">, home</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <MicroLink className="nav-cta" href="#contact" icon="↓">
            Let&apos;s talk
          </MicroLink>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label} <span aria-hidden="true">↘</span>
                </a>
              ))}
              <a href="#contact">
                Let&apos;s talk <span aria-hidden="true">↓</span>
              </a>
            </nav>
          </details>
        </div>
        <span className="page-progress" aria-hidden="true" />
      </header>

      <main id="main-content">
        <section className="shell hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-role">
              <span className="hero-role-dot" aria-hidden="true" />
              Product &amp; Growth Analytics Lead · London
            </p>
            <h1 id="hero-title">
              I turn behavioural data into <em>product decisions</em> that
              compound.
            </h1>
            <p className="hero-lede">
              With 5+ years across consumer apps, manufacturing and data
              science, I connect strategy, experimentation and scalable
              analytics to measurable growth.
            </p>
            <div className="hero-actions">
              <MicroLink
                className="button button-primary"
                href="#impact"
                icon="↓"
              >
                Explore my impact
              </MicroLink>
              <MicroLink
                className="button button-secondary"
                href="#contact"
                icon="↓"
              >
                Start a conversation
              </MicroLink>
            </div>
            <div className="hero-proof" aria-label="Experience focus">
              <span>Consumer products</span>
              <span>Growth systems</span>
              <span>Experimentation</span>
            </div>
          </div>

          <div
            className="portrait-wrap micro-portrait"
            data-tilt
            data-tilt-flat
            data-tilt-strength="1.5"
          >
            <div className="portrait-frame">
              <Image
                src="/profile-cutout.webp"
                alt="Portrait of Han-Ling Hsu"
                fill
                priority
                sizes="(max-width: 980px) 78vw, 38vw"
              />
            </div>
            <p className="portrait-note">
              Product thinking, backed by evidence.
              <small>London · United Kingdom</small>
            </p>
          </div>
        </section>

        <section
          className="impact-section section"
          id="impact"
          aria-labelledby="impact-heading"
        >
          <div className="shell">
            <div className="impact-header">
              <div>
                <p className="section-kicker">Impact in numbers</p>
                <h2 id="impact-heading">Evidence over theatre.</h2>
              </div>
              <p>
                The work matters when the numbers move—and when teams understand
                why they moved.
              </p>
            </div>

            <div className="metric-grid">
              {impactMetrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong className="metric-value">{metric.value}</strong>
                  <span className="metric-label">{metric.label}</span>
                  <p>{metric.detail}</p>
                  <SignalPulse />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="shell about-grid">
            <div className="about-statement">
              <p className="section-kicker">How I work</p>
              <h2 id="about-heading">
                The best analytics does more than explain the past. It gives a
                team the <em>confidence to act.</em>
              </h2>
              <p>
                I work at the intersection of product, data and growth—close
                enough to the customer journey to find the signal, and close
                enough to the business to make it useful.
              </p>
            </div>

            <div className="principles">
              {workPrinciples.map((principle, index) => (
                <article className="principle" key={principle.title}>
                  <span className="principle-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="case-studies section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">Selected impact</p>
                <h2 className="section-heading" id="work-heading">
                  From signal to system.
                </h2>
              </div>
              <p>
                Three examples of the same operating principle: frame the right
                question, create reliable evidence, then make the next decision
                easier.
              </p>
            </div>

            <div className="impact-journey">
              <aside className="journey-stage">
                <div className="journey-panel">
                  <div className="journey-panel-head">
                    <span>Decision route</span>
                    <span>01—03</span>
                  </div>

                  <div className="journey-orbit" aria-hidden="true">
                    <span className="journey-ring journey-ring-outer" />
                    <span className="journey-ring journey-ring-inner" />
                    <span className="journey-axis journey-axis-horizontal" />
                    <span className="journey-axis journey-axis-vertical" />
                    <span className="journey-core">
                      <small>Evidence</small>
                      <strong>Decision</strong>
                    </span>
                    {caseStudies.map((study, index) => (
                      <span
                        className={`journey-node journey-node-${index + 1}`}
                        key={study.number}
                      >
                        <strong>{study.metrics[0].value}</strong>
                        <small>{study.category}</small>
                      </span>
                    ))}
                  </div>

                  <nav
                    className="journey-route"
                    aria-label="Selected impact journey"
                  >
                    <ol>
                      {caseStudies.map((study) => (
                        <li key={study.number}>
                          <a href={`#impact-story-${study.number}`}>
                            <span>{study.number}</span>
                            {study.category}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  <p className="journey-cue">
                    <span aria-hidden="true" />
                    Scroll through the evidence
                  </p>
                </div>
              </aside>

              <div className="case-list">
                {caseStudies.map((study) => (
                  <article
                    className="case-card"
                    id={`impact-story-${study.number}`}
                    key={study.number}
                  >
                    <span className="case-card-progress" aria-hidden="true" />
                    <span className="case-number" aria-hidden="true">
                      {study.number}
                    </span>
                    <div>
                      <span className="case-category">{study.category}</span>
                      <h3>{study.title}</h3>
                    </div>
                    <div>
                      <p className="case-summary">{study.summary}</p>
                      <div className="case-metrics">
                        {study.metrics.map((metric) => (
                          <div
                            className="case-metric"
                            key={`${metric.value}-${metric.label}`}
                          >
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                      <ul className="tag-list" aria-label="Capabilities used">
                        {study.capabilities.map((capability) => (
                          <li key={capability}>{capability}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="shell experience-layout">
            <div className="experience-aside">
              <p className="section-kicker">Experience</p>
              <h2 className="section-heading" id="experience-heading">
                Built across contexts.
              </h2>
              <p>
                A career spanning consumer technology, high-volume operations
                and the analytical foundations behind both.
              </p>
            </div>

            <div>
              <div className="timeline">
                {experience.map((item) => (
                  <article
                    className="timeline-item"
                    key={`${item.company}-${item.role}`}
                  >
                    <p className="timeline-period">{item.period}</p>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="timeline-company">
                        <span>{item.company}</span>
                        <span>{item.location}</span>
                      </p>
                      <p className="timeline-summary">{item.summary}</p>
                      <ul className="highlight-list">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <div className="education-block">
                <h3 className="subheading">Education</h3>
                <div className="education-grid">
                  {education.map((item) => (
                    <article className="education-card" key={item.degree}>
                      <h4>{item.degree}</h4>
                      <p>
                        {item.institution} · {item.location}
                        <br />
                        {item.period}
                      </p>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="projects-section section"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">Projects</p>
                <h2 className="section-heading" id="projects-heading">
                  Curiosity, made useful.
                </h2>
              </div>
              <p>
                Independent work where data science meets a real decision—from
                player selection to language classification.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <a
                  className="project-card micro-tilt-surface"
                  data-tilt
                  data-tilt-strength="2.5"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.title}
                >
                  <span
                    className="micro-card-glow micro-card-glow-ivory"
                    aria-hidden="true"
                  />
                  <div className="micro-card-content">
                    <span className="project-index">
                      0{index + 1}
                      <span className="project-arrow" aria-hidden="true">
                        <span className="project-arrow-track">
                          <span>↗</span>
                          <span>↗</span>
                        </span>
                      </span>
                    </span>
                    <h3>
                      {project.title}
                      <span className="sr-only">
                        , view project on GitHub (opens in a new tab)
                      </span>
                    </h3>
                    <p>{project.description}</p>
                    <ul className="tag-list" aria-label="Project technologies">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          id="skills"
          aria-labelledby="skills-heading"
        >
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="section-kicker">Capabilities</p>
                <h2 className="section-heading" id="skills-heading">
                  Strategy with technical depth.
                </h2>
              </div>
              <p>
                A toolkit built to move fluidly from a leadership question to a
                defensible analysis—and back to a clear recommendation.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {credentials.map((credential) => (
              <article className="credential-card" key={credential.title}>
                <span className="credential-mark" aria-hidden="true">
                  AI
                </span>
                <div>
                  <h3>{credential.title}</h3>
                  <p>{credential.issuer}</p>
                </div>
                <span className="credential-date">{credential.date}</span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="shell contact-grid">
            <div>
              <p className="section-kicker">Let&apos;s connect</p>
              <h2 id="contact-heading">
                Have a decision that needs <em>better evidence?</em>
              </h2>
              <p className="contact-copy">
                I&apos;m always glad to meet people working on ambitious
                products, thoughtful growth problems and analytics teams that
                want to raise the quality of their decisions.
              </p>
            </div>
            <div className="contact-links">
              <MicroLink
                className="button button-primary"
                href="mailto:hanlinghsu300@gmail.com?subject=Portfolio%20enquiry"
                icon="↗"
              >
                hanlinghsu300@gmail.com
              </MicroLink>
              {contactLinks.map((link) => (
                <MicroLink
                  className="button"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.label}
                  icon="↗"
                >
                  {link.label}
                </MicroLink>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-row">
          <p>© {new Date().getFullYear()} Han-Ling Hsu. Built with intent.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        dangerouslySetInnerHTML={{ __html: microInteractionsScript }}
      />
    </>
  );
}
