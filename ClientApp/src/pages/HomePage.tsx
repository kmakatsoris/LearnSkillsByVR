import React from "react";
import styles from "./HomePage.module.css";
import manwearingvr from "../images/manwearingvr.jpg";
import card from "../images/card.png";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          alt={"Man Wearing VR"}
          src={manwearingvr}
          className={styles.image}
        />
      </div>
      <div className={styles.keyPointsContainer}>
        <div className={styles.keyPointsItems}>
          <Fade direction="left" delay={400} triggerOnce={false}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ type: "tween", duration: 5, delay: 1.3 }}
              className={styles.keyPointContainer}
            >
              <div className={styles.keyPointTitle}>
                "Service 1(Keypoint Title)"
              </div>
              <div className={styles.keyPointContent}>
                Text stating what is offered and explain it briefly.
              </div>
              <img alt={"Card"} src={card} className={styles.card} />
            </motion.div>
          </Fade>

          <Fade direction="left" delay={300} triggerOnce={false}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ type: "tween", duration: 5, delay: 1.2 }}
              className={styles.keyPointContainer}
            >
              <div className={styles.keyPointTitle}>
                "Service 2(Keypoint Title)"
              </div>
              <div className={styles.keyPointContent}>
                Text stating what is offered and explain it briefly.
              </div>
              <img alt={"Card"} src={card} className={styles.card} />
            </motion.div>
          </Fade>

          <Fade direction="left" delay={200} triggerOnce={false}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ type: "tween", duration: 5, delay: 1.1 }}
              className={styles.keyPointContainer}
            >
              <div className={styles.keyPointTitle}>
                "Service 3(Keypoint Title)"
              </div>
              <div className={styles.keyPointContent}>
                Text stating what is offered and explain it briefly.
              </div>
              <img alt={"Card"} src={card} className={styles.card} />
            </motion.div>
          </Fade>

          <Fade direction="left" delay={200} triggerOnce={false}>
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ type: "tween", duration: 5, delay: 1 }}
              className={styles.keyPointContainer}
            >
              <div className={styles.keyPointTitle}>
                "Service 4(Keypoint Title)"
              </div>
              <div className={styles.keyPointContent}>
                Text stating what is offered and explain it briefly.
              </div>
              <img alt={"Card"} src={card} className={styles.card} />
            </motion.div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
