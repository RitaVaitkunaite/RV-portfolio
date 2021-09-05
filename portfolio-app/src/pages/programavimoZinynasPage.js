import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

import Header from "./header.png";
import Solution001 from "./pz-image001.png";
import Solution002 from "./pz-image002.png";
import Solution003 from "./pz-image003.png";
import Codic from "./codic.png";
import Programming from "./programming.png";
import OldPZ from "./old-pz.png";
import NewPZ from "./newPZ.png";
import logo from "./logo.png";
import Login from "./Login.png";
import Course from "./course.png";
import Structure from "./structure.png";
import Quiz from "./quiz.png";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function ProgramavimoZinynas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="header-container">
      <img className="header" src={Header}></img>
      <div className="paragraph-container">
        <h2 className="subclass">Problem statement</h2>
        <h3 className="large-title">
          It’s hard to find a balance between learning and socialising
        </h3>
        <p className="text-field">
          A lot of people would love to start their journey in IT as a
          programmer, an analyst or something else entirely. But starting to
          learn programming to most people can be seen as a huge challenge: some
          don’t have enough time to sit around at home and watch tutorials,
          others just don’t want to lose their friends.
        </p>
        <p className="text-field-normal">
          Besides, finding learning material can be challenging, especially if
          you’re just starting your learning journey in IT.
        </p>
      </div>
      <div className="paragraph-container">
        <h2
          className="subclass"
          style={{
            paddingTop: 60,
          }}
        >
          Solution
        </h2>
        <h3 className="large-title">
          Let people learn in a fun and handy way.{" "}
        </h3>
        <div className="flex-container">
          <div className="text-flex-container">
            <h3 className="text-title">Learn while socialising</h3>
            <p className="solution-text">
              Learn information in bite sized chunks and participate in
              quiz-type battles between users.
            </p>
            <p className="solution-text">
              Track progress on various programming courses and share it with
              friends via social media.
            </p>
          </div>

          <img className="solution-image" src={Solution001}></img>
        </div>
        <div
          className="flex-container"
          style={{
            marginLeft: -20,
          }}
        >
          <div className="text-flex-container">
            <h3 className="text-title">ALL INFORMATION IN ONE PLACE</h3>
            <p className="solution-text">
              Find all information about an area of interest in one structured
              place.
            </p>
            <p className="solution-text">
              Take your time to learn and do it one lesson at a time.
            </p>
          </div>
          <img className="solution-image-big" src={Solution002}></img>
        </div>
        <div
          className="flex-container"
          style={{
            marginLeft: -20,
          }}
        >
          <div className="text-flex-container">
            <h3 className="text-title">REWARDING EXPERIENCE</h3>
            <p className="solution-text">
              Feel accomplished after taking small step towards your programming
              journey
            </p>
          </div>
          <img className="solution-image-big001" src={Solution003}></img>
        </div>
        <h2 className="subclass">Research</h2>
        <h3 className="text-title-sub">competitor analysis</h3>
        <p className="text-field">
          Since programming apps in the “Google Play Store” have their fair
          competition, I wanted to analyse 2 programming applications and see
          what trends they are using and what I can learn or improve on
          accordingly.
        </p>
        <div className="competitors">
          <img
            src={Codic}
            className="competitors-img"
            style={{
              paddingTop: 20,
            }}
          ></img>
          <img src={Programming} className="competitors-img"></img>
        </div>
        <h3 className="text-title-sub">surveys</h3>
        <p className="text-field">
          After seeing what programming apps were available on the “Google Play
          Store”, I interviewed 3 people that had at least a minimal amount of
          experience in the IT field. The interviewees shared their frustations
          with the current programming applications and explained what would
          motivate them to broaden their experience in programming.
        </p>
        <h2
          className="subclass"
          style={{
            paddingTop: 60,
          }}
        >
          Insights
        </h2>
        <h3 className="large-title">
          Encouragement and socialization while learning will keep them going
          forward in their programming journey.
        </h3>
        <p className="text-field">
          The intervieweers often feel unmotivated while reading or watching
          tutorials online. They want to change the habit of only reading or
          watching and to actually participate in some interactive activity,
          either solving quizes or learning while being in a group with others.
        </p>
        <p className="text-field-normal">
          According to survey participants - current applications often don’t
          have finely structured information about certain topic, which
          discourages them from using the app.
        </p>
        <h2
          className="subclass"
          style={{
            paddingTop: 60,
          }}
        >
          DESIGN
        </h2>
        <h3 className="text-title-sub">DESIGN PROCESS</h3>
        <p className="text-field">
          The “Programavimo žinynas” prototype had two different versions: the
          first one, that I created during my university course, and the second
          one, in which I updated the design a couple of months later. I felt
          that from the UI standpoint the application felt dull and incosistent,
          so I wanted to give my application an identity, a different feel from
          others.
        </p>
        <h3 className="versions">Version 1</h3>
        <img src={OldPZ} className="image-container-4"></img>
        <h3
          className="versions"
          style={{
            paddingBottom: 16,
          }}
        >
          Version 2
        </h3>
        <div className="container-logo">
          <p
            className="text-field"
            style={{
              paddingBottom: 60,
            }}
          >
            I began the update process by looking through the old prototype and
            thinking what could be improved. Since I wanted to give the
            application an identity, I drew an original logotype using a graphic
            tablet. I also created new course cards and removed white space
            where it wasn’t needed.
          </p>
          <div
            style={{
              paddingBottom: 60,
              marginRight: 294,
            }}
          >
            <img className="logo" src={logo}></img>
          </div>
        </div>
        <img src={NewPZ} className="image-container-4"></img>
        <h2
          className="subclass"
          style={{
            paddingTop: 60,
            paddingBottom: 25,
          }}
        >
          FINAL PRODUCT
        </h2>
        <h3 className="text-title-sub">onboarding & lOGIN & rEGISTRATION</h3>
        <img src={Login} className="image-container-3"></img>
        <h3
          className="text-title-sub"
          style={{
            paddingTop: 40,
          }}
        >
          Courses, FAVORITES list
        </h3>
        <img src={Course} className="image-container-3"></img>
        <h3
          className="text-title-sub"
          style={{
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          course structure
        </h3>
        <img src={Structure} className="image-container-4"></img>
        <h3
          className="text-title-sub"
          style={{
            paddingTop: 40,
          }}
        >
          QUIZ, PROGRESS
        </h3>
        <img
          src={Quiz}
          className="image-container-3"
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
              href="https://www.figma.com/file/2H36JtV2OQiS3YTwWzWVci/Programavimo-zinynas-v.0.0.2?node-id=0%3A1"
              target="_blank"
            >
              View full prototype
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramavimoZinynas;
