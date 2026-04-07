import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/sections.css";

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">M</div>
        <div className="email">mathannscet2022@gmail.com</div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <a href="/assets/docs/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <a
                className="hire-btn"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setIsPopupOpen(true);
                }}
              >
                Hire me!
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <div className="popup-overlay" style={{ display: isPopupOpen ? "flex" : "none" }}>
          <div className="popup-content active-style">
            <span
              className="close-btn"
              onClick={() => {
                setIsPopupOpen(false);
              }}
            >
              &times;
            </span>
            <div className="popup-heading">
              <h1>
                <span className="highlight1">Let&apos;s work together!</span>
              </h1>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" id="contact-form" autoComplete="off">
              <input type="hidden" name="access_key" value="50f4541c-0f6d-4fdd-b049-70b060231746" />
              <div className="form-row">
                <input type="text" name="first_name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone Number" required />
                <input type="text" name="company" placeholder="Company Name" required />
              </div>
              <div className="form-row">
                <input type="text" name="work_type" placeholder="Work Type" required />
                <input type="text" name="location" placeholder="Location" required />
              </div>
              <div className="form-row single">
                <textarea name="message" placeholder="Message" required />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <main className="main">
        <section className="intro">
          <div className="text-content">
            <p className="eyebrow">Frontend Specialist & MERN Stack & Database Manager</p>
            <h1>I&apos;m Mathan</h1>
            <h2>
              <span className="highlight">Front-End Developer</span> + <span className="highlight">Database Management</span> & <br></br><span className="highlight"> MERN Stack Developer</span>
            </h2>
            <p className="pararaph">
              Creating engaging front-end interfaces while managing complex databases to ensure smooth and secure
              digital workflows.
            </p>

            <div className="hero-actions">
              <a className="resume-button" href="/assets/docs/resume.pdf" download>
                <img
                  src="/assets/images/icon-download.svg"
                  alt="Download"
                  style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }}
                />
                Download Resume
              </a>
              <a className="outline-button" href="#featured-work">
                View Featured Work
              </a>
            </div>

            <div className="button-socials-container">
              <div className="socials-button">
                <a href="https://www.facebook.com/share/1DzEBMb1es/" target="_blank" rel="noreferrer">
                  <img src="/assets/images/icon-facebook.svg" alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=mf75hzl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/images/icon-instagram.svg" alt="Instagram" />
                </a>
                <a href="https://github.com/Mathan-12" target="_blank" rel="noreferrer">
                  <img src="/assets/images/icon-github.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/m-mathan-41230a288" target="_blank" rel="noreferrer">
                  <img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>

            <div className="stats">
              <Link to="/skills#certified-courses" className="stat-card-btn">
                <strong>15+</strong>
                <br />
                Certified Courses
              </Link>
              <Link to="/skills#project-posts" className="stat-card-btn">
                <strong>3+</strong>
                <br />
                Projects Completed
              </Link>
              <Link to="/skills#internships" className="stat-card-btn">
                <strong>3+</strong>
                <br />
                Internships
              </Link>
              <Link to="/skills#competitions" className="stat-card-btn">
                <strong>1+</strong>
                <br />
                Competitions
              </Link>
            </div>
          </div>
          <div className="image">
            <img src="/assets/images/profile-photo.jpg" alt="Mathan portrait" />
            <div className="image-float-tag">Open to Work</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Tech focus areas">
          <p>React</p>
          <p>UI/UX</p>
          <p>SQL</p>
          <p>Oracle DB</p>
          <p>Java</p>
          <p>Performance</p>
          <p>Responsive Design</p>
        </section>

        <section className="marquee-shell" aria-label="focus marquee">
          <div className="marquee-track">
            <span>Frontend Systems</span>
            <span>Database Architecture</span>
            <span>UI Precision</span>
            <span>Scalable Components</span>
            <span>Clean Code</span>
            <span>Performance First</span>
            <span>Frontend Systems</span>
            <span>Database Architecture</span>
            <span>UI Precision</span>
            <span>Scalable Components</span>
            <span>Clean Code</span>
            <span>Performance First</span>
          </div>
        </section>

        <section className="impact-zone">
          <article className="impact-card">
            <p className="impact-label">Project Delivery</p>
            <h3>Fast, Reliable Launches</h3>
            <p>Builds focused on production-readiness, responsiveness, and maintainable structure.</p>
          </article>
          <article className="impact-card">
            <p className="impact-label">Design Standards</p>
            <h3>User-Centered Interfaces</h3>
            <p>Layouts designed for clarity, conversion, and smooth interaction across devices.</p>
          </article>
          <article className="impact-card">
            <p className="impact-label">Data Strength</p>
            <h3>Structured DB Workflows</h3>
            <p>Efficient schema planning, normalization, and query-friendly data organization.</p>
          </article>
        </section>

        <section>
          <div className="my_services">
            <h1>
              <span className="highlight">Services</span>
            </h1>
          </div>
          <div>
            <hr />
          </div>

          <p className="pclass">Here are the services I provide.</p>

          <div className="services">
            <div className="service-item">
              <h1>Web Design</h1>
              <p>
                I create visually appealing and fully responsive websites that adapt seamlessly to all devices. My
                focus is on fast loading times, and accessibility for all users.
              </p>
            </div>

            <div className="service-item">
              <h1>UI/UX Design</h1>
              <p>
                I design intuitive user interfaces that improve usability and engagement. I ensure each layout is
                user-friendly and accessible across platforms.
              </p>
            </div>

            <div className="service-item">
              <h1>
                Database
                <br />
                Management
              </h1>
              <p>
                I manage structured data with efficiency, security, and scalability in mind. My experience covers SQL,
                backups, and performance optimization.
              </p>
            </div>

            <div className="service-item">
              <h1>MERN Stack</h1>
              <p>
                I build full-stack web apps using MongoDB, Express.js, React, and Node.js with clean API
                architecture. End-to-end workflows include authentication, CRUD operations, and responsive UI delivery.
              </p>
            </div>
          </div>
        </section>

        <section id="featured-work">
          <div className="my_services">
            <h1>
              <span className="highlight2">My Recent Works</span>
            </h1>
          </div>

          <hr />
          <div className="buttons-container">
            <Link to="/oracle-db" className="works-button">
              DB
            </Link>
            <Link to="/ui-ux" className="works-button">
              UI/UX
            </Link>
            <Link to="/web-design" className="works-button">
              WEB
            </Link>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <img className="image_work" src="/assets/images/work-ui-ux.png" alt="UI and UX Design" />
              <div className="project-meta">
                <h3>UI/UX Portfolio Design</h3>
                <p>High-fidelity screens focused on user flow and visual hierarchy.</p>
              </div>
            </article>
            <article className="project-card">
              <img className="image_work" src="/assets/images/work-database.png" alt="Database Design" />
              <div className="project-meta">
                <h3>Database Architecture</h3>
                <p>Normalized relational models optimized for clean data operations.</p>
              </div>
            </article>
            <article className="project-card">
              <img className="image_work" src="/assets/images/work-web-design.png" alt="Web Design" />
              <div className="project-meta">
                <h3>Responsive Web Design</h3>
                <p>Modern layouts with mobile-first consistency and performance focus.</p>
              </div>
            </article>
            <article className="project-card">
              <img className="image_work" src="/assets/images/work-java.png" alt="Java" />
              <div className="project-meta">
                <h3>Java Application Work</h3>
                <p>Backend-driven modules built with object-oriented design principles.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="education-section">
          <div className="education-container">
            <div className="my_services1">
              <h1>
                <span className="highlight_edu">My Education</span>
              </h1>
            </div>

            <hr />
            <div className="education-item">
              <h4>
                2024 - 09 Jan 2024 to 23 Jan 2024
                <br />
                Fundamentals of Full Stack Development
              </h4>
              <p>Excelr Raising Excellence</p>
            </div>
            <div className="education-item">
              <h4>
                2024 - 10 Jan 2024
                <br />
                SQL Basics
              </h4>
              <p>HackerRank</p>
            </div>
            <div className="education-item">
              <h4>
                2024 - 06 Nov 2024
                <br />
                Crafting Engaging Interfaces: Hands-on Training in UI/UX
              </h4>
              <p>NSCET</p>
            </div>
            <div className="education-item">
              <h4>
                2025 - April
                <br />
                Oracle Course Completion
              </h4>
              <p>Oracle SQL</p>
            </div>
          </div>
        </section>

        <section className="skills-container">
          <hr />
          <div className="my_services1">
            <h1>
              <span className="highlight_edu">My Skills</span>
            </h1>

            <p className="skills-description">The programming languages and technologies I work with are listed below.</p>
            <div className="skill-icons">
              <div>
                <img src="/assets/images/skill-figma.png" alt="Figma" />
                <p>Figma</p>
              </div>
              <div>
                <img src="/assets/images/skill-html.png" alt="HTML" />
                <p>HTML</p>
              </div>
              <div>
                <img src="/assets/images/skill-css.png" alt="CSS" />
                <p>CSS</p>
              </div>
              <div>
                <img src="/assets/images/skill-javascript.png" alt="Java Script" />
                  <p>JavaScript</p>
              </div>
              <div>
                <img src="/assets/images/skill-oracle-db.png" alt="Oracle DB" />
                <p>Oracle DB</p>
              </div>
              <div>
                <img src="/assets/images/skill-java.png" alt="Java" />
                <p>Java</p>
              </div>
              <div>
                <img src="/assets/images/skill-python.png" alt="Python" />
                <p>Python</p>
              </div>
              <div>
                <img src="/assets/images/skill-react.svg" alt="React" />
                <p>React</p>
              </div>
              <div>
                <img src="/assets/images/skill-mongodb.svg" alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div>
                <img src="/assets/images/skill-nodejs.svg" alt="Node.js" />
                <p>Node.js</p>
              </div>
              <div>
                <img src="/assets/images/skill-expressjs.svg" alt="Express.js" />
                <p>Express.js</p>
              </div>
              <div>
                <img src="/assets/images/skill-tailwindcss.svg" alt="Tailwind CSS" />
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contactbox-section">
          <div className="contactbox-flex">
            <h1 className="contactbox-heading">
              <span className="highlight2">Let&apos;s work together!</span>
            </h1>

            <div className="contactbox-form">
              <form action="https://api.web3forms.com/submit" method="POST" id="contact-form-2" autoComplete="off">
                <input type="hidden" name="access_key" value="50f4541c-0f6d-4fdd-b049-70b060231746" />

                <div className="contactbox-grid">
                  <div className="field-half">
                    <input type="text" name="first_name" placeholder="First Name" required autoComplete="off" />
                  </div>
                  <div className="field-half">
                    <input type="text" name="last_name" placeholder="Last Name" required autoComplete="off" />
                  </div>
                  <div className="field-half">
                    <input type="tel" name="phone" placeholder="Phone Number" required autoComplete="off" />
                  </div>
                  <div className="field-half">
                    <input type="email" name="_replyto" placeholder="Your Email" required autoComplete="off" />
                  </div>
                  <div className="field-full">
                    <input
                      type="text"
                      name="work_type"
                      placeholder="Your Required Work Type"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="field-full">
                    <textarea name="message" placeholder="Message" required autoComplete="off" />
                  </div>
                  <div className="field-full center-btn">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="contactbox-info">
              <div className="contactbox-row">
                <span className="contactbox-icon-circle">
                  <img src="/assets/images/icon-phone.png" alt="Phone Icon" className="contactbox-icon-img" />
                </span>
                <div className="contactbox-text">
                  <strong>Phone:</strong>
                  <br />
                  +91 9342189139
                </div>
              </div>

              <div className="contactbox-row">
                <span className="contactbox-icon-circle">
                  <img src="/assets/images/icon-email.png" alt="Email Icon" className="contactbox-icon-img" />
                </span>
                <div className="contactbox-text">
                  <strong>Email:</strong>
                  <br />
                  mathannscet2022@gmail.com
                </div>
              </div>

              <div className="contactbox-row">
                <span className="contactbox-icon-circle">
                  <img src="/assets/images/icon-location.png" alt="Location Icon" className="contactbox-icon-img" />
                </span>
                <div className="contactbox-text">
                  <strong>Address:</strong>
                  <br />
                  Water Tank Street,
                  <br />
                  Uthamapalayam,
                  <br />
                  Theni.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <section>
            <div className="final-container">
              <p>Thank you for visiting my portfolio.</p>
            </div>
          </section>
        </footer>
      </main>
    </>
  );
}

export default HomePage;
