import React from "react";
import styles from "./ANNOTATIONS_PAGE.module.css";
import Sidebar from "../CommonComponents/Sidebar";
// import PropertyAnnotationHeader from "./PropertyAnnotationHeader";

function AnnotationsPage() {
  return (
    <div className={styles.annotationsSelectedPage}>
      <div className={styles.div}>
        <div className={styles.column}>
          <Sidebar />
        </div>
        <div className={styles.column2}>
          <main className={styles.div4}>
{/*             <PropertyAnnotationHeader /> */}

            {/* Gradio Model Display */}
            <section className={styles.annotationModel}>
              <h1 className={styles.title}>Upload Site Plan for Annotation</h1>
              <p className={styles.description}>
                Submit an image, and the model will annotate it automatically.
              </p>

              {/* Embed Hugging Face Space */}
              <iframe
                src="https://sanali-site-plan-annotation.hf.space"
                title="Site Plan Annotation Model"
                width="100%"
                height="600px"
                style={{ border: "none", borderRadius: "10px" }}
                allow="clipboard-read; clipboard-write; encrypted-media"
              ></iframe>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}

export default AnnotationsPage;