import React from "react";
import styles from "./InputDesign.module.css";
import RegulationItem from "./RegulationItem";

function ReportResults() {
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
      <h2 className={styles.div13}>23 applicable regulations identified</h2>

      <section className={styles.div14}>
        <h3 className={styles.div15}>Zonal Regulations</h3>

        <RegulationItem
          text={regulations[0].text}
          citation={regulations[0].citation}
          containerClassName={styles.div16}
        />

        <RegulationItem
          text={regulations[1].text}
          citation={regulations[1].citation}
          containerClassName={styles.div19}
        />

        <RegulationItem
          text={regulations[2].text}
          citation={regulations[2].citation}
          containerClassName={styles.div22}
        />

        <RegulationItem
          text={regulations[3].text}
          citation={regulations[3].citation}
          containerClassName={styles.div25}
        />
      </section>

      <a href="#view-report" className={styles.div28}>
        <span>View Report</span>
        <span className={styles.span}>»</span>
      </a>

      <button className={styles.button}>DOWNLOAD REPORT</button>
    </section>
  );
}

export default ReportResults;