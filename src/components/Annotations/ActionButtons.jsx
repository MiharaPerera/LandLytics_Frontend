import React from "react";
import styles from "./InputDesign.module.css";

function ActionButtons() {
  return (
    <div className={styles.div15}>
      <button className={styles.button}>DOWNLOAD REPORT</button>
      <a href="#" className={styles.div16}>
        <span>View Report</span>
        <div className={styles.div17}>
          <svg
            width="9"
            height="12"
            viewBox="0 0 9 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12V0L9 6L0 12Z" fill="#322E29" />
          </svg>
          <svg
            width="9"
            height="12"
            viewBox="0 0 9 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12V0L9 6L0 12Z" fill="#322E29" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default ActionButtons;
