import React from "react";
import styles from "./SAMPLE_REG_MAIN.module.css";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/a6e75c6a65e7127f6c9a5c7eef5c6de6b5481928c83100361df4d707554b831a?placeholderIfAbsent=true"
        alt="Logo"
        className={styles.img}
      />
      <h2 className={styles.regulations}>REGULATIONS</h2>
      <ul className={styles.div2}>
        <li className={styles.riskMaps}>RISK MAPS</li>
        <li className={styles.planannotations}>PLAN ANNOTATIONS</li>
        <li className={styles.aichatbot}>AI CHATBOT</li>
        <li className={styles.about}>ABOUT</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
