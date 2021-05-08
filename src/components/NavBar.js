import React from "react";
import "./styling.css";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <div className="hero-body">
        <div className="container">
          <h1 id="name" className="title">
            The Shoppies:
          </h1>
          <h1 id="slogan" className="title">
            Movie awards for entrepreneurs
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
