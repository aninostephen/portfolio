import React from "react";
import Container from "react-bootstrap/Container";

const References = ({ heading, data }) => {
  return (
    <div id="references" className="section section-alt">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-heading">
            <span className="accent">{heading}</span>
          </h2>
          <p className="section-subheading mx-auto">
            People who can vouch for my work and character.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {data.map((ref, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="glass-card text-center h-100">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#818cf8",
                  }}
                >
                  {ref.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h5
                  style={{
                    color: "#f0f0f5",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {ref.name}
                </h5>
                <p
                  style={{
                    color: "#818cf8",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: "0.25rem",
                  }}
                >
                  {ref.position}
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.85rem",
                    marginBottom: "1rem",
                  }}
                >
                  {ref.company}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                  }}
                >
                  <a
                    href={`mailto:${ref.email}`}
                    style={{
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    <i
                      className="fas fa-envelope"
                      style={{ marginRight: "0.5rem", color: "#818cf8" }}
                    ></i>
                    {ref.email}
                  </a>
                  <a
                    href={`tel:${ref.phone}`}
                    style={{
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    <i
                      className="fas fa-phone"
                      style={{ marginRight: "0.5rem", color: "#818cf8" }}
                    ></i>
                    {ref.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default References;
