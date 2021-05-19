import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Header from "./Group64.png";
import Persona from "./persona.png";
import OldWireframe1 from "./wireframe_old1.png";
import OldPrototype from "./Group7.png";
import NewWireframe from "./wireframes_new.png";
import NewPrototype from "./new_wireframe.png";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function ProgramavimoZinynas() {
  return (
    <div className="main-container">
      <h2 className="main-title">Programavimo žinynas</h2>
      <div className="img-holder">
        <img className="main-header" src={Header}></img>
      </div>
      <p className="under-text">
        To view the full prototype you can click
        <a
          className="link"
          href="https://www.figma.com/file/2H36JtV2OQiS3YTwWzWVci/Programavimo-zinynas-v.0.0.2?node-id=0%3A1"
          target="_blank"
        >
          here
        </a>
      </p>

      <h3 className="section-title">Introduction</h3>
      <p className="section-body">
        ''Programavimo žinynas" is a mobile application prototype that I created
        during one of my university courses, but after finishing my course I
        decided that the app prototype was still not good enough for me. That is
        why I took it up to revamp the design of this application during my own
        free time.
      </p>
      <h3 className="section-smaller-title">Main requirements</h3>
      <p className="section-body">
        1. The prototype is created for Android mobile users.
      </p>
      <p className="section-body">
        2. The application must be translated to Lithuanian.
      </p>

      <h3 className="section-smaller-title">Methods:</h3>
      <p className="section-body">Surveys, Wireframes, Prototyping.</p>

      <h3 className="section-smaller-title">Tools:</h3>
      <p className="section-body">Figma, Adobe Photoshop</p>

      <h3 className="section-title">Research</h3>
      <h3 className="section-smaller-title">Competitor analysis</h3>
      <p className="section-body">
        To get a better understanding of my main competitors I analysed 3
        programming apps. During my analysis I downloaded all 3 apps and tested
        them using certain criteria:
      </p>
      <ol className="p-formating">
        <li> Easy to navigate.</li>
        <li> Visually appealing design</li>
        <li> Consistency</li>
      </ol>
      <p className="section-body">
        One of three applications did not meet the designated criteria. It had a
        very outdated look: it was overflowing with content and it was hard to
        understand where I should find relevant information. The other analysed
        applications had consistent designs in all pages, it was very easy to
        navigate and they even offered a tutorial on how to use their apps.
      </p>
      <h3 className="section-smaller-title">Surveys</h3>
      <p className="section-body">
        After seeing what programming apps were available on the “Google Play
        Store” I interviewed 3 people that had at least a minimal amount of
        experience in the programming field. From those interviews I created
        user personas.
      </p>
      <p className="section-body">
        Some of the key findings that I collected:
        <ol className="p-formating">
          <li>Keep it simple: the design should be simple and easy to use.</li>
          <li>
            {" "}
            Modern approach: users wanted the design to keep up with the current
            design standards.
          </li>
          <li>
            {" "}
            Interactivity: users specified that it’s important to have some kind
            of interactivity in the app: progress sharing, quizzes.
          </li>
        </ol>
      </p>
      <div className="body-container">
        <img className="body-images" src={Persona}></img>
      </div>
      <h3 className="section-title">Design process</h3>
      <p className="section-body">
        The design process for this application was a very long journey for me,
        but I learned a lot. After reviewing the information that I received
        from users and having the requirements that were created beforehand I
        showed the application to my university professor. But I was not
        satisfied with the end result. After a while, I revamped the application
        during my freetime and even designed a hand made logo for it.
      </p>
      <p className="under-text">
        Wireframes for the first version of the application:
      </p>
      <div className="body-container">
        <img className="body-images" src={OldWireframe1}></img>
      </div>
      <p className="under-text">
        Prototype for the first version of the application:
      </p>
      <div className="body-container">
        <img className="body-images" src={OldPrototype}></img>
      </div>
      <p className="section-body">
        I started looking through the old ”Programavimo žinynas” wireframes and
        prototypes and wondered how I could improve everything. I decided to
        make a number of small adjustments to some of the elements and to
        completely overhaul the others.
      </p>
      <p className="under-text">
        Wireframes for the second version of the application:
      </p>
      <div className="body-container">
        <img className="body-images" src={NewWireframe}></img>
      </div>
      <p className="under-text">Final product</p>
      <div className="body-container">
        <img className="body-images" src={NewPrototype}></img>
      </div>
      <p className="section-body">
        After a lot of thinking and altering I achieved what the users’ needed
        and I wanted myself: to make visually appealing applications that not
        only have all the needed content for programming but also offer some
        sort of interactivity: programming battles with friends or quizzes after
        reaching the capstone of a course. I made sure that the application was
        easy to use. I added indicators so the user would know where to go and
        what to do.
      </p>
      <h3 className="section-title">Retrospective</h3>
      <h3 className="section-smaller-title">Challenges</h3>
      <p className="section-body">
        My biggest challenge was to lay out the elements in a way that would
        make everything else look cohesive. I struggled a lot with the bottom
        navigation bar since it just didn't feel right. But in the end I managed
        to style it in the way that I wanted it to look like.
      </p>
      <h3 className="section-smaller-title">What I learned</h3>
      <p className="section-body">
        The most important thing I learned was how to make an app easy to use. I
        tried to make the text readable by adjusting the line height and colors.
        Also, after learning about the Nielsen heuristics in university I tried
        to take them into account while designing my application. I added
        multiple application status indicators so the users know how far they
        are in the course, how much time is left in the quiz, etc.
      </p>
    </div>
  );
}

export default ProgramavimoZinynas;
