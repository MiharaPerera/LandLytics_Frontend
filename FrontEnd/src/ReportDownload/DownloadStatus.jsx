import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DownloadDesign.module.css";

export function DownloadStatus() {
    const navigate = useNavigate(); //Initialize navigation function
//     const [countdown, setCountdown] = useState(10); //Set countdown (change to 15 if needed)
//
//     useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prev) => prev - 1);
//     }, 1000);
//
//     //Redirect back to Regulation Report when countdown reaches 0
//     if (countdown === 0) {
//       navigate("/regulation-report");
//     }
//
//     return () => clearInterval(timer);
//     }, [countdown, navigate]);

    useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/regulation-report"); // Redirect back after 10 seconds
        }, 10000);

        return () => clearTimeout(timer); // Cleanup timer
      }, [navigate]);

  return (
    <main className={styles.mainSection}>
      <section className={styles.statusCard}>
        <div className={styles.statusContent}>
          <h1 className={styles.statusTitle}>DOWNLOAD COMPLETE!</h1>
          <p className={styles.statusMessage}>
            Redirecting to preview in 10s..
          </p>
        </div>
      </section>
    </main>
  );
}

export default DownloadStatus;