import React from "react";
import styles from "./InputDesign.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/49778df22ab12ef7d27a5eae0eed1f69aa9d3ab0d5ea393b3e9a1958ee16e2ac?placeholderIfAbsent=true"
        alt="User Profile"
        className={styles.profileImage}
      />
    </header>
  );
};

export default Header;
