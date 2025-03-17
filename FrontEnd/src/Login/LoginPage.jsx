import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import LoginLayout from "./LoginLayout";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.loginPage}>
      <LoginLayout />
      <p className={styles.signupRedirect}>
        Don't have an account?{" "}
        <span className={styles.signupLink} onClick={() => navigate("/signup")}>
          Sign up here
        </span>
      </p>
    </main>
  );
}

export default LoginPage;
