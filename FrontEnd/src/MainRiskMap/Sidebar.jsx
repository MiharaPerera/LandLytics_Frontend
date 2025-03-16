import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebarColumn}>
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/a6e75c6a65e7127f6c9a5c7eef5c6de6b5481928c83100361df4d707554b831a?placeholderIfAbsent=true"
            alt="Logo"
            className={styles.logo}
          />
          <h2 className={styles.regulations}>REGULATIONS</h2>
        </div>
        <div className={styles.riskMaps}>RISK MAPS</div>
        <nav className={styles.navigationLinks}>
          <a href="#annotations" className={styles.navLink}>
            PLAN ANNOTATIONS
          </a>
          <a href="#chatbot" className={styles.navLink}>
            AI CHATBOT
          </a>
          <a href="#about" className={styles.navLink}>
            ABOUT
          </a>
        </nav>
      </nav>
    </aside>
  );
}

export default Sidebar;
