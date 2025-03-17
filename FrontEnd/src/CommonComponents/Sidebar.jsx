import React from "react";
import { Link } from "react-router-dom";
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
{/*           <h2 className={styles.regulations}>REGULATIONS</h2> */}
        </div>
{/*         <div className={styles.riskMaps}>RISK MAPS</div> */}
        <ul className={styles.navLinks}>
          <li><Link to="/regulations">Regulations</Link></li>
          <li><Link to="/risk-maps">Risk Maps</Link></li>
          <li><Link to="/plan-annotations">Plan Annotations</Link></li>
          <li><Link to="/ai-chatbot">AI Chatbot</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
