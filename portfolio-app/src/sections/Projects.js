import React from "react";
import { render } from "react-dom";
import notesApp from "./img11.png";
import ProgramavimoZ from "./img13.png";
import { Link } from "react-router-dom";
import ds from "./../sections/Group48.png";
import Notes from "./../sections/Notes.png";
import Volunteer from "./../sections/Volunteer.png";
const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects">
        <h2>My Projects</h2>
      </div>
      <div className="project-container-align">
        <div className="project-container-flex">
          <div className="project-container">
            {/* <p className="tags">UX Design, Internship</p> */}
            <h2 id="link-v">Volunteering application "Drauge"</h2>

            <p className="overflow">
              Simplified volunteering, which allows it’s users to create or join
              various volunteerings events, based on what individualistic values
              they want to improve or learn.
            </p>
            <Link to="/projects/drauge">
              <img className="image-header" src={Volunteer}></img>
            </Link>
          </div>
          <div className="project-container">
            <h2 id="link-n">Notes Application</h2>

            <p>
              The magic of how application design can be translated to code.
            </p>
            <Link to="/projects/notesApp">
              <img className="image-header" src={Notes}></img>
            </Link>
          </div>
        </div>
        <div className="project-container-flex">
          <div className="project-container">
            <h2 id="link-pz">Programavimo Žinynas</h2>

            <p>
              An application that helps people to improve and to learn
              programming languages.
            </p>
            <Link to="/projects/programavimoZinynas">
              <img className="image-header001" src={ds}></img>
            </Link>
          </div>
        </div>
        {/* <div className="project-container">
          <h2>Programavimo Žinynas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit Lorem{" "}
          </p>
          <img className="image-header" src={ds}></img>
        </div>
        <div className="project-container">
          <h2>Programavimo Žinynas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit Lorem{" "}
          </p>
          <img className="image-header" src={ds}></img>
        </div>
        <div className="project-container">
          <h2>Programavimo Žinynas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit Lorem{" "}
          </p>
          <img className="image-header" src={ds}></img>
        </div> */}
      </div>
      {/* <div className="projects-section-wrapper">
        <h2>Projects</h2>
        <div className="image-layout">
          <div className="card">
            <Link to="/projects/notesApp">
              <img src={notesApp}></img>
            </Link>
            <p>Notes application</p>
          </div>
          <div className="card">
            <Link to="/projects/programavimoZinynas">
              <img src={ProgramavimoZ}></img>
            </Link>
            <p className="under-text">Programavimo žinynas</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
