import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import Header from "./Header";
import Hero from "./Hero";
import OptionSection from "./OptionSection";

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
            <Hero />
            <OptionSection />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SAMPLE_ABOUT;