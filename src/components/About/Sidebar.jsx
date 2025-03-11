"use client";
import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8655df2b1b027d306035716668251ed766dab69cbc6e74beed7f7654ed632251?placeholderIfAbsent=true&apiKey=961e21a64e344f339dc230b663f13664"
          alt="Logo"
          className={styles.logoImage}
        />
        <nav className={styles.sidebarNav}>
          <a
            href="#regulations"
            className={`${styles.navLink} ${styles.regulationsLink}`}
          >
            REGULATIONS
          </a>
          <a
            href="#risk-maps"
            className={`${styles.navLink} ${styles.riskMapsLink}`}
          >
            RISK MAPS
          </a>
          <a
            href="#plan-annotations"
            className={`${styles.navLink} ${styles.planAnnotationsLink}`}
          >
            PLAN ANNOTATIONS
          </a>
          <a
            href="#ai-chatbot"
            className={`${styles.navLink} ${styles.aiChatbotLink}`}
          >
            AI CHATBOT
          </a>
        </nav>
      </div>
      <a href="#about" className={styles.aboutLink}>
        ABOUT
      </a>
    </aside>
  );
};

export default Sidebar;
