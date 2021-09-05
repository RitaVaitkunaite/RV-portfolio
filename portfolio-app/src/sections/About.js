import React from "react";
import { render } from "react-dom";
import "./About.css";
import "./../components/MainPage.css";
import LinkedIn from "./linkedin.png";

import Me from "./Ellipse28.png";
import Navbar from "../components/NavBar";
import Background from "./background.jpeg";
import Mail from "./mail.png";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="greetings-section">
        <h2 className="greetings-title">Welcome!</h2>
        <div className="name">
          <h2>I'm</h2>
          <h2 className="highlighted-name">Rita</h2>
        </div>
      </div>
      <div className="text-section">
        <p>
          I am an aspiring UX/UI designer who’s passionate about making
          meaningful impacts on the lives of others. Innovative technologies and
          smart decisions - that's what I believe is needed to make life easier
          and simpler for all of us.
        </p>
      </div>
      {/* <div className="main-section">
        <div className="main-section-paragraph">
          <h1 className="main-section-title">Hi, my name is Rita</h1>
          <h3 className="main-section-body">
            I am currently a Information System student<br></br> but I aspire to
            become a UX/UI designer.
          </h3>
          <h3 className="main-section-body">
            To contact me, you can use these links:
          </h3>
          <div className="main-section-icons">
            <a href="mailto:ritavaitkunaite@gmail.com" target="_blank">
              <img id="gmail-icon" src={Mail}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/rita-vaitk%C5%ABnait%C4%97-62b0981b6/"
              target="_blank"
            >
              <img src={LinkedIn}></img>
            </a>
          </div>
        </div>
        <div className="main-section-image">
          <img className="main-image" src={Me}></img>
        </div>
      </div> */}
    </div>
  );
};

export default About;
