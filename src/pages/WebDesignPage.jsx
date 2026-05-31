import { Link } from "react-router-dom";
import "../styles/shared.css";

function WebDesignPage() {
  return (
    <main>
      <section className="education-section">
        <div className="education-container1">
          <h1>
            <span className="highlight">Web Design Works</span>
          </h1>

          <div className="page-hero">
            <span className="page-kicker">Frontend Craft</span>
            <p className="page-subtitle">
              Visual and responsive web design work focused on clean structure, readability, and modern interface
              standards.
            </p>
            <p>
              <Link to="/" className="outline-button">
                Back to Home
              </Link>
            </p>
          </div>

          <hr />
          <div className="image-row">
            <img className="image_work" src="/assets/images/web-design-html-certificate.png" alt="Database Design" />
            <div className="desc">
              HTML
              <br />
              Strong working knowledge of HTML fundamentals.
            </div>
          </div>
          <div className="image-row">
            <img className="image_work" src="/assets/images/web-design-css-certificate.png" alt="course completion" />
            <div className="desc">
              CSS
              <br />
              Solid understanding of core CSS styling concepts.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebDesignPage;
