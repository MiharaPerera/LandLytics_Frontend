import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    if (email && password) {
      navigate("/about"); // Redirect to About Page after login
    } else {
      alert("Please enter your credentials");
    }
  };

  return (
    <div className={styles.loginColumn}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSection;
