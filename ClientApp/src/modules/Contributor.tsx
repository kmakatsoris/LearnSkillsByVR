import React from "react";
import styles from "./Contributor.module.css";
import contributorImg from "../images/contributor2.png";

interface Props {
  title: JSX.Element;
  description: JSX.Element;
}

const Contributor = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>{props.title}</div>
      <img
        alt={"Contributor"}
        src={contributorImg}
        className={styles.shapeContainer}
      />
      <div className={styles.descriptionContainer}>{props.description}</div>
    </div>
  );
};

export default Contributor;
