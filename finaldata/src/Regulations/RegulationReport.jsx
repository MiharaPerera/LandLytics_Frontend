import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./ReportDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "../CommonComponents/TopBar";

const RegulationReport = () => {
  const location = useLocation();
  const regulations = location.state?.regulations || [];

  // Group by category
  const grouped = regulations.reduce((acc, reg) => {
    if (!acc[reg.category]) {
      acc[reg.category] = [];
    }
    acc[reg.category].push(reg);
    return acc;
  }, {});

  // Download report
  const handleDownloadClick = () => {
    let reportContent = "Regulation Report\n\n";

    Object.keys(grouped).forEach((category) => {
      reportContent += `${category}\n\n`;
      grouped[category].forEach((reg, index) => {
        reportContent += `${index + 1}. ${reg.full_text}\n`;
        reportContent += `(Regulation ${reg.id}, Clause ${reg.clause_number}, ${reg.sub_category})\n\n`;
      });
    });

    const blob = new Blob([reportContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "regulation_report.txt";
    link.click();
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <TopBar />
        <div className={styles.reportContent}>
          <h1 className={styles.title}>REPORT COMPLETE!</h1>
          <p className={styles.subTitle}>Applicable regulations identified:</p>

          <div className={styles.reportBox}>
            {Object.keys(grouped).map((category) => (
              <div key={category} className={styles.categoryGroup}>
                <h2 className={styles.categoryTitle}>{category}</h2>
                {grouped[category].map((reg, index) => (
                  <div key={index} className={styles.regulationItem}>
                    <p>{reg.full_text}</p>
                    <p className={styles.reference}>
                      (Regulation {reg.id}, Clause {reg.clause_number}, {reg.sub_category})
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button className={styles.downloadButton} onClick={handleDownloadClick}>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegulationReport;
