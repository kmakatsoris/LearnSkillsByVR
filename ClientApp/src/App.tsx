import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import HomePage from "./pages/HomePage";
import RequestDemoPage from "./pages/RequestDemoPage";
import wvr0 from "./images/wVr0.png";
import wvr1 from "./images/wVr1.png";
import FirstMainPage from "./pages/FirstMainPage";
import styles from "./App.module.css";
import SecondPage from "./pages/SecondPage";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import HeaderPage from "./pages/HeaderPage";

const App = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div className={styles.container}>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={13}
          style={{ backgroundColor: "#ffffff" }}
        />

        {/*
        ===========================================================================
        > PAGES:
        =========================================================================== */}
        {/*
        ===========================================================================
        > Vr Headsets:
        =========================================================================== */}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.4 }}>
          <img
            alt={"VR Headset"}
            src={wvr0}
            style={{
              display: "block",
              width: "20%",
              margin: "calc(20%)0px 0px calc(60%)",
            }}
          />
          <img
            alt={"VR Headset"}
            src={wvr0}
            style={{
              display: "block",
              width: "10%",
              margin: "calc(2%)0px 0px calc(10%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.7 }}>
          <img
            alt={"VR Headset"}
            src={wvr1}
            style={{
              display: "block",
              width: "20%",
              margin: "calc(8%) 0px 0px calc(78%)",
            }}
          />
          <img
            alt={"VR Headset"}
            src={wvr1}
            style={{
              display: "block",
              width: "20%",
              margin: "calc(12%) 0px 0px calc(1%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.5 }}>
          <img
            alt={"VR Headset"}
            src={wvr0}
            style={{
              display: "block",
              width: "10%",
              margin: "calc(12%) 0px 0px calc(80%)",
            }}
          />
          <img
            alt={"VR Headset"}
            src={wvr0}
            style={{
              display: "block",
              width: "20%",
              margin: "calc(15%) 0px 0px calc(4%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-0.1} style={{ opacity: 0.8 }}>
          <img
            alt={"VR Headset"}
            src={wvr0}
            style={{
              display: "block",
              width: "20%",
              margin: "calc(10%) 0px 0px calc(50%)",
            }}
          />
          <img
            alt={"VR Headset"}
            src={wvr1}
            style={{
              display: "block",
              width: "15%",
              margin: "calc(1%) 0px 0px calc(1%)",
            }}
          />
          <img
            alt={"VR Headset"}
            src={wvr0}
            style={{
              display: "block",
              width: "14%",
              margin: "calc(4%) 0px 0px calc(80%)",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.4} style={{ opacity: 0.8 }}>
          <img
            alt={"VR Headset"}
            src={wvr1}
            style={{
              display: "block",
              width: "20%",
              margin: "calc(2%) 0px 0px calc(3%)",
            }}
          />
          <img
            alt={"VR Headset"}
            src={wvr1}
            style={{
              display: "block",
              width: "15%",
              margin: "calc(1%) 0px 0px calc(1%)",
            }}
          />
        </ParallaxLayer>
        {/* Header 
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HeaderPage parallax={parallax} />
        </ParallaxLayer>
        */}

        {/* Home */}
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomePage />
        </ParallaxLayer>

        {/* First Page */}
        <ParallaxLayer offset={1.8} speed={1}>
          <FirstMainPage />
        </ParallaxLayer>

        {/* Second Page */}
        <ParallaxLayer offset={2} speed={1.5}>
          <SecondPage />
        </ParallaxLayer>

        {/* Third Page */}
        <ParallaxLayer
          offset={3}
          speed={0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "calc(36vh) 0px 0px calc(15vw)",
          }}
        >
          <RequestDemoPage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "calc(10vh) 0px 0px calc(26vw)",
          }}
        >
          <RequestDemoPage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "calc(25vh) 0px 0px calc(44vw)",
          }}
        >
          <RequestDemoPage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "calc(6vh) 0px 0px calc(65vw)",
          }}
        >
          <RequestDemoPage />
        </ParallaxLayer>

        {/* About Page */}
        <ParallaxLayer offset={4} speed={0}>
          <AboutPage parallax={parallax} />
        </ParallaxLayer>
      </Parallax>
      <HeaderPage parallax={parallax} />
    </div>
  );
};

export default App;
