import React from "react";
import styles from "./HelpPage.module.css";

const HelpPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.helpTitleContainer}></div>
      <div className={styles.helpInputContainer}></div>
      <div className={styles.footerContainer}>
        <div>Links..</div>
        <div>Others..</div>
      </div>
    </div>
  );
};

export default HelpPage;
