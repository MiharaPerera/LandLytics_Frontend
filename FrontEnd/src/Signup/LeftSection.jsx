import React from "react";
import styles from "./SignupPage.module.css";

const LeftSection = () => {
  return (
    <section className={styles.leftSection}>
      <div className={styles.backgroundImage}>
        <img
          src="https://placehold.co/1000x800/2b3d4f/2b3d4f"
          alt="Building exterior"
        />
      </div>
      <img
        src="https://placehold.co/100x100/ffffff/ffffff"
        alt="LL Logo"
        className={styles.logo}
      />
      <h1 className={styles.tagline}>
        Plan your property dreams
        <br />
        with confidence...
      </h1>
    </section>
  );
};

export default LeftSection;
