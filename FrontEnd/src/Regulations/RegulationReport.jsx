import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import RegulationItem from "./RegulationItem";
import TopBar from "../CommonComponents/TopBar";

const RegulationReport = () => {
  const navigate = useNavigate();

  // Navigating to Download Page on button click
  const handleDownloadClick = () => {
    // Preparing the content for the text file
    let reportContent = "Regulation Report\n\n";

    regulations.forEach((regulation, index) => {
      reportContent += `Regulation ${index + 1}:\n`;
      reportContent += `${regulation.text}\n`;
      reportContent += `Citation: ${regulation.citation}\n\n`;
    });

    // Creating a Blob object  containing the report content
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob); //Creating a temporary link for browser to download file content
    const a = document.createElement('a');
    a.href = url; // Pointing link to the file to be downloaded
    a.download = 'regulation-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Remove the element from DOM once the download starts
    URL.revokeObjectURL(url); // Clean up temporary file address/link after use
    navigate("/download-report");
  };

  // Regulations array. Currently, has dummy text
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
    <div className={styles.pageContainer}>
      <Sidebar />
      <TopBar />

        <section>
          <h1 className={styles.completeStatus}>REPORT COMPLETE!</h1>
          <p className={styles.regCount}>Applicable regulations identified:</p>

          <section className={styles.regContainer}>
            <h2 className={styles.regType}>General Regulations</h2>

            {regulations.map((regulation, index) => (
              <RegulationItem key={index} text={regulation.text} citation={regulation.citation}/>
            ))}
          </section>

          <div className={styles.viewReport}>
            <span>View Report »</span>
          </div>

          <button className={styles.downloadButton} onClick={handleDownloadClick}>DOWNLOAD REPORT</button>
        </section>
    </div>
  );
};

export default RegulationReport;
