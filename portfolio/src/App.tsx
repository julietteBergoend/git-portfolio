import './App.css'

const projects = [
  {
    number: '01',
    name: 'Goodside',
    type: 'Brand & digital experience',
    year: '2025',
    description:
      'A brighter identity and a more welcoming online home for a new kind of neighborhood market.',
    visual: 'goodside',
    label: 'A little more good, every day.',
  },
  {
    number: '02',
    name: 'Forma',
    type: 'Product design',
    year: '2024',
    description:
      'Making the everyday money stuff feel a little less like work and a lot more human.',
    visual: 'forma',
    label: 'Your money, in a good place.',
  },
  {
    number: '03',
    name: 'Slow Sunday',
    type: 'Art direction & web',
    year: '2024',
    description:
      'A thoughtful digital storefront for objects made to be kept, used, and loved.',
    visual: 'sunday',
    label: 'Make room for slow.',
  },
]

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
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Your Name, home">
          <span className="wordmark-mark">n.</span>
          <span>Your Name</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Independent creative · Designer & developer
            </p>
            <h1>
              Making the
              <br />
              internet feel
              <br />
              <span className="headline-last">
                a little <em>more human.</em>
              </span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                Thoughtful design and digital experiences for people doing
                good things.
              </p>
              <a className="text-link" href="#work">
                Take a look around <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration">
            <div className="art-sun" />
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-flower" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <i />
            </div>
            <span className="art-caption">A practice in progress</span>
            <span className="art-stamp">GOOD<br />THINGS<br />TAKE SHAPE</span>
            <span className="art-sparkle" aria-hidden="true">✳</span>
          </div>
          <div className="hero-index">
            <span>Scroll a little</span>
            <span className="index-line" />
            <span>01 — 03</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I’ve made</p>
              <h2>Selected work<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">
              A small collection of ideas brought to life, with lovely people.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div
                  className={`project-visual ${project.visual}`}
                  aria-label={`${project.name} project preview`}
                  role="img"
                >
                  <div className="mock-browser">
                    <div className="browser-bar">
                      <span />
                      <span />
                      <span />
                      <i>{project.name.toLowerCase()}.studio</i>
                    </div>
                    <div className="mock-content">
                      <span className="mock-kicker">{project.type}</span>
                      <span className="mock-title">{project.label}</span>
                      <span className="mock-button">Take a look <b>↗</b></span>
                    </div>
                    <span className="mock-shape mock-shape-one" />
                    <span className="mock-shape mock-shape-two" />
                    <span className="mock-shape mock-shape-three" />
                  </div>
                  <span className="visual-number">{project.number}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-line">
                    <h3>{project.name}</h3>
                    <span>{project.year}</span>
                  </div>
                  <p className="project-type">{project.type}</p>
                  <p className="project-description">{project.description}</p>
                  <span className="project-note">
                    Case study details coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="work-footnote">
            These are starter projects — swap them out for your own work.
          </p>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner section-wrap">
            <div className="about-label">
              <span className="about-star" aria-hidden="true">✳</span>
              <p className="eyebrow">A little about me</p>
            </div>
            <div className="about-copy">
              <h2>
                Curious by nature.
                <br />
                <em>Intentional</em> by design.
              </h2>
              <p>
                I’m a creative working at the intersection of thoughtful
                design and useful technology. I love the early questions, the
                tiny details, and making complicated things feel simple.
              </p>
              <p>
                Good work happens when we make it together. If you have a
                thoughtful project or a half-formed idea, I’d love to hear
                about it.
              </p>
              <a className="text-link" href="#contact">
                Let’s work together <ArrowIcon />
              </a>
            </div>
            <div className="about-note">
              <span>Currently into</span>
              <p>Long walks, good type, and ideas that make life a little nicer.</p>
              <span className="note-star" aria-hidden="true">✳</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">Have something in mind?</p>
          <h2>
            Let’s make
            <br />
            <em>it matter.</em>
          </h2>
          <a className="contact-link" href="mailto:your.email@example.com">
            your.email@example.com <ArrowIcon />
          </a>
          <span className="contact-doodle" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">n.</span>
          <span>Your Name</span>
        </a>
        <p>Thoughtfully made, wherever you are. © {new Date().getFullYear()}</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  )
}

export default App
