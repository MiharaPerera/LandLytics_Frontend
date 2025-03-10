"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FilterContent from "./FilterContent";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montaga&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.sampleRegFilter}>
        <div className={styles.layout}>
          <div className={styles.sidebarColumn}>
            <Sidebar />
          </div>
          <div className={styles.mainContent}>
            <Header />
            <FilterContent />
          </div>
        </div>
      </main>
    </>
  );
}

export default InputDesign;
