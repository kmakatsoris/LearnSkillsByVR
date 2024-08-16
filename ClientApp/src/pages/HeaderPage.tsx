import React, { useState } from "react";
import styles from "./HeaderPage.module.css";
import logo from "../images/logo.png";
import { IParallax } from "@react-spring/parallax";
import menu from "../images/menu.png";

const HeaderLinksTitles = [
  "Home",
  "What Is It",
  "How It Works",
  "Request A Demo",
  "About",
];

const links = [0, 1.325, 1.95, 3.1, 3.86];

interface Props {
  parallax: React.MutableRefObject<IParallax>;
}

const HeaderPage = (props: Props) => {
  const [opened, setOpened] = useState<boolean>(true);

  const headerHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setOpened(!opened);
  };

  const headerElementClosed = () => {
    return (
      <div className={styles.containerClosed}>
        <div className={styles.headerClosed}></div>
        <div className={styles.headerBtnClosedContainer}>
          <img
            alt={"menu Icon"}
            src={menu}
            className={styles.headerBtnClosed}
            onClick={headerHandler}
          />
        </div>
      </div>
    );
  };

  const headerElementOpened = () => {
    return (
      <div className={styles.containerOpened}>
        <div className={styles.containerOpenedWithoutImg}>
          <div className={styles.logoContaier}>
            <img
              alt={"LOGO"}
              src={logo}
              className={styles.logo}
              onClick={() => {
                props.parallax.current.scrollTo(links[0]);
              }}
            />
          </div>
          <div className={styles.linksContaier}>
            {HeaderLinksTitles.map((t: string, index: number) => {
              return (
                <div
                  className={styles.links}
                  id={t}
                  key={t}
                  onClick={() => {
                    props.parallax.current.scrollTo(links[index]);
                  }}
                >
                  {t}
                </div>
              );
            })}
          </div>
        </div>
        <img
          alt={"menu Icon"}
          src={menu}
          className={styles.headerBtnOpened}
          onClick={headerHandler}
        />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {opened === true ? headerElementOpened() : headerElementClosed()}
    </div>
  );
};

export default HeaderPage;
