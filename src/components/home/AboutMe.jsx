import React from "react";
import Container from "react-bootstrap/Container";

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link) {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <div id="aboutme" className="section section-alt">
      <Container>
        <div className="row align-items-center">
          {/* Image Column */}
          {showPic && (
            <div className="col-lg-5 d-none d-lg-flex justify-content-center mb-4 mb-lg-0">
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {/* Glow ring behind image */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-8px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))",
                    filter: "blur(20px)",
                    animation: "pulse-glow 4s ease-in-out infinite",
                  }}
                ></div>
                <img
                  src={profilePicUrl}
                  alt="Stephen Anino"
                  style={{
                    width: imgSize,
                    height: imgSize,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid rgba(99,102,241,0.4)",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          )}

          {/* Text Column */}
          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="section-heading mb-4">
              {heading.split(" ")[0]}{" "}
              <span className="accent">{heading.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              {message}
            </p>
            {resume && (
              <a
                className="btn-accent"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
              >
                <i className="fas fa-file-alt"></i>
                View Resume
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
