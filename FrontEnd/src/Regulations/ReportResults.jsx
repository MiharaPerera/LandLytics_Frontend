          containerClassName={styles.div16}
        />

        <RegulationItem
          text={regulations[1].text}
          citation={regulations[1].citation}
          containerClassName={styles.div19}
        />

        <RegulationItem
          text={regulations[2].text}
          citation={regulations[2].citation}
          containerClassName={styles.div22}
        />

        <RegulationItem
          text={regulations[3].text}
          citation={regulations[3].citation}
          containerClassName={styles.div25}
        />
      </section>

      <a href="#view-report" className={styles.div28}>
        <span>View Report</span>
        <span className={styles.span}>»</span>
      </a>

      <button className={styles.button}>DOWNLOAD REPORT</button>
    </section>
  );
}

export default ReportResults;