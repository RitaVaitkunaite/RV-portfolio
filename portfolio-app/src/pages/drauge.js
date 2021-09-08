import React, { useEffect } from "react";
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

function Drauge() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="header-container">
      <img className="header" src={Header}></img>
      <div className="paragraph-container">
        <h2 id="subclass-v" style={{ marginTop: 50 }}>
          INTRO
        </h2>
        <h3 className="large-title-v" style={{ color: "#F0F0F0" }}>
          Simplified volunteering, which allows it’s users to create or join
          various volunteerings events, based on what individualistic values
          they want to improve or learn.
        </h3>
        <div style={{ display: "flex", marginTop: 30, fontSize: 20 }}>
          <p
            style={{ color: "#F0F0F0", fontWeight: "bolder", paddingRight: 15 }}
          >
            Project
          </p>
          <p style={{ color: "#F0F0F0" }}>TietoEVRY "Mėnuo su IT" internship</p>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 20 }}>
          <p
            style={{ color: "#F0F0F0", fontWeight: "bolder", paddingRight: 10 }}
          >
            Timeline
          </p>
          <p style={{ color: "#F0F0F0" }}>4 weeks</p>
        </div>

        <h2 id="subclass-v" style={{ marginTop: 50, fontSize: 25 }}>
          Problem statement
        </h2>
        <h3 className="large-title-v" style={{ color: "#F0F0F0" }}>
          Individuals don’t see any reason to invest their valuable time in
          volunteering.<br></br> How can we change that?
        </h3>
        <p className="text-field">
          During this project I was so happy to have a Product Owner who I could
          ask questions, since they knew all of the details about the problem we
          are facing. The Product Owner stated that people often don’t volunteer
          because they don’t see reason whythey should invest time in
          volunteering. The Product Owner indentified other issues about current
          volunteering applications and the problem as a whole.
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
                A profile page to which you want comeback everyday and see the
                qualities you developed by participating in the initiatives.
                initiatives.
              </p>
              <p className="solution-text">
                You are helping others, we don’t want to put negativity on your
                shoulders, so only see positives reviews about yourself.
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
            The design process started when the Product Owner explained the
            application’s theme and the problems surrounding it. At first, my
            idea was to have an onboarding screen where the user would pick
            which categories interest them the most, such as animals, education,
            culture and etc. But after long deliberations I thought to myself:
            why not offer much more?
          </p>
          <p className="text-field">
            People can learn and overcome their fears by volunteering (if a
            person is afraid of public speaking and wants to conquer this fear -
            he would benefit from volunteering in a place where communication is
            vital).
          </p>
          <p className="text-field">
            After the main idea was set, I began a “true” design process, which
            included many alterations and other difficulties.
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
            After having almost all main functionalities done, I started
            thinking: how can the iniciator and volunteer communicate with each
            other, how will the iniciative’s organizer know who came to their
            volunteering event. From the volunteer’s perspective, I implemented
            a comments section where the user could ask all of their questions
            that were related to the event.
          </p>
          <img src={questions} className="image-container-1" style={{}}></img>
          <p className="text-field">
            From the organizer’s perspective, I implemented a new window where
            they could see all the participants, including their name, phone
            number and email (in case of some uncertainties). Additionally, the
            organizer can have a look at how each participant behaves in the
            iniciatives: how many positive reviews they have, the percentage of
            successfully attended volunteering events.
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
            style={{ marginTop: -20 }}
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
