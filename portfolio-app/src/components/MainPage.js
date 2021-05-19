import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";

import Navbar from "./NavBar";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default MainPage;
