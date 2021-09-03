import React from "react";
import { render } from "react-dom";
import notesApp from "./img11.png";
import ProgramavimoZ from "./img13.png";
import { Link } from "react-router-dom";
import ds from "./../sections/Group58.png";
const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div>My Projects</div>
      <div>
        <div>
          <h2>Programavimo Žinynas</h2>
          <p>App that helps people program better</p>
          <img className="image-header" src={ds}></img>
        </div>
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
