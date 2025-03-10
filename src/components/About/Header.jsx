"use client";
import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88cadc4378370d081d8b63173825d2ab671c922885297d1afa2ca4dc36620e78?placeholderIfAbsent=true&apiKey=961e21a64e344f339dc230b663f13664"
          alt="Search icon"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c56b8fa2c1789b1f2d3a49b5352ee6de37326fce5408f486ecf0750c75584e12?placeholderIfAbsent=true&apiKey=961e21a64e344f339dc230b663f13664"
        alt="Profile"
        className={styles.profileIcon}
      />
    </header>
  );
};

export default Header;
