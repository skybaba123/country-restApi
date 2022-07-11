import React from "react";
import "./Header.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";

// import { motion } from "framer-motion";
const Header = ({ toggle, toggleDarkmode }) => {
  return (
    <header
      style={{ background: toggleDarkmode ? "hsl(209, 23%, 22%)" : "" }}
      className="header"
    >
      <div className="header-title">
        <h2 style={{ color: toggleDarkmode ? "white" : "" }}>
          Where in the world?
        </h2>
      </div>
      <div onClick={toggle} className="header-img">
        {toggleDarkmode ? (
          <FaRegMoon
            style={{
              filter:
                "invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)",
            }}
            className="moon"
          />
        ) : (
          <FaMoon className="moon" />
        )}
        <p style={{ color: toggleDarkmode ? "white" : "" }}>
          {toggleDarkmode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
