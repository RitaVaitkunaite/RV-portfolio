import React from "react";
import { render } from "react-dom";
import "./About.css";
import LinkedIn from "./linkedin.png";
import Gmail from "./mail.png";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-card">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Donec
          vulputate nec ipsum.
        </p>
        <h5>For more information you can contact via:</h5>
        <div className="about-icons">
          <a
            href="https://www.linkedin.com/in/rita-vaitk%C5%ABnait%C4%97-62b0981b6/"
            target="_blank"
          >
            <img src={LinkedIn}></img>
          </a>
          <a href="mailto:ritavaitkunaite@gmail.com" id="gmail-icon">
            <img src={Gmail}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
