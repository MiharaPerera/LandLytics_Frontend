import React from "react";
import styles from "./LoginPage.module.css";

function ImageSection() {
    return (
        <div className={styles.imageSection}>
            <img src="/assets/loginSignupImage.png" alt="Login Background" />
            <div className={styles.overlay}>
                <img src="/assets/Light%20BG%20JPG.png" alt="Logo" className={styles.logoImage} />
                <p className={styles.tagline}>
                    Plan your property dreams
                    <br />
                    with confidence...
                </p>
            </div>
        </div>
    );
}

export default ImageSection;


