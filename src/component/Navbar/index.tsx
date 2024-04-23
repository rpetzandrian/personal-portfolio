import React, { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  nav: string;
  setState: Dispatch<SetStateAction<string>>;
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const onClick = (nav: string) => {
    props.setState(nav);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${props.nav == "about" ? "active" : ""}`}
            onClick={() => onClick("about")}
            data-nav-link
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${props.nav == "resume" ? "active" : ""}`}
            onClick={() => onClick("resume")}
            data-nav-link
          >
            Resume
          </button>
        </li>

        {/* <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Blog
          </button>
        </li> */}

        <li className="navbar-item">
          <button
            className={`navbar-link ${props.nav == "contact" ? "active" : ""}`}
            onClick={() => onClick("contact")}
            data-nav-link
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
