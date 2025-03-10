import React from "react";
import styles from "./MapSection.module.css";

function MapSection() {
  return (
    <section className={styles.mapContainer}>
      <div className={styles.mapFrame}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/586c6076911659bd8b52d08cbe85e5ceee2c1468f74ddcacc0a428686aa6b076?placeholderIfAbsent=true"
          alt="Property map"
          className={styles.mapImage}
        />
      </div>
    </section>
  );
}

export default MapSection;
