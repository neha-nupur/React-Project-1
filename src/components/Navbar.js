import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav>
      <img src={reactLogo} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Project 1 </h4>
      <a className="nav--title" href="https://react.dev/">Learn More About React</a>
    </nav>
  );
}
