import { useEffect, useState } from 'react'
import platyFace from './assets/platy-glasses-transparent.png'
import platypusImage from './assets/platy-contours.svg'
import { translations, type Language } from './translations'
import './App.css'

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.5 10h10m-4-4 4 4-4 4" />
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('fr')
  const [isLoading, setIsLoading] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)
  const copy = translations[language]

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const exitDelay = reducedMotion ? 100 : 1850
    const fadeDuration = reducedMotion ? 180 : 500
    let finishTimer = 0

    document.body.classList.add('loading-active')
    const exitTimer = window.setTimeout(() => {
      setIsLeaving(true)
      document.body.classList.remove('loading-active')
      finishTimer = window.setTimeout(
        () => setIsLoading(false),
        fadeDuration,
      )
    }, exitDelay)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
      document.body.classList.remove('loading-active')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.page.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.page.description)
  }, [copy, language])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return
    }

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      {isLoading && (
        <div
          className={`welcome-loader${isLeaving ? ' is-leaving' : ''}`}
          role="status"
          aria-live="polite"
          aria-label={copy.loader.label}
        >
          <div className="loader-scene" aria-hidden="true">
            <span className="loader-star loader-star-one">✦</span>
            <span className="loader-star loader-star-two">✧</span>
            <span className="loader-star loader-star-three">✦</span>
            <img className="platypus-art" src={platypusImage} alt="" />
          </div>
          <p className="loader-caption">{copy.loader.caption}</p>
          <p className="loader-subcaption">{copy.loader.subcaption}</p>
          <span className="loader-progress" aria-hidden="true">
            <span />
          </span>
        </div>
      )}
      <div
        className={`page-shell${isLoading ? ' is-loading' : ''}`}
        inert={isLoading}
      >
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label={copy.navigation.homeLabel}
        >
          <span className="wordmark-mark">
            <img className="wordmark-platy" src={platyFace} alt="" />
          </span>
          <span>{copy.profileName}</span>
        </a>
        <nav className="site-nav" aria-label={copy.navigation.mainLabel}>
          <a href="#expertise">{copy.navigation.expertise}</a>
          <a href="#experience">{copy.navigation.experience}</a>
          <a className="nav-contact" href="#contact">
            {copy.navigation.contact} <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            aria-label={copy.navigation.switchLanguage}
            aria-pressed={language === 'en'}
          >
            {copy.navigation.languageButton}
          </button>
        </nav>
      </header>

      <main>
        <section className="profile-hero section-wrap" id="home">
          <div className="profile-left">
            <h1 className="profile-heading" data-reveal>{copy.profile.heading}</h1>
            <div className="profile-card" data-reveal>
              <div className="profile-facts">
                <div className="profile-fact">
                  <span>{copy.profile.operatorLabel}</span>
                  <strong className="profile-operator">{copy.profileName}</strong>
                </div>
                <div className="profile-fact">
                  <span>{copy.profile.roleLabel}</span>
                  <strong className="profile-role">{copy.profile.role}</strong>
                </div>
                <div className="profile-fact">
                  <span>{copy.profile.locationLabel}</span>
                  <strong>{copy.place}</strong>
                </div>
                <div className="profile-fact profile-status-fact">
                  <span>{copy.profile.statusLabel}</span>
                  <strong>{copy.profile.status}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-terminal" data-reveal>
              <div className="terminal-titlebar">
                <span aria-hidden="true">›_</span>
                <span>{copy.profile.terminalTitle}</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-block">
                  <p className="terminal-command">
                    <span aria-hidden="true">➜</span> {copy.profile.whoamiCommand}
                  </p>
                  <p className="terminal-text">{copy.profile.description}</p>
                </div>
                <div className="terminal-block">
                  <p className="terminal-command">
                    <span aria-hidden="true">➜</span> {copy.profile.qualificationsCommand}
                  </p>
                  <p className="terminal-text terminal-mission">{copy.profile.mission}</p>
                  <p className="terminal-subheading">{copy.profile.expertiseHeading}</p>
                  <ul className="terminal-skills">
                    {copy.skills.items.slice(0, 5).map((skill) => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="profile-stats" aria-label={copy.profile.qualificationsHeading}>
              <article className="profile-stat">
                <span className="profile-stat-icon" aria-hidden="true">⌘</span>
                <p>{copy.profile.experienceStat}</p>
                <strong>{copy.profile.experienceValue}</strong>
              </article>
              <article className="profile-stat">
                <span className="profile-stat-icon" aria-hidden="true">‹/›</span>
                <p>{copy.profile.projectsStat}</p>
                <strong>{copy.profile.projectsValue}</strong>
              </article>
              <article className="profile-stat">
                <span className="profile-stat-icon" aria-hidden="true">✦</span>
                <p>{copy.profile.educationStat}</p>
                <strong>{copy.profile.educationValue}</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="section-wrap projects-inner" id="expertise">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">
                  {copy.projects.eyebrow}
                </p>
                <h2>
                  {copy.projects.heading}
                  <br />
                  <em>{copy.projects.headingEmphasis}</em>
                </h2>
              </div>
              <p className="section-aside">
                {copy.projects.aside}
              </p>
            </div>
            <div className="project-list">
              {copy.projects.entries.map((project) => {
                const experience =
                  copy.experience.entries[project.experienceIndex]

                return (
                  <article className="project" data-reveal key={project.number}>
                    <div
                      className={`project-visual ${project.tone}`}
                      aria-label={`${project.name} — ${copy.projects.visualizationLabel}`}
                      role="img"
                    >
                      <span className="project-symbol" aria-hidden="true">
                        {project.symbol}
                      </span>
                      <span className="visual-number">{project.number}</span>
                    </div>
                    <div className="project-info">
                      <p className="project-type">{project.category}</p>
                      <h3>{project.name}</h3>
                      <p className="project-description">{project.summary}</p>
                      <ul
                        className="project-skills"
                        aria-label={copy.projects.skillsLabel}
                      >
                        {project.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                      <details className="project-details">
                        <summary>{copy.projects.experienceDetailsLabel}</summary>
                        <p className="project-experience-role">
                          {experience.role} · {experience.company} · {experience.period}
                        </p>
                        <ul>
                          {experience.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="experience">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">
                {copy.experience.eyebrow}
              </p>
              <h2>
                {copy.experience.heading}
                <br />
                <em>{copy.experience.headingEmphasis}</em>
              </h2>
            </div>
            <p className="section-aside">
              {copy.experience.aside}
            </p>
          </div>

          <div className="experience-list">
            {copy.experience.entries.map((job, index) => (
              <article className="experience-item" data-reveal key={job.company}>
                <div className="experience-index">
                  <span>0{index + 1}</span>
                  <span className="timeline-line" />
                </div>
                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <p className="experience-period">
                        {job.period}
                      </p>
                      <h3>{job.role}</h3>
                      <p className="experience-company">
                        {job.company} <span>·</span> {job.location}
                      </p>
                    </div>
                    <span className="experience-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p className="experience-summary">
                    {job.summary}
                  </p>
                  <ul>
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="publication-section">
          <div className="publication-inner section-wrap" data-reveal>
            <span className="publication-mark" aria-hidden="true">“</span>
            <div>
              <p className="eyebrow">{copy.publication.eyebrow}</p>
              <h2>{copy.publication.title}</h2>
              <p className="publication-meta">
                {copy.publication.authors} <span>·</span> {copy.publication.venue}
              </p>
              <p className="publication-summary">{copy.publication.summary}</p>
            </div>
            <a
              className="publication-link"
              href={copy.publication.href}
              target="_blank"
              rel="noreferrer"
            >
              {copy.publication.link} <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" data-reveal>
          <p className="eyebrow">
            {copy.contact.eyebrow}
          </p>
          <h2>
            {copy.contact.heading}
          </h2>
          <p className="contact-intro">{copy.contact.intro}</p>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${copy.contact.email}`}>
              {copy.contact.email} <ArrowIcon />
            </a>
            <a
              className="contact-link"
              href={copy.contact.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.contact.github} <ArrowIcon />
            </a>
          </div>
          <span className="contact-doodle" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">
            <img className="wordmark-platy" src={platyFace} alt="" />
          </span>
          <span>{copy.profileName}</span>
        </a>
        <p>
          {copy.place} <span>·</span> {copy.footer.copyright}{' '}
          {new Date().getFullYear()}
        </p>
        <a href="#home" className="back-to-top">
          {copy.footer.backToTop}
        </a>
      </footer>
      </div>
    </>
  )
}

export default App
