import React from "react";
import Container from "react-bootstrap/Container";

const GetInTouch = ({ heading, message, email, phone }) => {
  return (
    <div className="text-center">
      <h2 className="section-heading mb-3">
        {heading.split(" ").slice(0, 2).join(" ")}{" "}
        <span className="accent">{heading.split(" ").slice(2).join(" ")}</span>
      </h2>
      <p
        style={{
          color: "#9ca3af",
          fontSize: "1.05rem",
          maxWidth: "600px",
          margin: "0 auto 2rem",
          lineHeight: 1.7,
        }}
      >
        {message}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a className="btn-accent" href={`mailto:${email}`}>
          <i className="fas fa-envelope"></i>
          {email}
        </a>
        {phone && (
          <a className="btn-outline-accent" href={`tel:${phone}`}>
            <i className="fas fa-phone"></i>
            {phone}
          </a>
        )}
      </div>
    </div>
  );
};

export default GetInTouch;
