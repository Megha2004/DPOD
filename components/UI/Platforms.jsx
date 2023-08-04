// Platforms.jsx
import React from "react";
import classes from "../../styles/platforms.module.css";

const Platforms = () => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownBtn}>Platforms</button>
      <div className={classes.dropdownContent}>
        <ul className={classes.megamenu}>
          <li>Data Studio</li>
          <li>App Builder</li>
          <li>Plugins</li>
          <li>Growth Marketing</li>
        </ul>
      </div>
    </div>
  );
};

export default Platforms;
