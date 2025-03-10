"use client";
import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/c80f4152634236f5917409044dfc804fac8487274c0fcdd651266c16e66c1db1?placeholderIfAbsent=true"
          alt="Search icon"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Locate by address..."
          className={styles.searchInput}
          aria-label="Search address"
        />
      </div>
      <button className={styles.manualButton}>Manual Selection</button>
    </div>
  );
}

export default SearchBar;
