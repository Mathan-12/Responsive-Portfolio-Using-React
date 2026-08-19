import { Link } from "react-router-dom";
import "../styles/shared.css";

function AboutPage() {
  return (
    <main>
      <section className="education-section">
        <div className="education-container">
          <h1>
            <span className="highlight">About Me</span>
          </h1>

          <div className="page-hero">
            <span className="page-kicker">Profile</span>
            <p className="page-subtitle">
              Software development, full-stack engineering, and GitHub portfolio work with a strong eye for
              accessibility, clarity, and scalable implementation.
            </p>
            <p>
              <Link to="/" className="outline-button">
                Back to Home
              </Link>
            </p>
          </div>

          <hr />
          <div className="description">
            <h2 className="highlight1">Professional Summary</h2>
            <p>
              A passionate and reliable <strong>Computer Science and Engineering Graduate</strong> with
              solid experience in <strong>Software Development</strong>, <strong>MERN Stack Development</strong>,
              <strong> Full Stack Development</strong>, and <strong>GitHub profile project work</strong> alongside
              <strong> UI/UX design principles</strong>. Skilled in developing responsive web applications, building
              scalable backend systems, and creating user-friendly interfaces. A fast learner with strong
              problem-solving abilities and meticulous attention to detail.
            </p>

            <h2 className="highlight1">Education</h2>
            <ul>
              <li>
                <strong>Bachelor of Engineering (B.E.) in Computer Science and Engineering</strong>
                <br />
                Nadar Saraswathi College of Engineering and Technology, Theni
                <br />
                <strong>CGPA:</strong> 8.1 (Up to 7th Semester)
              </li>
              <li>
                <strong>Higher Secondary (12th Standard):</strong> 75%
              </li>
              <li>
                <strong>Secondary School (10th Standard):</strong> 70%
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
