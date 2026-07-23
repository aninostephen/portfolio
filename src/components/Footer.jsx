import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer className="footer-dark">
      <Container>
        {props.children}
        <div
          className="text-center mt-4 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ fontSize: "0.85rem", margin: 0, color: "#6b7280" }}>
            <i className="fas fa-code" style={{ color: "#818cf8" }} /> with{" "}
            <i className="fas fa-heart" style={{ color: "#ef4444" }} /> by{" "}
            <a
              rel="noopener noreferrer"
              href="https://github.com/aninostephen"
              target="_blank"
              style={{ color: "#818cf8", textDecoration: "none", fontWeight: 500 }}
            >
              Stephen Anino
            </a>{" "}
            using <i className="fab fa-react" style={{ color: "#61dafb" }} />
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
