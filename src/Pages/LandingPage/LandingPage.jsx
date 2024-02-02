import React from "react";
import styles from "./LandingPage.module.css";
import NavBar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Introduction from "../../Components/Introduction/Intro";
import ChooseUs from "../../Components/WhyChooseUs/ChooseUs";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarAndHeroContainer}>
        <NavBar />
        <HeroSection />
      </div>
      <div className={styles.contentBackground}>
        <div className={styles.contentWrapper}>
          <Introduction />
          <ChooseUs />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
