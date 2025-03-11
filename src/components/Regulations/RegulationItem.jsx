import React from "react";
import styles from "./InputDesign.module.css";

const RegulationItem = ({ text, citation }) => {
  return (
    <article className={styles.div16}>
      <p className={styles.div17}>{text}</p>
      <cite className={styles.div18}>{citation}</cite>
    </article>
  );
};

export default RegulationItem;
