"use client";
import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HeroSection from "./HeroSection";
import OptionsSection from "./OptionsSection";

function SAMPLE_ABOUT() {
  return (
    <main className={styles.sampleAbout}>
      <div className={styles.container}>
        <div className={styles.sidebarColumn}>
          <Sidebar />
        </div>
        <div className={styles.mainColumn}>
          <div className={styles.mainContent}>
            <Header />
            <HeroSection />
            <OptionsSection />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SAMPLE_ABOUT;