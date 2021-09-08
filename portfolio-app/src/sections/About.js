import React from "react";

import "./About.css";
import "./../components/MainPage.css";

import Circles from "./circles.png";
import arrow from "./arrow.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about-section" id="about">
      {/* <div className="container-flex">
        <div className="background-section">
          <h1 className="name-section">Welcome I'm Rita</h1>
          <img src={Main}></img>
        </div>
        <div className="text-container">
          <p className="text-field">
            I am an aspiring UX/UI designer who’s passionate about making
            meaningful impacts on the lives of others. Innovative technologies
            and smart decisions - that's what I believe is needed to make life
            easier and simpler for all of us.
          </p>
        </div>
      </div> */}
      {/* <div className="background">
        <div className="flex">
          <img className="left-circle" src={Circle1}></img>
          <img className="right-circle" src={Circle2}></img>
        </div>
        <h1 style={{ color: "white" }} className="name-section">
          Welcome I'm Rita
        </h1>
      </div>
      <div className="text-container">
        <p className="text-field">
          I am an aspiring UX/UI designer who’s passionate about making
          meaningful impacts on the lives of others. Innovative technologies and
          smart decisions - that's what I believe is needed to make life easier
          and simpler for all of us.
        </p>
      </div> */}

      <div className="greetings-section">
        <div>
          <div className="circles">
            <img src={Circles}></img>
          </div>
          <h2 className="greetings-title">Welcome!</h2>
          <div className="name">
            <h2>I'm</h2>
            <h2 className="highlighted-name">Rita</h2>
          </div>
        </div>
      </div>
      <div className="text-section">
        <p>
          I am an aspiring UX/UI designer who’s passionate about making
          meaningful impacts on the lives of others. Innovative technologies and
          smart decisions - that's what I believe is needed to make life easier
          and simpler for all of us.
        </p>
        <div className="icons">
          <p style={{ marginTop: 30, fontWeight: "bolder" }}>
            View my work below
          </p>
          <div className="icons-arrow">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              style={{
                marginRight: 50,
                fontSize: 16,
                cursor: "pointer",
                fontWeight: "bolder",
              }}
            >
              <img src={arrow}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
