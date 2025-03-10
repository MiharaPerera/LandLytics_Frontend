import React from "react";
import styles from "./InputDesign.module.css";
import CategoryFilter from "./CategoryFilter";

const FilterContent = () => {
  const categories = [
    { title: "Land Subdivision", example: "Eg: General Requirements" },
    { title: "Land Development", example: "Eg: Street" },
    { title: "Infrastructure", example: "Eg: Road Access Rules" },
    {
      title: "Community and Recreation",
      example: "Eg: Community Space Requirement",
    },
    { title: "Residential Development", example: "" },
  ];

  return (
    <section className={styles.filterContainer}>
      <h1 className={styles.filterTitle}>FILTER REGULATIONS BY...</h1>
      <div className={styles.categorySection}>
        {categories.map((category, index) => (
          <CategoryFilter
            key={index}
            title={category.title}
            exampleText={category.example}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterContent;
