import React, { useState } from "react";
import styles from "./FirstMainPage.module.css";
import { Fade } from "react-awesome-reveal";

const FirstMainPage = () => {
  const [pageAnimationEn, setPageAnimationEn] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      {/*Page Title*/}
      <div className={styles.titleContainer}>
        <div className={styles.title}>What Is It?</div>
      </div>

      {/*CPR Div*/}
      <Fade direction="right" delay={200} triggerOnce={false}>
        <div className={styles.cprContainer}>
          <div className={styles.cprTitle}>
            What is Cardiopulmonary resuscitation (CPR).
          </div>
          <div className={styles.cprContent}>
            Content about CPR...Cardiopulmonary resuscitation (CPR) is a
            lifesaving technique that's useful in many emergencies, such as a
            heart attack or near drowning, in which someone's breathing or
            heartbeat has stopped....
          </div>
        </div>
      </Fade>

      {/*VR Div*/}
      <Fade direction="left" delay={300} triggerOnce={false}>
        <div className={styles.vrContainer}>
          <div className={styles.vrTitle}>What is Virtual Reality (VR).</div>
          <div className={styles.vrContent}>
            Content about VR...Virtual Reality is the use of computer technology
            to create a simulated environment.....
          </div>
        </div>
      </Fade>

      {/*Combination Div*/}
      <Fade direction="right" delay={400} triggerOnce={false}>
        <div className={styles.combContainer}>
          <div className={styles.combTitle}>
            "Perhaps the name of the group"
          </div>
          <div className={styles.combContent}>
            The need to provide first aid and the easy way to learn via VR led
            to the ...
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FirstMainPage;
