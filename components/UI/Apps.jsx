import React, { useState, useEffect } from 'react';
import styles from '../../styles/apps.module.css';

const Apps = ({ apps }) => {
  const [websiteTwoApps, setWebsiteTwoApps] = useState([]);

  useEffect(() => {
    if (Array.isArray(apps) && apps.length >= 5) {
      setWebsiteTwoApps(apps.slice(0, 3));
    }
  }, [apps]);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn}>Apps</button>
      <div className={styles.dropdownContent}>
        <div className={styles.appsContainer}>
          {websiteTwoApps.map((app) => (
            <div key={app.id} className={styles.appItem}>
              <div className={styles.appIconContainer}>
                <img src={app.payload.icon[0].thumbnail_url} alt={app.payload.title.en} className={styles.appIcon} />
              </div>
              <div className={styles.appContentContainer}>
                <h3 className={styles.appTitle}>{app.payload.title.en}</h3>
                <p className={styles.appContent}>{app.payload.content.en}</p>
              </div>
             </div>
           
          ))}
        </div>
    </div>
    </div>
  );
};

export default Apps;