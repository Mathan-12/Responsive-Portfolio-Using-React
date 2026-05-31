import { Link } from "react-router-dom";
import "../styles/shared.css";

function UiUxPage() {
  return (
    <main>
      <section className="education-section">
        <div className="education-container1">
          <h1>
            <span className="highlight">UI/UX Design Works</span>
          </h1>

          <div className="page-hero">
            <span className="page-kicker">Interface Design</span>
            <p className="page-subtitle">
              Figma-based interaction design and visual systems focused on user flow, consistency, and clear
              information hierarchy.
            </p>
            <p>
              <Link to="/" className="outline-button">
                Back to Home
              </Link>
            </p>
          </div>

          <hr />
          <div className="image-row">
            <img className="image_work" src="/assets/images/uiux-animation.png" alt="Animation" />
            <div className="desc">
              Figma Animation
              <br />
              Created interaction animations using Figma.
            </div>
          </div>
          <div className="image-row">
            <img className="image_work" src="/assets/images/work-ui-ux.png" alt="Portfolio" />
            <div className="desc">
              Portfolio
              <br />
              Designed a complete portfolio interface in Figma.
            </div>
          </div>
          <div className="image-row">
            <img className="image_work" src="/assets/images/uiux-certificate.jpg" alt="Portfolio" />
            <div className="desc">
              Certification
              <br />
              Successfully completed a UI/UX design course.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UiUxPage;
