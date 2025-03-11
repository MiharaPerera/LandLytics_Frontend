import React from "react";
import styles from "./InputDesign.module.css";
import TopBar from "./TopBar";
import AnnotationResults from "./AnnotationResults";

function MainContent() {
  return (
    <section className={styles.div9}>
      <TopBar />
      <AnnotationResults />
    </section>
  );
}

export default MainContent;
