import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  eHistory,
  skills,
  getInTouch,
  contentImage,
  education,
  references,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Ehistory from "./components/home/Ehistory";
import ContentImage from "./components/home/ContentImage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Education from "./components/home/Education.jsx";
import References from "./components/home/References.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        about={about.show ? about : null}
        ref={ref}
      />
      {eHistory.show && (
        <Ehistory
          heading={eHistory.heading}
          specfic={eHistory.specific}
        />
      )}
      {contentImage.show && (
        <ContentImage
          heading={contentImage.heading}
          specfic={contentImage.specific}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          categories={skills.categories}
        />
      )}
      {education.show && (
        <Education
          heading={education.heading}
          data={education.data}
        />
      )}
      {references.show && (
        <References
          heading={references.heading}
          data={references.data}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        <div id="contact" className="section" style={{ paddingBottom: "2rem" }}>
          {getInTouch.show && (
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
              phone={getInTouch.phone}
            />
          )}
        </div>
      </Footer>
    </BrowserRouter>
  );
};

export default App;
