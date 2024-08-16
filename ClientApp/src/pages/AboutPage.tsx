import { IParallax } from "@react-spring/parallax";
import React from "react";
import Contributor from "../modules/Contributor";
import styles from "./AboutPage.module.css";

interface Props {
  parallax: React.MutableRefObject<IParallax>;
}

const HeaderLinksTitles = [
  "Home",
  "What Is It",
  "How It Works",
  "Request A Demo",
  "About",
];

const links = [0, 1.325, 1.95, 3.1, 3.86];

const AboutPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>About us</div>
        <div className={styles.titleDescription}>
          A brief description of the contributors to the project.
        </div>
      </div>
      <div className={styles.participantsContainer}>
        <div className={styles.participantsItem}>
          <Contributor
            title={
              <div className={styles.participantsTitle}>{`<Title(HR)>`}</div>
            }
            description={
              <div className={styles.participantsDescriptionContainer}>
                <div className={styles.name}>{`<Name>`}</div>
                <div className={styles.description}>{`<Description>`}</div>
              </div>
            }
          />
        </div>
        <div className={styles.participantsItem}>
          <Contributor
            title={
              <div className={styles.participantsTitle}>{`<Title(HR)>`}</div>
            }
            description={
              <div className={styles.participantsDescriptionContainer}>
                <div className={styles.name}>{`<Name>`}</div>
                <div className={styles.description}>{`<Description>`}</div>
              </div>
            }
          />
        </div>
        <div className={styles.participantsItem}>
          <Contributor
            title={
              <div className={styles.participantsTitle}>{`<Title(HR)>`}</div>
            }
            description={
              <div className={styles.participantsDescriptionContainer}>
                <div className={styles.name}>{`<Name>`}</div>
                <div className={styles.description}>{`<Description>`}</div>
              </div>
            }
          />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.linksContainer}>
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
        <div className={styles.conditionsContainer}>
          <div className={styles.CopyrightsContainer}>
            <div className={styles.condition}>Copyrights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
