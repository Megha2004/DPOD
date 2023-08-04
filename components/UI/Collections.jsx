import React from "react";
import classes from "../../styles/collections.module.css";

const Collections = ({ collections }) => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownBtn}>Collections</button>
      <div className={classes.dropdownContent}>
        <div className={classes.columns}>
          <div className={classes.column}>
            <ul className={classes.megamenu}>
              {collections.map((collection) => (
                <li key={collection.payload.id}>
                  <a href={collection.payload.link.en}>
                    {collection.payload.link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.column}>
            <ul className={classes.megamenu}>
              {collections.map((collection) => (
                <li key={collection.payload.id}>
                  <span>{collection.payload.label.en}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.column}>
            <ul className={classes.megamenu}>
              {collections.map((collection) => (
                <li key={collection.payload.id}>
                  <img
                    src={collection.payload.image[0].thumbnail_url}
                    alt={collection.payload.image[0].file_name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
