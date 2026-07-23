import React from "react";
import Container from "react-bootstrap/Container";

const Skills = ({ heading, categories }) => {
  return (
    <div id="skills" className="section section-alt">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-heading">
            Technical <span className="accent">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="row g-4">
          {categories &&
            categories.map((category, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className="glass-card h-100"
                  style={{ padding: "1.75rem" }}
                >
                  <h5
                    style={{
                      color: "#818cf8",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {category.name}
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {category.items.map((skill, i) => (
                      <span className="skill-chip" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
