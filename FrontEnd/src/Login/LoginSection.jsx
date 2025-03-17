import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginSection() {
  const navigate = useNavigate();

  return (
    <div className={styles.loginColumn}>
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        {/* Add a button for signup navigation */}
        <p>Don't have an account?</p>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
}

export default LoginSection;
