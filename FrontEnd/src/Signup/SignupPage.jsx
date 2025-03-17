import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupPage.module.css";
import SignupForm from "./SignupForm";
import LeftSection from "./LeftSection";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.signupContainer}>
      <LeftSection />
      <SignupForm />
      <p className={styles.loginRedirect}>
        Already have an account?{" "}
        <span className={styles.loginLink} onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
}

export default SignupPage;
