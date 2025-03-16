import React from "react";
import styles from "./LoginPage.module.css";
import ImageSection from "./ImageSection";
import LoginSection from "./LoginSection";

function LoginLayout() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <ImageSection />
        <LoginSection />
      </div>
    </section>
  );
}

export default LoginLayout;
