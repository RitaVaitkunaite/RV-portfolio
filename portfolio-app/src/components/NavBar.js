import React from "react";
import { render } from "react-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <ul>
          <li>Rita Vaitkūnaitė</li>
        </ul>
      </div>
      <ul>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          style={{
            marginRight: 50,
            fontSize: 16,
            cursor: "pointer",
            fontWeight: "bolder",
          }}
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
          style={{
            marginRight: 50,
            fontSize: 16,
            cursor: "pointer",
            fontWeight: "bolder",
          }}
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
