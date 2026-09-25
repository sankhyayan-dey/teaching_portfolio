import "./App.css";

function App() {
  return (
    <main className="portfolio">

      {/* HERO */}
      <section className="hero">
        <nav className="navbar">
          <div className="brand">SANKHYAYAN DEY</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#teaching">Teaching</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-content">
            <p className="eyebrow">
              COMPUTER SCIENCE & ACADEMIC EDUCATOR
            </p>

            <h1>
              Making difficult things
              <span>finally click.</span>
            </h1>

            <p className="hero-description">
              4+ years of teaching experience across Computer Science,
              Science, Social Science and English, with a strong
              specialization in Computer Science & Technology.
            </p>

            <div className="hero-buttons">
              <a href="#teaching" className="button primary">
                Explore My Teaching
              </a>

              <a href="#contact" className="button secondary">
                Get in Touch
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>4+</strong>
                <span>Years Teaching</span>
              </div>

              <div>
                <strong>V to X</strong>
                <span>School Classes</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Major Curricula</span>
              </div>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-glow"></div>

            <div className="portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Sankhyayan Dey"
              />
            </div>

            <div className="portrait-ring"></div>

            <div className="portrait-label">
              <span>COMPUTER SCIENCE</span>
              <span>EDUCATOR</span>
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">01 | ABOUT</p>

        <h2>
          More than finishing a chapter.
          <br />
          <span>Understanding it.</span>
        </h2>

        <p className="section-text">
          I believe good teaching is not about making students memorise more.
          It is about breaking complicated ideas into simple, understandable
          concepts and helping students become confident enough to solve
          problems on their own.
        </p>
      </section>


      {/* PROOF / CREDIBILITY */}
      <section className="proof-section">
        <div className="proof-intro">
          <p className="section-label">02 | THE FOUNDATION</p>

          <h2>
            Experience that
            <br />
            <span>goes beyond a degree.</span>
          </h2>

          <p>
            Teaching has been a part of my journey for years, alongside my
            academic background in Computer Science & Technology.
          </p>
        </div>

        <div className="proof-grid">
          <div className="proof-card">
            <strong>4+</strong>
            <span>Years of Teaching</span>
            <p>
              Consistent experience helping school students understand
              academic concepts and build confidence.
            </p>
          </div>

          <div className="proof-card">
            <strong>V–X</strong>
            <span>School-Level Teaching</span>
            <p>
              Academic support across multiple school classes and subjects.
            </p>
          </div>

          <div className="proof-card featured-proof">
            <strong>CS</strong>
            <span>Core Specialization</span>
            <p>
              Strongest focus in Computer Science, programming and
              technology-focused learning.
            </p>
          </div>

          <div className="proof-card">
            <strong>ICSE</strong>
            <span>Academic Background</span>
            <p>
              ICSE and ISC academic background supporting English and
              school-level academic teaching.
            </p>
          </div>
        </div>
      </section>


      {/* TEACHING */}
      <section id="teaching" className="section teaching-section">
        <p className="section-label">03 | WHAT I TEACH</p>

        <div className="subject-grid">

          <article className="subject-card featured">
            <span className="card-number">01</span>

            <h3>Computer Science</h3>

            <p>
              My strongest area. Programming, computer fundamentals,
              problem-solving and technology-focused learning.
            </p>

            <span className="card-tag">
              CORE SPECIALIZATION
            </span>
          </article>

          <article className="subject-card">
            <span className="card-number">02</span>

            <h3>Science</h3>

            <p>
              Concept-based academic support with focus on actually
              understanding how and why things work.
            </p>
          </article>

          <article className="subject-card">
            <span className="card-number">03</span>

            <h3>Social Science</h3>

            <p>
              History, Civics and Geography with structured explanations
              and exam-focused preparation.
            </p>
          </article>

          <article className="subject-card">
            <span className="card-number">04</span>

            <h3>English</h3>

            <p>
              Grammar, prose and poetry, particularly supported by an
              ICSE and ISC academic background.
            </p>
          </article>

        </div>
      </section>


      {/* TEACHING APPROACH */}
      <section className="approach-section">
        <div className="approach-heading">
          <p className="section-label">04 | TEACHING APPROACH</p>

          <h2>
            Understand first.
            <br />
            <span>Memorise later.</span>
          </h2>
        </div>

        <div className="approach-list">
          <div className="approach-item">
            <span>01</span>
            <div>
              <h3>Break it down</h3>
              <p>
                Complex topics are divided into smaller ideas that students
                can actually follow.
              </p>
            </div>
          </div>

          <div className="approach-item">
            <span>02</span>
            <div>
              <h3>Build understanding</h3>
              <p>
                The focus stays on understanding why something works,
                not simply remembering what it is.
              </p>
            </div>
          </div>

          <div className="approach-item">
            <span>03</span>
            <div>
              <h3>Practice independently</h3>
              <p>
                Students are encouraged to solve problems themselves after
                the concept becomes clear.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="closing-section" id="contact">
        <p className="section-label">05 | LET'S CONNECT</p>

        <h2>
          Looking for the right
          <br />
          <span>learning environment?</span>
        </h2>

        <a
          href="mailto:sankhyayand001@gmail.com?subject=Teaching%20Enquiry"
          className="button primary"
        >
          Contact Me →
        </a>
      </section>


      {/* FOOTER */}
      <footer>
        <span>© 2026 Sankhyayan Dey</span>
        <span>Computer Science & Academic Educator</span>
      </footer>

    </main>
  );
}

export default App;