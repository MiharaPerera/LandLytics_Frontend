"use client";
import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";

const OptionCard = ({ backgroundSrc, text }) => {
  return (
    <div className={styles.optionCard}>
      <div className={styles.optionContent}>
        <img
          src={backgroundSrc}
          alt={`${text} background`}
          className={styles.optionBackground}
        />
        <p className={styles.optionText}>{text}</p>
      </div>
    </div>
  );
};

const OptionsSection = () => {
  return (
    <section>
      <h2 className={styles.lookingForTitle}>
        What are you looking for today?
      </h2>
      <div className={styles.optionsContainer}>
        <OptionCard
          backgroundSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/af1fe817ef52760e2cbc21c532d3a62c7168d7cf60d708dd3475fb6faf02666f?placeholderIfAbsent=true&apiKey=961e21a64e344f339dc230b663f13664"
          text="FILTERED"
        />
        <OptionCard
          backgroundSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f277339d4022d4ce349eaccadcf339da6e120d32769d83cf7d448f28c8ef19cf?placeholderIfAbsent=true&apiKey=961e21a64e344f339dc230b663f13664"
          text="ENVIRONMENTAL"
        />
      </div>
    </section>
  );
};

export default OptionsSection;