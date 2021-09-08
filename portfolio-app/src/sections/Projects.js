import React from "react";
import { Link } from "react-router-dom";
import Card001 from "./../sections/Card001.png";
import Card002 from "./../sections/Card002.png";
import Card003 from "./../sections/Card003.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects">
        <h2 style={{ paddingTop: 50 }}>My Projects</h2>
      </div>
      <div class="container">
        <img src={Card003}></img>
        <div class="container__text">
          <h2>Drauge</h2>
          <p style={{ fontSize: 27 }}>
            Simplified volunteering, which allows it’s users to create or join
            various volunteerings events, based on what individualistic values
            they want to improve or learn.
          </p>
          <Link to="/projects/drauge">
            <button className="btn-case">View Case Study</button>
          </Link>
        </div>
      </div>
      <div class="container-left">
        <div class="container__text-left">
          <h2>Notes Application</h2>
          <p>The magic of how application design can be translated to code.</p>
          <Link to="/projects/notesApp">
            <button className="btn-case" style={{ marginTop: 50 }}>
              View Case Study
            </button>
          </Link>
        </div>
        <img src={Card002}></img>
      </div>
      <div class="container" style={{ paddingBottom: 40 }}>
        <img src={Card001}></img>
        <div class="container__text">
          <h2>Programavimo žinynas</h2>
          <p>
            An application that helps people to learn and improve their
            knowledge of programming languages.
          </p>
          <Link to="/projects/programavimoZinynas">
            <button className="btn-case">View Case Study</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
