import React from "react";
import styles from "./SecondPage.module.css";
import { Fade } from "react-awesome-reveal";

const SecondPage = () => {
  return (
    <div className={styles.container}>
      {/*How it works*/}
      <Fade direction="down" delay={100} triggerOnce={false}>
        <div className={styles.howItWorksContainer}>
          <div className={styles.howItWorksTitle}>How it works</div>
          <div className={styles.howItWorksContent}>Some content...</div>
        </div>
      </Fade>

      {/*What we offer/What we propose */}
      <Fade direction="up" delay={200} triggerOnce={false}>
        <div className={styles.whatWeOfferContainer}>
          <div className={styles.whatWeOfferTitle}>
            What we offer/What we propose
          </div>
          <div className={styles.whatWeOfferContent}>Some content...</div>
        </div>
      </Fade>
    </div>
  );
};

export default SecondPage;
