import React from "react";
import Container from "react-bootstrap/Container";

const ContentImage = ({ heading, specfic }) => (
  <div id="mywork" className="section section-alt">
    <Container>
      <div className="text-center mb-5">
        <h2 className="section-heading">
          Some of my <span className="accent">Work</span>
        </h2>
        <p className="section-subheading mx-auto">
          A selection of projects and applications I've worked on.
        </p>
      </div>

      <div className="row g-4">
        {specfic.map((content, index) => (
          <div className="col-lg-3 col-md-4 col-6" key={index}>
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="project-card">
                <div className="project-card-image">
                  <img src={content.image} alt={content.name} />
                </div>
                <div className="project-card-overlay">
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    View Project →
                  </span>
                </div>
                <div className="project-card-body">
                  <h6
                    style={{
                      color: "#f0f0f5",
                      fontWeight: 600,
                      marginBottom: 0,
                      fontSize: "0.9rem",
                    }}
                  >
                    {content.name}
                  </h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default ContentImage;