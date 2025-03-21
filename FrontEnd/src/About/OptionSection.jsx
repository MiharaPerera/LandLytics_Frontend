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
        <div className={styles.optionTextWrapper}>
          <p className={styles.optionText}>{text}</p>
        </div>
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
          backgroundSrc="./assets/filteredRegulationReport.png"
          text="FILTERED REGULATIONS REPORT"
        />
        <OptionCard
          backgroundSrc="./assets/environmentalRiskReport.png"
          text="ENVIRONMENTAL RISK REPORT"
        />
        <OptionCard
          backgroundSrc="./assets/propertyPlanAnnotaion.png"
          text="PROPERTY PLAN ANNOTATION"
        />
        <OptionCard
          backgroundSrc="./assets/chatbot.png"
          text="AI CHATBOT"
        />
      </div>
    </section>
  );
};

export default OptionsSection;