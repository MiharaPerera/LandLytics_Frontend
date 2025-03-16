"use client";
import React from "react";
import LeftSection from "./LeftSection";
import SignupForm from "./SignupForm";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montaga&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.sampleSignupPage}>
        <section className={styles.mainframe}>
          <LeftSection />
          <SignupForm />
        </section>
      </main>
    </>
  );
};

export default SignupPage;
