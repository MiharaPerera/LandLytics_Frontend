import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./SAMPLE_REG_MAIN.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import SearchSection from "./SearchSection";
import ZonalGrid from "./ZonalGrid";
import FilterDropdown from "../sample reg filter/FilterDropdown";

function SAMPLE_REG_MAIN() {
//     const navigate = useNavigate();

  return (
    <main className={styles.sampleRegMain}>
      <div className={styles.div}>
        <div className={styles.column}>
          <Sidebar />
        </div>
        <div className={styles.column2}>
          <div className={styles.div3}>
            <header className={styles.upperbar}>
              <h1 className={styles.findregulations}>FIND REGULATIONS</h1>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/c56b8fa2c1789b1f2d3a49b5352ee6de37326fce5408f486ecf0750c75584e12?placeholderIfAbsent=true"
                alt="Regulations icon"
                className={styles.img2}
              />
            </header>
            <SearchSection />
            <ZonalGrid />

{/*              */}{/* Button to navigate to the regulation filter page */}
{/*             <button */}
{/*               className={styles.tryFilterButton} // Add styling in CSS */}
{/*               onClick={() => navigate("/regulation-filter")} */}
{/*             > */}
{/*               Try Regulation Filter */}
{/*             </button> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SAMPLE_REG_MAIN;
