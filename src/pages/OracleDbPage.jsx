import { Link } from "react-router-dom";
import "../styles/shared.css";

function OracleDbPage() {
  return (
    <main>
      <section className="education-section">
        <div className="education-container1">
          <h1>
            <span className="highlight">Database Works</span>
          </h1>

          <div className="page-hero">
            <span className="page-kicker">Data Engineering</span>
            <p className="page-subtitle">
              End-to-end database design process from ER modeling to normalized schema and production-ready Oracle SQL
              structures.
            </p>
            <p>
              <Link to="/" className="outline-button">
                Back to Home
              </Link>
            </p>
          </div>

          <hr />
          <div className="image-block">
            <div className="image-row">
              <img className="image_work" src="/assets/images/oracle-er-diagram.png" alt="Database Design" />
              <div className="desc">
                ER Diagram for Student Database
                <br />
                Illustrates relationships among entities like Student, Course, and Department.
              </div>
            </div>

            <div className="image-row">
              <img className="image_work" src="/assets/images/oracle-relational-schema.png" alt="Database Design" />
              <div className="desc">
                Relational Schema Design
                <br />
                Converts the ER diagram into relational tables with primary and foreign keys.
              </div>
            </div>

            <div className="image-row">
              <img className="image_work" src="/assets/images/oracle-normalization.png" alt="Database Design" />
              <div className="desc">
                Normalization Process
                <br />
                Applies 1NF, 2NF, and 3NF to remove redundancy and ensure data consistency.
              </div>
            </div>

            <div className="image-row">
              <img className="image_work" src="/assets/images/oracle-final-sql-schema.png" alt="Database Design" />
              <div className="desc">
                Final SQL Schema
                <br />
                Shows fully normalized SQL table structures ready for deployment in Oracle DB.
              </div>
            </div>

            <div className="image-row">
              <img src="/assets/images/oracle-course-completion.png" alt="course completion" />
              <div className="desc">
                Course Completion
                <br />
                Successfully completed Oracle SQL Explorer.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OracleDbPage;
