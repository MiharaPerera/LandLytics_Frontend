"use client";
import * as React from "react";
import styles from "./LoginPage.module.css";
import LoginLayout from "./LoginLayout";

function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <LoginLayout />
    </main>
  );
}

export default LoginPage;
