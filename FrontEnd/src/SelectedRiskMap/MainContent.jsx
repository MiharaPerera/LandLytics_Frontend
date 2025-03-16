import React from "react";
import PropertyMapper from "./PropertyMapper";
import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.mainColumn}>
      <div className={styles.contentContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>FIND POTENTIAL RISKS</h1>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/eef3932ae5614d2699fa887aab7e745d/379c5d6612b1f7c4a2a82a1777c363ccf981588e8ae82986d73929a780e80a41?placeholderIfAbsent=true"
            alt="Risk icon"
            className={styles.headerIcon}
          />
        </header>
        <PropertyMapper />
      </div>
    </main>
  );
}

export default MainContent;
