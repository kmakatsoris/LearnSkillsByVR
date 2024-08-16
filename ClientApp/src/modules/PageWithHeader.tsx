import React from "react";
import styles from "./PageWithHeader.module.css";

interface Props {
  header: JSX.Element;
  page: JSX.Element;
}

const PageWithHeader = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>{props.header}</div>
      <div className={styles.pageContainer}>{props.page}</div>
    </div>
  );
};

export default PageWithHeader;
