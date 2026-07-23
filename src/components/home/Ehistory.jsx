import React from "react";
import Container from "react-bootstrap/Container";

const Ehistory = ({ heading, specfic }) => {
  return (
    <div id="history" className="section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-heading">
            Employment <span className="accent">History</span>
          </h2>
          <p className="section-subheading mx-auto">
            A timeline of my professional journey over the past 10+ years.
          </p>
        </div>

        <div className="timeline" style={{ maxWidth: "800px", margin: "0 auto" }}>
          {specfic.map((history, index) => (
            <div className="timeline-item" key={index}>
              <span className="timeline-date">
                {history.startDate} — {history.endDate}
              </span>
              <div className="glass-card">
                <h4
                  style={{
                    color: "#f0f0f5",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    fontSize: "1.15rem",
                  }}
                >
                  {history.position}
                </h4>
                <p
                  style={{
                    color: "#818cf8",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {history.companyName} — {history.address}
                </p>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {history.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {history.whatIDo.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        color: "#d1d5db",
                        fontSize: "0.88rem",
                        paddingLeft: "1.25rem",
                        position: "relative",
                        marginBottom: "0.4rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#818cf8",
                        }}
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {history.mostWork.length > 0 && (
                  <div style={{ marginTop: "1rem" }}>
                    <p
                      style={{
                        color: "#f0f0f5",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Key Projects:
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {history.mostWork.map((item, i) => (
                        <span className="skill-chip" key={i}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Ehistory;