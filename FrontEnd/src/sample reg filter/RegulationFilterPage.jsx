import React from "react";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "./FilterDropdown"; // Import dropdown component
import styles from "./RegulationFilter.module.css";

function RegulationFilterPage() {
  const navigate = useNavigate(); // Enable back navigation

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Regulation Filter</h1>
      <FilterDropdown placeholderText="Select a Regulation" iconSrc="/path/to/icon.png" />

      {/* Back button */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default RegulationFilterPage;
