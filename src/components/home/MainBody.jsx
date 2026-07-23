import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, about }, ref) => {
    return (
      <div id="home" className="hero-section">
        {/* Animated gradient orbs */}
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Left column — text content */}
            <div className="col-lg-7">
              <p
                style={{
                  color: "#818cf8",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  animation: "fade-in 0.8s ease forwards",
                }}
              >
                Hello, I'm
              </p>
              <h1
                ref={ref}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "#f0f0f5",
                  marginBottom: "0.75rem",
                  animation: "slide-up 0.8s ease forwards",
                }}
              >
                {title}
                <span style={{ color: "#818cf8" }}>.</span>
              </h1>

              <div style={{ animation: "slide-up 0.8s 0.15s ease both" }}>
                <Typist>
                  <p
                    style={{
                      fontSize: "1.15rem",
                      color: "#818cf8",
                      fontWeight: 500,
                      marginBottom: "1.25rem",
                      minHeight: "1.75rem",
                    }}
                  >
                    {message}
                  </p>
                </Typist>
              </div>

              {/* About bio */}
              {about && (
                <div style={{ animation: "slide-up 0.8s 0.3s ease both" }}>
                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      marginBottom: "2rem",
                      maxWidth: "560px",
                    }}
                  >
                    {about.message}
                  </p>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                  animation: "slide-up 0.8s 0.4s ease both",
                }}
              >
                {about?.resume && (
                  <a
                    className="btn-accent"
                    href={about.resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                  >
                    <i className="fas fa-file-alt" style={{ fontSize: "0.85rem" }}></i>
                    View Resume
                  </a>
                )}
                <a className="btn-outline-accent" href="#contact" role="button">
                  Get In Touch
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginTop: "2.5rem",
                  animation: "slide-up 0.8s 0.55s ease both",
                }}
              >
                {icons.map((icon, index) => (
                  <a
                    key={`social-icon-${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    aria-label={`My ${icon.image.split("-")[1]}`}
                    className="social-icon"
                  >
                    <i className={`fab ${icon.image}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right column — profile photo */}
            {about?.imageLink && (
              <div
                className="col-lg-5 d-none d-lg-flex justify-content-center"
                style={{ animation: "fade-in 1s 0.4s ease both" }}
              >
                <div style={{ position: "relative", display: "inline-block" }}>
                  {/* Glow ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-12px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.25))",
                      filter: "blur(25px)",
                      animation: "pulse-glow 4s ease-in-out infinite",
                    }}
                  ></div>
                  <img
                    src={about.imageLink}
                    alt="Stephen Anino"
                    style={{
                      width: about.imageSize || 340,
                      height: about.imageSize || 340,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid rgba(99,102,241,0.3)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }
);

export default MainBody;
