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
            <h2>Web Development</h2>
            <p>
              Building responsive and modern web experiences using clean front-end architecture, smooth user flows,
              and reliable application structure.
            </p>
          </div>

          <div className="service-item">
            <h2>UI/UX Design</h2>
            <p>I use Figma to create clear, intuitive, and user-focused interface designs.</p>
          </div>

          <div className="service-item">
            <h2>Full Stack Development</h2>
            <p>
              I build complete web applications from user-facing interfaces to backend logic, ensuring smooth
              functionality and scalable architecture.
            </p>
          </div>

          <div className="service-item">
            <h2>MERN Stack</h2>
            <p>
              React for frontend, Node.js + Express.js for backend API development, and MongoDB for scalable NoSQL
              database management.
            </p>
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
          <hr />
        </div>

        <div id="internships" className="services anchor-block">
          <h1>
            <span className="highlight">Internships</span>
          </h1>

          <div className="service-item">
            <h2>MERN Stack Development</h2>
            <p>
              <strong>Hazzino Technologies Private Limited</strong> | <strong>11.03.2026 to 11.04.2026</strong>
            </p>
            <p>Internship certificate for MERN Stack Development.</p>
            <p>Role: Worked on project tasks using MongoDB, Express.js, React, and Node.js with strong learning and delivery focus.</p>
          </div>

          <div className="service-item">
            <h2>Web Development Intern</h2>
            <p>
              <strong>Learnlike</strong> | <strong>09.02.2026 to 20.02.2026</strong>
            </p>
            <p>Professional internship completion certificate.</p>
            <p>Role: Contributed to development tasks and gained practical exposure to real-world web project work.</p>
          </div>

          <div className="service-item">
            <h2>Web Development</h2>
            <p>
              <strong>Astroweb Solutions</strong> | <strong>25.06.2025 to 25.07.2025</strong>
            </p>
            <p>Certificate of Completion - Web Developer in PHP &amp; MySQL Internship.</p>
            <p>Role: Worked on dynamic web development projects using PHP and MySQL with a focus on database-driven solutions.</p>
          </div>

          <div className="service-item">
            <h2>Web Development Intern</h2>
            <p>
              <strong>VaultofCodes</strong> | <strong>01.07.2025 to 01.08.2025</strong>
            </p>
            <p>Certificate of internship completion for Web Development.</p>
            <p>Role: Built responsive web solutions and gained hands-on experience in web development processes.</p>
          </div>

          <div className="service-item">
            <h2>PHP &amp; MySQL Internship</h2>
            <p>
              <strong>ApexPlanet Software Pvt. Ltd.</strong> | <strong>21.06.2025 to 05.08.2025</strong>
            </p>
            <p>Virtual internship certificate for Web Developer in PHP &amp; MySQL.</p>
            <p>Role: Completed a virtual internship on PHP, MySQL, and end-to-end web development fundamentals.</p>
          </div>

          <div className="service-item">
            <h2>Web Application Development</h2>
            <p>
              <strong>TM Innovations</strong> | <strong>28.02.2025 to 10.02.2025</strong>
            </p>
            <p>Building Model Web Application - Laravel.</p>
            <p>Role: Worked on a model web application using Laravel, gaining hands-on experience in structured web application development.</p>
          </div>

          <div className="service-item">
            <h2>Full Stack Development</h2>
            <p>
              <strong>Excelr</strong> | <strong>09.01.2024 to 23.01.2024</strong>
            </p>
            <p>Certificate of Participation - Fundamentals of Full Stack Development.</p>
            <p>Role: Participated in a live training program covering frontend, backend, and full stack development basics.</p>
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
            <a href="#project-erp-finance" className="jump-button">
              ERP Finance & Audit
            </a>
          </div>

          <article id="project-erp-finance" className="service-item project-post">
            <h2>AI-Powered ERP Financial Management &amp; Audit Platform</h2>
            <div>
              <p className="tech-stack">React.js, Node.js, Express.js, PostgreSQL, AI, Blockchain</p>
              <p>
                Built a full-stack ERP accounting platform that automates financial transactions, invoicing, expense
                tracking, budgeting, approvals, and reporting. Integrated AI-driven analytics and anomaly detection
                to identify unusual transaction patterns and generate actionable insights, alongside a
                blockchain-backed audit trail for tamper-resistant history and improved auditor transparency.
                Implemented role-based access control, RESTful APIs, interactive financial dashboards, and secure
                workflows for Admin, Accountant, Finance Manager, and Auditor roles, following the SDLC from
                requirements analysis through deployment and maintenance.
              </p>
            </div>
          </article>

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
              <p className="tech-stack">Python, OpenCV, Speech Processing, AI</p>
              <p>
                Took part in the NSCET Hackathon and built an Audio and Video Translator focused on real-time
                language conversion and multimedia accessibility. The system supports translating spoken content and
                matching it with synchronized video output for better understanding.
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
        </div>

        <hr />
        <div id="certified-courses" className="services anchor-block">
          <h1>
            <span className="highlight">Certified Courses</span>
          </h1>
        </div>

        <div className="service-item course-platform">
          <h2 className="course-platform-name">Infosys Springboard</h2>
          <div className="course-list">
            <div className="course-row">
              <span>Basics of Python</span>
              <span>August 29, 2023</span>
            </div>
            <div className="course-row">
              <span>What is Machine Learning?</span>
              <span>March 1, 2024</span>
            </div>
          </div>
        </div>

        <div className="service-item course-platform">
          <h2 className="course-platform-name">Let&apos;s Upgrade</h2>
          <div className="course-list">
            <div className="course-row">
              <span>C++ Bootcamp</span>
              <span>June 18, 2024 to June 22, 2024</span>
            </div>
            <div className="course-row">
              <span>Machine Learning Using Python Bootcamp</span>
              <span>July 22, 2024 to July 26, 2024</span>
            </div>
            <div className="course-row">
              <span>Data Analytics Using Power BI Bootcamp</span>
              <span>July 29, 2024 to August 2, 2024</span>
            </div>
            <div className="course-row">
              <span>Building YouTube Clone API Bootcamp</span>
              <span>August 10, 2024 to August 11, 2024</span>
            </div>
            <div className="course-row">
              <span>Cyber Security and Ethical Hacking Bootcamp</span>
              <span>August 13, 2024 to August 17, 2024</span>
            </div>
          </div>
        </div>

        <div className="service-item course-platform">
          <h2 className="course-platform-name">Simplilearn</h2>
          <div className="course-list">
            <div className="course-row">
              <span>Statistics for Data Science</span>
              <span>June 14, 2024</span>
            </div>
            <div className="course-row">
              <span>Basics of UI/UX</span>
              <span>May 29, 2025</span>
            </div>
            <div className="course-row">
              <span>Introduction to MERN Stack</span>
              <span>June 16, 2025</span>
            </div>
          </div>
        </div>

        <div className="service-item course-platform">
          <h2 className="course-platform-name">Great Learning</h2>
          <div className="course-list">
            <div className="course-row">
              <span>Basics of Computer Networking</span>
              <span>November 2024</span>
            </div>
          </div>
        </div>

        <div className="service-item course-platform">
          <h2 className="course-platform-name">LinkedIn Learning</h2>
          <div className="course-list">
            <div className="course-row">
              <span>HTML Essential Training (2020)</span>
              <span>Jan 04, 2024</span>
            </div>
            <div className="course-row">
              <span>C Programming Basics: Flow Control, Variables, and Pointers</span>
              <span>Jan 07, 2024</span>
            </div>
            <div className="course-row">
              <span>Python Essential</span>
              <span>Jun 16, 2025</span>
            </div>
            <div className="course-row">
              <span>Introduction to SQLite</span>
              <span>Jul 06, 2025</span>
            </div>
            <div className="course-row">
              <span>Node.js Essential Training</span>
              <span>Jul 22, 2025</span>
            </div>
            <div className="course-row">
              <span>React Essential Training</span>
              <span>Mar 11, 2026</span>
            </div>
            <div className="course-row">
              <span>Learning npm: A Package Manager</span>
              <span>Mar 12, 2026</span>
            </div>
            <div className="course-row">
              <span>React: Authentication</span>
              <span>Mar 12, 2026</span>
            </div>
            <div className="course-row">
              <span>CSS Essential Training (2023)</span>
              <span>Feb 20, 2026</span>
            </div>
            <div className="course-row">
              <span>Java Object-Oriented Programming</span>
              <span>Feb 20, 2026</span>
            </div>
            <div className="course-row">
              <span>Learning PHP</span>
              <span>Feb 20, 2026</span>
            </div>
            <div className="course-row">
              <span>PHP with MySQL Essential Training</span>
              <span>Feb 20, 2026</span>
            </div>
          </div>
        </div>

        <div className="service-item course-platform">
          <h2 className="course-platform-name">HackerRank</h2>
          <div className="course-list">
            <div className="course-row">
              <span>CSS (Basic)</span>
              <span>March 24, 2024</span>
            </div>
            <div className="course-row">
              <span>SQL (Basic)</span>
              <span>June 10, 2024</span>
            </div>
            <div className="course-row">
              <span>Python (Basic)</span>
              <span>October 22, 2024</span>
            </div>
            <div className="course-row">
              <span>Problem Solving (Basic)</span>
              <span>October 22, 2024</span>
            </div>
          </div>
        </div>

        <hr />
        <div className="services">
          <h1>
            <span className="highlight">Training Programs</span>
          </h1>
        </div>

        <div className="service-item">
          <h2>Junior Software Developer – NSDC / NASSCOM</h2>
          <p>
            Completed the Junior Software Developer course offered by the National Association of Software and Service
            Companies (NASSCOM) through the Skill India Digital Hub, under the IT &amp; ITeS sector.
          </p>
          <p>Completed: August 1, 2026</p>
        </div>

        <div className="service-item">
          <h2>Career Guidance Webinar</h2>
          <p>
            Participated in a Career Guidance Webinar conducted in collaboration with E-Cell IIT Hyderabad and Skill
            Dunia Edutech, where industry experts discussed important strategies for improving career opportunities.
          </p>
          <p>Date: October 19, 2025</p>
        </div>

        <div className="service-item">
          <h2>UI/UX Design Webinar</h2>
          <p>Participated in the UI/UX Design Webinar conducted by Dot Upskill Academy.</p>
          <p>Date: July 12, 2025</p>
        </div>

        <div className="service-item">
          <h2>Crafting Engaging Interactive Webs on Turning UI-UX Design</h2>
          <p>
            Participated in a UI/UX Design workshop organized by the Professional Society Cell and IEEE Student Branch
            of NSCET, focusing on creating engaging and interactive web experiences.
          </p>
        </div>

        <hr />
        <div id="competitions" className="services anchor-block">
          <h1>
            <span className="highlight">Competitions and Participations</span>
          </h1>

          <div className="service-item">
            <h2>Darpan: The Business Quiz – Sankalp 9.0</h2>
            <p>
              Participated as part of Team mathannscet2022 in Darpan: The Business Quiz at Sankalp 9.0, organized by
              the National Academy of Agricultural Research Management (NAARM), Hyderabad.
            </p>
          </div>

          <div className="service-item">
            <h2>QuizOff 2026 – India&apos;s Biggest AI Quiz</h2>
            <p>
              Competed in QuizOff 2026: India&apos;s Biggest AI Quiz, organized by CampusCrew and hosted on Unstop,
              alongside students from thousands of institutions worldwide.
            </p>
          </div>

          <div className="service-item">
            <h2>Tata Crucible Campus Quiz 2025</h2>
            <p>
              Participated in the Tata Crucible Campus Quiz 2025, gaining experience in a competitive business and
              knowledge-based quiz environment.
            </p>
          </div>

          <div className="service-item">
            <h2>NSCET Hackathon</h2>
            <p>
              Took part in the NSCET Hackathon and contributed to developing an Audio and Video Translator, focusing
              on real-time language conversion.
            </p>
          </div>

          <div className="service-item">
            <h2>Kalam Young Achiever Award 2025 (Participant)</h2>
            <p>
              Participated in the Kalam Young Achiever Award 2025 – Waste Wise Category, showcasing innovative ideas
              focused on sustainable waste management.
            </p>
          </div>

          <div className="service-item">
            <h2>Free Online Coding Challenge – Coding Round</h2>
            <p>
              Participated as Team mathannscet2022 in the Coding Round of the Free Online Coding Challenge, organized
              by Engiversee on Unstop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
