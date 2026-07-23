import React from "react";
import Container from "react-bootstrap/Container";

const Education = ({ heading, data }) => {
  return (
    <div id="education" className="section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-heading">
            <span className="accent">{heading}</span>
          </h2>
        </div>

        <div className="row justify-content-center">
          {data.map((edu, index) => (
            <div className="col-lg-6" key={index}>
              <div className="glass-card text-center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "rgba(99,102,241,0.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <i
                    className="fas fa-graduation-cap"
                    style={{ fontSize: "1.5rem", color: "#818cf8" }}
                  ></i>
                </div>
                <h4
                  style={{
                    color: "#f0f0f5",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {edu.degree}
                </h4>
                <p
                  style={{
                    color: "#818cf8",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.85rem",
                    margin: 0,
                  }}
                >
                  {edu.year} · {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Education;
