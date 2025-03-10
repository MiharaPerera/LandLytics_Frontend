import React from "react";
import styles from "./InputDesign.module.css";

const CategoryFilter = ({ title, exampleText = "" }) => {
  return (
    <>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.dropdownBox}>
        <p className={styles.exampleText}>{exampleText}</p>
        <div className={styles.dropdownIcon}>
          <i className={styles.chevronIcon}>▼</i>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
