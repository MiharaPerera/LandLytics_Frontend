import styles from "./InputDesign.module.css";

export function DownloadStatus() {
  return (
    <main className={styles.mainSection}>
      <section className={styles.statusCard}>
        <div className={styles.statusContent}>
          <h1 className={styles.statusTitle}>DOWNLOAD COMPLETE!</h1>
          <p className={styles.statusMessage}>
            Redirecting to preview in 10s..
          </p>
        </div>
      </section>
    </main>
  );
}
