import React from "react";
import styles from "./InputDesign.module.css";
import ActionButtons from "./ActionButtons";

function AnnotationResults() {
  return (
    <article className={styles.div11}>
      <h1 className={styles.div12}>ANNOTATION COMPLETE!</h1>
      <p className={styles.div13}>2 Errors, 3 Suggestions identified...</p>
      <section className={styles.div14}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/baaac395dda223ada9ba3063ef9000bbdef29912"
          alt="Regulation list"
          className="w-full h-auto"
        />
      </section>
      <ActionButtons />
    </article>
  );
}

export default AnnotationResults;
