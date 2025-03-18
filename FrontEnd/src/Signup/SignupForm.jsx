"use client";
import React from "react";
import InputField from "./InputField";
import styles from "./SignupPage.module.css";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <section className={styles.rightSection}>
        <h2 className={styles.createAccount}>Create a new account</h2>
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
          <button type="submit" className={styles.signupButton}>Sign Up</button>
        </form>
        <p className={styles.loginRedirect}>
          Already have an account?{" "}
          <span className={styles.loginLink} onClick={() => navigate("/login")}>
              Login here
            </span>
        </p>
      </section>
  );
};

export default SignupForm;
