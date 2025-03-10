import React from "react";
import styles from "./LoginPage.module.css";

function ImageSection() {
  return (
    <div className={styles.imageColumn}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/851552b32efedf9cdc4b10e8a3d2fec155653546d7aeecb2f2d23e9bda2d42cb?placeholderIfAbsent=true"
        alt="Login illustration"
        className={styles.heroImage}
      />
    </div>
  );
}

export default ImageSection;
