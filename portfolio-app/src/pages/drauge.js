import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./drauge.css";
import Header from "./drauge.png";
import Problems from "./problems.png";
import Solution005 from "./solution005.png";
import Solution006 from "./solution006.png";
import Solution007 from "./solution007.png";
import wf3 from "./wf3.png";
import questions from "./question.png";
import participants from "./participants.png";
import onboarding from "./onboarding.png";
import map from "./map.png";
import create from "./create.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Drauge() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="header-container">
      <img className="header" src={Header}></img>
      <div className="paragraph-container">
        <h2 id="subclass-v">Problem statement</h2>
        <h3 className="large-title-v">
          Individuals don’t see any reason to invest their valuable time in
          volunteering.<br></br> How can we change that?
        </h3>
        <p className="text-field">
          During this project I was so happy to have Product Owner, who I can
          ask questions, who knows all the details about the problem we are
          facing. Product Owner stated, that people often don’t volunteer
          because they don’t see reason why invest time in volunteering. Product
          Owner indentified other issues about current volunteering applications
          and the problem as a whole
        </p>
        <div className="paragraph-container-notes">
          <img className="problem-container" src={Problems}></img>
        </div>
        <div className="paragraph-container-notes">
          <h2
            id="subclass-v"
            style={{
              paddingTop: 10,
            }}
          >
            Solution
          </h2>
          <h3 className="large-title">Everything tailored to you</h3>
          <div className="flex-container">
            <div
              className="text-flex-container"
              style={{
                marginRight: 55,
              }}
            >
              <h3 className="text-title">
                Develop character building qualities{" "}
              </h3>
              <p className="solution-text">
                Source of extrinsic motivation to volunteer and help out others
                in need.
              </p>
              <p className="solution-text">
                Choose which character qualities you want to learn by
                volunteering{" "}
              </p>
            </div>
            <img className="solution-image-v" src={Solution005}></img>
          </div>{" "}
          <div className="flex-container">
            <div
              className="text-flex-container"
              style={{
                marginRight: 55,
              }}
            >
              <h3 className="text-title">
                fIND VOLUNTEERING ACTIVITIES NEAR YOU
              </h3>
              <p className="solution-text">
                See all available initiatives wherever you are.
              </p>
              <p className="solution-text">
                A brief information about initiative will help you find the
                right one.
              </p>
            </div>
            <img
              id="solution-volunteer"
              src={Solution006}
              style={{
                paddingBottom: 40,
                paddingTop: 40,
              }}
            ></img>
          </div>
          <div className="flex-container">
            <div
              className="text-flex-container"
              style={{
                marginRight: 55,
              }}
            >
              <h3 className="text-title">
                take a look at your time investment
              </h3>
              <p className="solution-text">
                Profile page is the place where you want to come back everyday
                and see which qualities you developed by participating in
                initiatives.
              </p>
              <p className="solution-text">
                You are helping others, we don’t want to push the negativity so
                only see positives reviews about yourself.
              </p>
            </div>
            <img className="solution-image-big-v" src={Solution007}></img>
          </div>
          <h2
            id="subclass-v"
            style={{
              paddingTop: 40,
            }}
          >
            Design
          </h2>
          <h3 className="text-title-sub">design process </h3>
          <p className="text-field">
            Design process started when Product Owner explained application’s
            theme and the problems surrounding it. At first my idea was to have
            a onboarding screen, where the user can pick which categories
            interest him the most, such as animals, education, culture and etc.
            But after long deliberation I thought why not offer much more?
          </p>
          <p className="text-field">
            People can learn, overcome their fears by volunteering (If person is
            afraid of public speaking and wants to conquer it, he would benefit
            from volunteering in a place where communication is vital).
          </p>
          <p className="text-field">
            After the main idea was set I began a “true” design process with
            many alterations and other difficulties that were ahead.
          </p>
          <h3
            className="text-title-sub"
            style={{
              paddingTop: 20,
            }}
          >
            general concept
          </h3>
          <img
            src={wf3}
            className="image-container-4"
            style={{
              paddingTop: 20,
            }}
          ></img>
          <p className="text-field">
            At that time these wireframes was a general concept which showcased
            what functional requirements application needs to have.
          </p>
          <h3
            className="text-title-sub"
            style={{
              paddingTop: 20,
            }}
          >
            Reliability issue
          </h3>
          <p className="text-field">
            After having almost all main functionalities done I thought: how can
            iniciator and volunteer communicate with each other, how
            initiative's organizer will know who came to his volunteering event.
            From volunteer’s perspective I implemented a comments section, where
            user can ask all question related to event.
          </p>
          <img src={questions} className="image-container-1" style={{}}></img>
          <p className="text-field">
            From organizer’s perspective I implemented a new window, where he
            can see all his participants, their name, phone number, email in
            case of some uncertainties. Additionally, organizer can have a look
            on how each participant behaves in initiative: how many positive
            reviews they have.
          </p>
          <img
            src={participants}
            className="image-container-2"
            style={{}}
          ></img>
          <h2 id="subclass-v" style={{ paddingTop: 20 }}>
            final product
          </h2>
          <h3 className="text-title-sub">onboarding</h3>
          <img
            src={onboarding}
            className="image-container-3-v"
            style={{}}
          ></img>
          <h3 className="text-title-sub" style={{ paddingTop: 20 }}>
            Map, initiatives list, Filter
          </h3>
          <img
            src={map}
            className="image-container-3-v"
            style={{ paddingTop: 20 }}
          ></img>
          <h3 className="text-title-sub" style={{ paddingTop: 20 }}>
            initiative CREATION
          </h3>
          <img
            src={create}
            className="image-container-2"
            style={{ paddingTop: 20, paddingBottom: 50 }}
          ></img>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.figma.com/file/DmXrDmC0O0f1lR8EISmNRW/Savanoryst%C4%97s_dizainas?node-id=0%3A1";
              }}
              id="view-btn-v"
            >
              View full prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drauge;
