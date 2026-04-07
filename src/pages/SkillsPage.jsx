import { Link } from "react-router-dom";
import "../styles/shared.css";

function SkillsPage() {
  return (
    <section className="education-section">
      <div className="education-container">
        <h1>
          <span className="highlight">My Skills</span>
        </h1>

        <div className="page-hero">
          <span className="page-kicker">Capabilities</span>
          <p className="page-subtitle">
            Practical skill stack covering front-end implementation, UI/UX design systems, database work, and software
            fundamentals for delivery-ready projects.
          </p>
          <p>
            <Link to="/" className="outline-button">
              Back to Home
            </Link>
          </p>
        </div>

        <hr />
        <div className="services">
          <div className="service-item">
            <h2>Web Design</h2>
            <p>
              HyperText Markup Language (HTML),
              <br />
              Cascading Style Sheets (CSS), and
              <br />
              JavaScript.
            </p>
          </div>

          <div className="service-item">
            <h2>UI/UX Design</h2>
            <p>I use Figma to create clear, intuitive, and user-focused interface designs.</p>
          </div>

          <div className="service-item">
            <h2>
              Database
              <br />
              Management
            </h2>
            <p>
              Oracle Database helps store and retrieve data
              <br />
              efficiently using SQL queries.
            </p>
          </div>

          <div className="service-item">
            <h2>Java</h2>
            <p>Strong understanding of object-oriented programming concepts and Java fundamentals.</p>
          </div>

          <div className="service-item">
            <h2>Python</h2>
            <p>Good knowledge of problem-solving techniques and Python programming fundamentals.</p>
          </div>
          <div className="service-item">
            <h2>MERN Stack</h2>
            <p>
              React for frontend, Node.js + Express.js for backend API development, and MongoDB for scalable NoSQL
              database management.
            </p>
          </div>
          <div className="service-item">
            <h2>Tailwind CSS</h2>
            <p>I can build modern, responsive UI layouts quickly using utility-first Tailwind CSS workflows.</p>
          </div>
          <hr />
        </div>

        <div id="internships" className="services anchor-block">
          <h1>
            <span className="highlight">Internships</span>
          </h1>

          <div className="service-item">
            <h2>
              Building Model Web Application
              <br />
              Laravel
            </h2>
            <p>TM Innovations - From 28 Feb 2025 To 10 Feb 2025</p>
          </div>
          <div className="service-item">
            <h2>Web Development Intern</h2>
            <p>Astroweb Solutions - From 25 Jun 2025 To 25 Jul 2025</p>
          </div>
          <div className="service-item">
            <h2>Web Development Intern</h2>
            <p>Vaultofcodes - From 01 Jul 2025 To 30 Jul 2025</p>
          </div>
          <div className="service-item">
            <h2>Learnlike - Internship</h2>
            <p>
              Learnlike - 12 days. Contributed to various tasks, enhancing problem-solving abilities and hands-on
              experience.
            </p>
          </div>
        </div>

        <hr />
        <div id="project-posts" className="services anchor-block">
          <h1>
            <span className="highlight">Projects</span>
          </h1>
          <p className="skills-description">Click a project button to jump directly to that project section.</p>
          <div className="project-nav">
            <a href="#project-lms-portal" className="jump-button">
              LMS Portal
            </a>
            <a href="#project-motion" className="jump-button">
              Motion Capturing
            </a>
            <a href="#project-portfolio" className="jump-button">
              Portfolio Website
            </a>
            <a href="#project-typing" className="jump-button">
              Typing Speed Tester
            </a>
            <a href="#project-translator" className="jump-button">
              Audio & Video Translator
            </a>
          </div>

          <article id="project-lms-portal" className="service-item project-post">
            <h2>LMS Portal</h2>
            <div>
              <p className="tech-stack">MERN Stack (MongoDB, Express.js, React, Node.js)</p>
              <p>
                A full-stack CRUD web app to manage students, courses, and enrollments with authentication,
                reusable course cards, and smooth client-side routing.
              </p>
            </div>
          </article>

          <article id="project-motion" className="service-item project-post">
            <h2>Motion Capturing and Analysis System</h2>
            <div>
              <p className="tech-stack">Python, OpenCV</p>
              <p>
                Built a system to track and analyze human movements for motion-based analysis using Python.
                Implemented frame extraction, object tracking, and basic analytics.
              </p>
            </div>
          </article>

          <article id="project-portfolio" className="service-item project-post">
            <h2>Portfolio Website (Personal Project)</h2>
            <div>
              <p className="tech-stack">HTML, CSS</p>
              <p>
                Designed and deployed a personal portfolio website showcasing projects, skills, and achievements with
                a clean HTML and CSS structure.
              </p>
            </div>
          </article>

          <article id="project-typing" className="service-item project-post">
            <h2>Typing Speed Tester</h2>
            <div>
              <p className="tech-stack">HTML, CSS, JavaScript</p>
              <p>
                Built a responsive web application to calculate typing speed (WPM) and accuracy in real time.
                Implemented timer-based tracking with an interactive and user-friendly interface.
              </p>
            </div>
          </article>

          <article id="project-translator" className="service-item project-post">
            <h2>Audio and Video Translator</h2>
            <div>
              <p className="tech-stack">HTML, CSS, JavaScript, Python/Flask, Node.js</p>
              <p>
                Built a responsive web application that transcribes, translates, and plays back audio and video in
                real time. Implemented speech-to-text, language detection, translation, and text-to-speech pipeline
                with an interactive player and subtitle overlays.
              </p>
            </div>
          </article>
        </div>

        <hr />
        <div id="certified-courses" className="services anchor-block">
          <h1>
            <span className="highlight">Certified Courses</span>
          </h1>
        </div>

        <div className="service-item">
          <h2>Machine Learning</h2>
          <p>LinkedIn Learning - 29 May 2023</p>
        </div>
        <div className="service-item">
          <h2>Basics of Python</h2>
          <p>Infosys Springboard - 29 Aug 2023</p>
        </div>
        <div className="service-item">
          <h2>HTML Essential Training</h2>
          <p>LinkedIn Learning - 04 Jan 2024</p>
        </div>
        <div className="service-item">
          <h2>C Programming Basics</h2>
          <p>LinkedIn Learning - 07 Jan 2024</p>
        </div>
        <div className="service-item">
          <h2>CSS (Basic)</h2>
          <p>HackerRank - 24 Mar 2024</p>
        </div>
        <div className="service-item">
          <h2>SQL (Basic)</h2>
          <p>HackerRank - 10 Jun 2024</p>
        </div>
        <div className="service-item">
          <h2>Statistics for Data Science</h2>
          <p>Simplilearn - 14 Jun 2024</p>
        </div>
        <div className="service-item">
          <h2>C++ Bootcamp</h2>
          <p>Let&apos;s Upgrade - From 18 Jun 2024 to 22 Jun 2024</p>
        </div>
        <div className="service-item">
          <h2>Machine Learning Using Python Bootcamp</h2>
          <p>Let&apos;s Upgrade - From 22 Jul 2024 to 26 Jul 2024</p>
        </div>
        <div className="service-item">
          <h2>Data Analytics Using Power BI Bootcamp</h2>
          <p>Let&apos;s Upgrade - From 29 Jul 2024 to 2 Aug 2024</p>
        </div>
        <div className="service-item">
          <h2>Building Youtube Clone API Bootcamp</h2>
          <p>Let&apos;s Upgrade - From 10 Aug 2024 to 11 Aug 2024</p>
        </div>
        <div className="service-item">
          <h2>Python (Basic)</h2>
          <p>HackerRank - 22 Oct 2024</p>
        </div>
        <div className="service-item">
          <h2>Problem Solving (Basic)</h2>
          <p>HackerRank - 22 Oct 2024</p>
        </div>
        <div className="service-item">
          <h2>Basics of UI/UX</h2>
          <p>Simplilearn - 29 May 2025</p>
        </div>
        <div className="service-item">
          <h2>Python Essential Training</h2>
          <p>LinkedIn Learning - 16 Jun 2025</p>
        </div>
        <div className="service-item">
          <h2>Introduction to MERN Stack</h2>
          <p>Simplilearn - 16 Jun 2025</p>
        </div>
        <div className="service-item">
          <h2>CSS Essential Training (2023)</h2>
          <p>LinkedIn Learning - 20 Feb 2026</p>
        </div>
        <div className="service-item">
          <h2>Java Object-Oriented Programming</h2>
          <p>LinkedIn Learning - 20 Feb 2026</p>
        </div>
        <div className="service-item">
          <h2>Learning PHP</h2>
          <p>LinkedIn Learning - 20 Feb 2026</p>
        </div>
        <div className="service-item">
          <h2>PHP with MySQL Essential Training: 1 - The Basics</h2>
          <p>LinkedIn Learning - 20 Feb 2026</p>
        </div>
        <div className="service-item">
          <h2>React Essential Training</h2>
          <p>LinkedIn Learning - 11 Mar 2026</p>
        </div>

        <hr />
        <div className="services">
          <h1>
            <span className="highlight">Training Programs</span>
          </h1>
        </div>
        <div className="service-item">
          <h2>
            Fundamentals of
            <br />
            Full Stack Development
          </h2>
          <p>Excelr Raising Excellence - From 9 Jan 2024 To 23 Jan 2024</p>
        </div>

        <hr />
        <div id="competitions" className="services anchor-block">
          <h1>
            <span className="highlight">Competitions</span>
          </h1>
          <div className="service-item">
            <h2>Kalam Young Achiever Award 2025(Participant)</h2>
            <p>
              Participated in the Kalam Young Achiever Award 2025 (Waste Wise Category), showcasing innovative ideas
              on sustainable waste management.
            </p>
          </div>
          <div className="service-item">
            <h2>NSCET Hackathon</h2>
            <p>
              Took part in the NSCET Hackathon and contributed to developing an Audio and Video Translator, focusing
              on real-time language conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
