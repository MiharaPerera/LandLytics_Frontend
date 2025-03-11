import React from "react";
import styles from "./InputDesign.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.div2}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed347d3c10a3b1f94c9fda0a13226b394dee0403"
        alt="App Logo"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        <div className={styles.div3}>REGULATIONS</div>
        <div className={styles.div4}>RISK MAPS</div>
        <div className={styles.div5}>PLAN ANNOTATIONS</div>
        <div className={styles.div6}>AI CHATBOT</div>
        <div className={styles.div7}>ABOUT</div>
      </nav>
    </aside>
  );
};

export default Sidebar;
