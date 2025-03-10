"use client";
import React from "react";
import InputField from "./InputField";
import styles from "./SignupPage.module.css";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className={styles.rightSection}>
      <h2 className={styles.createAccount}>Create a new account.</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          type="text"
          placeholder="Username"
          icon={styles.tiTiUserI}
        />
        <InputField
          label="Email Address"
          type="email"
          placeholder="Email"
          icon={styles.tiTiMailI}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          icon={styles.tiTiLockI}
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          icon={styles.tiTiLockI}
        />
        <button type="submit" className={styles.signupButton}>
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
