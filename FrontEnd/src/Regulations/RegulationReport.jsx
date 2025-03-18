import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./InputDesign.module.css";
import RegulationItem from "./RegulationItem";

const RegulationReport = () => {
  const location = useLocation();
  const filters = location.state?.filters || {};

  const regulations = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
  ];

  return (
    <section className={styles.div11}>
      <h1 className={styles.div12}>REPORT COMPLETE!</h1>
      <p className={styles.div13}>23 applicable regulations identified</p>

      <section className={styles.div14}>
        <h2 className={styles.div15}>Zonal Regulations</h2>

        {regulations.map((regulation, index) => (
          <RegulationItem
            key={index}
            text={regulation.text}
            citation={regulation.citation}
          />
        ))}
      </section>

      <div className={styles.div28}>
        <span>View Report</span>
        <span className={styles.span}>»</span>
      </div>

      <button className={styles.button}>DOWNLOAD REPORT</button>
    </section>
  );
};

export default RegulationReport;
