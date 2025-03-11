"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function InputDesign() {
  return (
    <main className={styles.div}>
      <Sidebar />
      <MainContent />
    </main>
  );
}

export default InputDesign;
