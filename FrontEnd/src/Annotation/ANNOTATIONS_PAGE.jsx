import React from "react";
import styles from "./ANNOTATIONS_PAGE.module.css";
import Sidebar from "../CommonComponents/Sidebar";

function AnnotationsPage() {
  return (
    <div className={styles.annotationsSelectedPage}>
      <div className={styles.div}>
        <div className={styles.column}>
          <Sidebar />
        </div>
        <div className={styles.column2}>
          {/* Add the top bar with title */}
          <header className={styles.headerBar}>
            <h1 className={styles.headerTitle}>ANNOTATE PROPERTY</h1>
            <div className={styles.userIcon}>
            <img
                    src="./assets/profileIcon.png"
                    alt="Profile"
                    className={styles.profileIcon}
                  />
            </div>
          </header>

          <main className={styles.mainContent}>
            {/* Map container - replace the iframe with this */}
            <div className={styles.mapContainer}>
              {/* This would be your map component */}
              {/* For now, we'll show the embedded map as a placeholder */}
              <iframe
                src="https://sanali-site-plan-annotation.hf.space"
                title="Site Plan Annotation Model"
                width="100%"
                height="400px"
                style={{ border: "none", borderRadius: "8px" }}
                allow="clipboard-read; clipboard-write; encrypted-media"
              ></iframe>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AnnotationsPage;