import React from "react";
import Sidebar from "../CommonComponents/Sidebar";
import MainContent from "./MainContent";
import styles from "./SampleRiskMapSelected.module.css";

function SampleRiskMapSelected() {
  return (
    <div className={styles.riskMapContainer}>
      <div className={styles.contentWrapper}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default SampleRiskMapSelected;
