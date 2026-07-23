import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, about, skills, eHistory, contentImage } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom > ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${
        !isTop ? "navbar-dark-custom" : "navbar-transparent-custom"
      }`}
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#home"}
        style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.02em" }}
      >
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ms-auto">
          {about.show && (
            <Nav.Link
              href={process.env.PUBLIC_URL + "/#aboutme"}
              style={{ color: "#9ca3af" }}
              className="nav-link-custom"
            >
              About
            </Nav.Link>
          )}
          {eHistory.show && (
            <Nav.Link
              href={process.env.PUBLIC_URL + "/#history"}
              style={{ color: "#9ca3af" }}
              className="nav-link-custom"
            >
              Experience
            </Nav.Link>
          )}
          {contentImage.show && (
            <Nav.Link
              href={process.env.PUBLIC_URL + "/#mywork"}
              style={{ color: "#9ca3af" }}
              className="nav-link-custom"
            >
              Work
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              href={process.env.PUBLIC_URL + "/#skills"}
              style={{ color: "#9ca3af" }}
              className="nav-link-custom"
            >
              Skills
            </Nav.Link>
          )}
          <Nav.Link
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "#9ca3af" }}
            className="nav-link-custom"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            href={process.env.PUBLIC_URL + "/#contact"}
            className="btn-accent ms-lg-3 mt-2 mt-lg-0"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
