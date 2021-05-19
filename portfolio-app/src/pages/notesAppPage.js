import React from "react";
import { Link } from "react-router-dom";
import "./NotesApp.css";
import Header from "./Group56.png";
import OldWireframe from "./wireframe1.png";
import HighFidelity from "./hf-wireframe.png";
import Android from "./android.png";
import Wireframes from "./group19.png";
import Prototype from "./Group59.png";
import AB from "./a-b.png";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function NotesApp() {
  return (
    <div className="main-container">
      <h2 className="main-title">Notes application</h2>
      <div className="img-holder">
        <img className="main-header" src={Header}></img>
      </div>
      <p className="under-text">
        To view the full prototype you can click
        <a
          className="link"
          href="https://www.figma.com/file/6cu6pc5ytMy2Ess7vYackW/NotesApp?node-id=0%3A1"
          target="_blank"
        >
          here
        </a>
      </p>

      <h3 className="section-title">Introduction</h3>
      <p className="section-body">
        ,,Notes application” is my second prototype application in which I tried
        to collaborate with my friend, who is an aspiring Android developer. So
        basically, he was the one who provided me with the requirements for the
        app prototype
      </p>
      <h3 className="section-smaller-title">Main requirements</h3>
      <p className="section-body">
        1. The prototype is created for Android mobile users.
      </p>
      <p className="section-body">
        2. There should be different categories for the notes.
      </p>
      <p className="section-body">
        3. When dragging the notes, an options menu should be displayed for the
        selected note.
      </p>

      <h3 className="section-smaller-title">Methods:</h3>
      <p className="section-body">Wireframes, Prototyping, A/B testing</p>

      <h3 className="section-smaller-title">Tools:</h3>
      <p className="section-body">Figma, Figma Mirror</p>
      <h3 className="section-title">Design process</h3>
      <p className="section-body">
        First thing I did was to create a wireframe of how the main screen of
        the app should look like.
      </p>
      <div className="body-container">
        <img className="body-images-na" src={OldWireframe}></img>
      </div>
      <p className="section-body">
        After showing the wireframe to my friend, he said it looked alright and
        that I should continue with the idea, so I created a high fidelity
        wireframe for the main screen.
      </p>
      <div className="body-container">
        <img className="body-images-na" src={HighFidelity}></img>
      </div>
      <p className="section-body">
        After I showed him a completed main screen he tried to recreate it as an
        Android app. The recreated application looked too similar to the default
        notes application, the “add note button” was too far up so it wasn’t so
        easy to use with one hand and search input was too small.
      </p>
      <div className="body-container">
        <img className="body-images-na" src={Android}></img>
      </div>
      <p className="section-body">
        I was truly unhappy with the results and decided to give the app some
        individuality and make the application easier to use.
      </p>
      <p className="under-text">Wireframes</p>
      <div className="body-container">
        <img className="body-images" src={Wireframes}></img>
      </div>
      <p className="section-body">
        I changed the button placement to be lower, so it could be easier to
        press using one hand. Also after creating every screen I used the “Figma
        mirror” application to test everything out on my own device.
      </p>
      <p className="under-text">Final product</p>
      <div className="body-container">
        <img className="body-images" src={Prototype}></img>
      </div>
      <p className="section-body">
        In the final prototype I added some small details: categories got their
        own colors, so the user could more easily distinguish which category
        they were applying to their selected note. I also added some text to the
        category creation icon so the user would more easily understand what
        that icon was used for.
      </p>
      <p className="section-body">
        During the prototyping phase I used small amounts of “A/B” testing
        (showcased two different layouts and users picked the more preferred
        version).
      </p>
      <div className="body-container">
        <img className="body-images" src={AB}></img>
      </div>
      <p className="section-body">
        In the final prototype version I used the layout on the right and after
        some valuable feedback I flipped the placing of the two buttons, so
        ,,Rename button” is now on the right side.
      </p>
      <h3 className="section-title">Retrospective</h3>
      <h3 className="section-smaller-title">Challenges</h3>
      <p className="section-body">
        The thing I struggled the most with was creating an originally looking
        app, but in the end I think I achieved some originality.
      </p>
      <h3 className="section-smaller-title">What I learned</h3>
      <p className="section-body">
        Most important thing I learned is how to work in a team and how to
        create a design which can be later recreated as an Android app.
      </p>
    </div>
  );
}

export default NotesApp;
