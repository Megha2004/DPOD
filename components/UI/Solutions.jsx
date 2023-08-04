
import React from "react";
import classes from "../../styles/solutions.module.css";

const Platforms = () => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownBtn}>Solutions</button>
      <div className={classes.dropdownContent}>
        <ul className={classes.megamenu}>
          <li>For Content Creators</li>
          <li>For Engineering Teams</li>
          <li>For Startups</li>
        </ul>
      </div>
    </div>
  );
};

export default Platforms;
