import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyMapper.module.css";

function PropertyMapper() {
    const navigate = useNavigate();

  return (
    <section className={styles.mapperContainer}>
      <h2 className={styles.title}>MAP YOUR PROPERTY...</h2>
      <div className={styles.searchBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/c80f4152634236f5917409044dfc804fac8487274c0fcdd651266c16e66c1db1?placeholderIfAbsent=true"
          alt="Search icon"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Locate by address"
          className={styles.searchInput}
        />
      </div>
      <button className={styles.manualButton} onClick={() => navigate("/risk-map-selected")}>
          Manual Selection
        </button>
      <div className={styles.mapFrame}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/2696251a6d0db8e691be1620366dc37cc782f2fa61ce974d29bbb3f2497031fb?placeholderIfAbsent=true"
          alt="Map view"
          className={styles.mapImage}
        />
      </div>
    </section>
  );
}

export default PropertyMapper;
