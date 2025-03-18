import React from "react";
import styles from "./LoginPage.module.css";
import ImageSection from "./ImageSection";
import LoginForm from "./LoginForm";

function LoginLayout() {
    return (
        <div className={styles.loginCard}>
            <ImageSection />
            <LoginForm />
        </div>
    );
}

export default LoginLayout;

