import React from "react";
import { render } from "react-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          style={{ marginRight: 10, fontSize: 15, cursor: "pointer" }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          style={{ marginRight: 10, fontSize: 15, cursor: "pointer" }}
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
