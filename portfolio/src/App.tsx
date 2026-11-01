import { useEffect, useState } from 'react'
import dialogueAddressing from './assets/dialogue-addressing.svg'
import embeddedSystems from './assets/embedded-systems.svg'
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
    if (isLoading) {
      return
    }

    const navigation = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined

    if (navigation?.type === 'reload') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [isLoading])

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
                      className={`project-visual ${project.tone}${project.number === '01' ? ' project-wavelet' : ''}${project.number === '02' ? ' project-dialogue' : ''}${project.number === '03' ? ' project-embedded' : ''}`}
                      aria-label={`${project.name} — ${project.number === '02' ? copy.projects.dialogueVisualizationLabel : project.number === '03' ? copy.projects.embeddedVisualizationLabel : copy.projects.visualizationLabel}`}
                      role="img"
                    >
                      {project.number === '01' ? (
                        <svg
                          className="cwt-chart"
                          viewBox="0 0 800 340"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id="cwt-background" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#160d24" />
                              <stop offset="1" stopColor="#090812" />
                            </linearGradient>
                            <linearGradient id="cwt-energy" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0" stopColor="#7b3cff" />
                              <stop offset=".35" stopColor="#21dcff" />
                              <stop offset=".62" stopColor="#73f5a2" />
                              <stop offset=".82" stopColor="#ffe06b" />
                              <stop offset="1" stopColor="#ff8b45" />
                            </linearGradient>
                            <filter id="cwt-glow" x="-20%" y="-30%" width="140%" height="160%">
                              <feGaussianBlur stdDeviation="9" />
                            </filter>
                            <clipPath id="cwt-plot-clip">
                              <rect x="76" y="34" width="684" height="246" />
                            </clipPath>
                          </defs>
                          <rect x="76" y="34" width="684" height="246" fill="url(#cwt-background)" />
                          <g className="cwt-grid">
                            <path d="M76 34H760 M76 75H760 M76 116H760 M76 157H760 M76 198H760 M76 239H760 M76 280H760" />
                            <path d="M76 34V280 M213 34V280 M350 34V280 M487 34V280 M624 34V280 M760 34V280" />
                          </g>
                          <g clipPath="url(#cwt-plot-clip)">
                            <path
                              className="cwt-energy-glow"
                              d="M76 203 C96 190 104 146 119 167 S145 221 162 188 183 122 199 154 220 222 239 186 260 126 275 163 300 225 319 177 340 117 354 151 378 220 395 183 413 136 430 170 454 225 474 182 492 106 506 145 529 214 546 178 563 127 582 161 602 211 619 174 638 111 652 149 672 212 688 169 708 126 727 160 744 195 760 171"
                              fill="none"
                              stroke="url(#cwt-energy)"
                              strokeWidth="30"
                              filter="url(#cwt-glow)"
                            />
                            <path
                              className="cwt-energy-ridge"
                              d="M76 203 C96 190 104 146 119 167 S145 221 162 188 183 122 199 154 220 222 239 186 260 126 275 163 300 225 319 177 340 117 354 151 378 220 395 183 413 136 430 170 454 225 474 182 492 106 506 145 529 214 546 178 563 127 582 161 602 211 619 174 638 111 652 149 672 212 688 169 708 126 727 160 744 195 760 171"
                              fill="none"
                              stroke="url(#cwt-energy)"
                              strokeWidth="13"
                            />
                            <path
                              d="M76 237 C115 226 127 207 151 219 S190 248 218 225 251 197 279 220 315 246 343 215 381 192 411 217 444 242 474 216 512 184 539 209 574 243 604 215 640 191 671 216 718 238 760 205"
                              fill="none"
                              stroke="#7b4cff"
                              strokeWidth="18"
                              opacity=".56"
                              filter="url(#cwt-glow)"
                            />
                            <path
                              d="M83 171V248 M94 152V227 M108 178V242 M127 130V225 M145 175V260 M170 166V234 M189 109V222 M210 151V253 M232 181V239 M252 137V224 M273 154V245 M296 190V258 M321 136V220 M344 109V237 M367 162V254 M389 188V244 M413 133V224 M438 162V254 M460 194V261 M483 145V223 M505 95V232 M529 153V246 M550 182V253 M575 123V224 M598 168V247 M620 185V261 M644 108V229 M666 147V249 M690 170V244 M715 129V229 M741 165V245"
                              fill="none"
                              stroke="#a78bff"
                              strokeWidth="2"
                              opacity=".48"
                            />
                          </g>
                          <g className="cwt-axis-labels">
                            <text x="76" y="302">0</text>
                            <text x="410" y="302">TIME</text>
                            <text x="748" y="302">10s</text>
                            <text x="65" y="39">256</text>
                            <text x="65" y="120">16</text>
                            <text x="65" y="202">4</text>
                            <text x="65" y="280">1</text>
                            <text transform="translate(22 195) rotate(-90)">FREQUENCY (Hz)</text>
                          </g>
                          <text className="cwt-label" x="90" y="56">CONTINUOUS WAVELET TRANSFORM</text>
                          <text className="cwt-number" x="735" y="266">{project.number}</text>
                        </svg>
                      ) : project.number === '02' ? (
                        <img className="dialogue-diagram" src={dialogueAddressing} alt="" />
                      ) : project.number === '03' ? (
                        <img className="embedded-diagram" src={embeddedSystems} alt="" />
                      ) : (
                        <>
                          <span className="project-symbol" aria-hidden="true">
                            {project.symbol}
                          </span>
                          <span className="visual-number">{project.number}</span>
                        </>
                      )}
                    </div>
                    <div className="project-info">
                      <p className="project-type">{project.category}</p>
                      <h3>{project.name}</h3>
                      <p className="project-description">{project.summary}</p>
                      <ul
                        className="project-skills"
                        aria-label={copy.projects.skillsLabel}
                      >
                        {project.skills.map((skill) => {
                          const normalizedSkill = skill.toLowerCase()
                          const isNeonSkill =
                            (project.number === '01' &&
                              ['python', 'keras', 'tensorflow'].includes(
                                normalizedSkill,
                              )) ||
                            (project.number === '02' &&
                              ['python', 'spacy', 'flair', 'tensorflow'].includes(
                                normalizedSkill,
                              )) ||
                            (project.number === '03' &&
                              [
                                'python',
                                'react',
                                'docker',
                                'nginx',
                                'linux',
                                'mqtt',
                                'sqlite',
                              ].includes(normalizedSkill))

                          return (
                            <li
                              className={isNeonSkill ? 'project-skill-neon' : undefined}
                              key={skill}
                            >
                              {skill}
                            </li>
                          )
                        })}
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

        <section className="publication-section" id="publications">
          <div className="publication-content section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{copy.publication.sectionEyebrow}</p>
                <h2>{copy.publication.sectionHeading}</h2>
              </div>
            </div>
            <article className="publication-inner">
              <span className="publication-mark" aria-hidden="true">“</span>
              <div>
                <h3>{copy.publication.title}</h3>
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
            </article>
          </div>
        </section>

        <section className="work-section section-wrap" id="experience">
          <div className="section-heading">
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
              <article className="experience-item" key={job.company}>
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
