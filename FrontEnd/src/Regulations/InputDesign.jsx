"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import RegulationReport from "./RegulationReport";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Tiro+Devanagari+Hindi&display=swap"
        rel="stylesheet"
      />
      <main className={styles.div}>
        <Sidebar />
        <section className={styles.div8}>
          <header className={styles.div9}>
            <UserProfile />
          </header>
          <RegulationReport />
        </section>
      </main>
    </>
  );
}

export default InputDesign;