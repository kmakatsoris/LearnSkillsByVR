import React from "react";
import styles from "./RequestDemoPage.module.css";
import rwings from "../images/rightWing.png";
import lwings from "../images/leftWing.png";
import { motion } from "framer-motion";

const RequestDemoPage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        animate={{ rotate: [0, 1, 0] }}
        transition={{
          type: "spring",
          duration: 1,
          repeat: Infinity,
        }}
        className={styles.motionRightWingsContainer}
      >
        <img
          alt={"wings"}
          src={rwings}
          className={styles.rightWingsContainer}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 1, 0] }}
        transition={{
          type: "tween",
          duration: 1,
          repeat: Infinity,
        }}
        className={styles.motionLeftWingsContainer}
      >
        {" "}
        <img alt={"wings"} src={lwings} className={styles.leftWingsContainer} />
      </motion.div>

      <div className={styles.demoContainer}>
        <div className={styles.demoText}>Do you want a demo, don't you!!</div>
        <div className={styles.demoBtn}>Request</div>
      </div>
    </div>
  );
};

export default RequestDemoPage;
