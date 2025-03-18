"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { DownloadStatus } from "./DownloadStatus";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&family=Tiro+Devanagari+Hindi&display=swap"
        rel="stylesheet"
      />
      <div className={styles.pageContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopBar />
          <DownloadStatus />
        </div>
      </div>
    </>
  );
}

export default InputDesign;
