import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotesApp.css";
import Header from "./headerNotes.png";
import Solution004 from "./solution004.png";
import WF1 from "./w1.png";
import Android from "./android.png";
import WF2 from "./w2.png";
import AB from "./a-b.png";
import Main from "./mainpage.png";
import Add from "./add.png";
import Text from "./text.png";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function NotesApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="header-container">
      <img className="header" src={Header}></img>
      <div className="paragraph-container">
        <h2 className="subclass">Problem statement</h2>
        <h3 className="large-title">
          Note applications just don’t feel right, so why not create your own?{" "}
        </h3>
        <p className="text-field">
          The “Notes application” doesn’t have any relevant problem that I would
          be trying to solve. This application idea was born when my good
          friend, who is also conveniently an Android developer, decided to code
          an application, which dedicated to saving, adding and categorizing
          notes. So, as a starting UX/UI designer, I decided to help him out and
          design the application according to his needs.
        </p>
        <div className="paragraph-container-notes">
          <h2
            className="subclass"
            style={{
              paddingTop: 60,
            }}
          >
            Solution
          </h2>
          <h3 className="large-title">
            Add familiar concepts while making it personal.
          </h3>
          <div className="flex-container">
            <div className="text-flex-container">
              <h3 className="text-title">keep it organized</h3>
              <p className="solution-text">
                All categories are displayed in the main page, which makes it
                easier to access.
              </p>
              <p className="solution-text">
                Categories can be distinguished by color.
              </p>
            </div>
            <img className="solution-image" src={Solution004}></img>
          </div>
          <h2 className="subclass">Design</h2>
          <h3 className="text-title-sub">design process </h3>
          <p className="text-field">
            After hearing a proposal to create a notes application design I
            began to create wireframes for the app. The first thing I created
            was the main page.
          </p>
          <img src={WF1} className="image-container-2" style={{}}></img>
          <p className="text-field">
            After I showed him the completed main screen he tried to recreate it
            as an Android app. The recreated application looked too similar to
            the default notes application. Also, the “add note button” was too
            far up so it wasn’t so easy to use with one hand and the search
            input was too small.
          </p>
          <img src={Android} className="image-container-1" style={{}}></img>
          <h3
            className="text-title-sub"
            style={{
              paddingTop: 40,
            }}
          >
            design IMPROVEMENTS + Wireframes
          </h3>
          <p className="text-field">
            After seeing how the created design looks in the programmed version
            I decided to add a FAB(Floating Action Button) instead of having a
            button at the top. I also included the possibility to categorize and
            to find notes, by either using the search bar or the category tags.
          </p>
          <img
            src={WF2}
            className="image-container-4"
            style={{ paddingTop: 20 }}
          ></img>
          <h2 className="subclass" style={{ paddingTop: 40 }}>
            Testing
          </h2>
          <h3 className="text-title-sub">A/B testing </h3>
          <p className="text-field">
            During the prototyping phase I used small amounts of “A/B” testing
            (showcasing two different layouts and users picked the more
            preferred version). In the final prototype version I used the layout
            on the right
          </p>
          <img src={AB} className="image-container-2" style={{}}></img>
          <h2 className="subclass" style={{ paddingTop: 40 }}>
            final product
          </h2>
          <h3 className="text-title-sub">Main page</h3>
          <img src={Main} className="image-container-2" style={{}}></img>
          <h3 className="text-title-sub " style={{ paddingTop: 20 }}>
            Add categories
          </h3>
          <img src={Add} className="image-container-2" style={{}}></img>
          <h3 className="text-title-sub" style={{ paddingTop: 20 }}>
            text editor
          </h3>
          <img
            src={Text}
            className="image-container-2"
            style={{
              paddingBottom: 50,
            }}
          ></img>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="view-btn">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                href="https://www.figma.com/file/6cu6pc5ytMy2Ess7vYackW/NotesApp?node-id=0%3A1"
                target="_blank"
              >
                View full prototype
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesApp;
