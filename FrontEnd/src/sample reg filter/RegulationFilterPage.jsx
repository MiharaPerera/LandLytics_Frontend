import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";
import styles from "./RegulationFilter.module.css";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";


function RegulationFilterPage() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
      subdivision: "",
      development: "",
      infrastructure: "",
      community: "",
      residential: "",
      building: "",
      planning: "",
      safety: "",
    });

    const handleFilterChange = (category, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [category]: value,
      }));
    };

  const handleGenerateReport = () => {
      navigate("/regulation-report", { state: { filters } }); // Make sure this route exists in your React Router
    };

  return (
      <div className={styles.container}>
          <div>
              <Sidebar/>
              <TopBar/>

          </div>
          {/* Back Button */}
          <main className={styles.mainContent}>
              <div className={styles.contentArea}>
                  <div>

                      {/* Page Title */}
                      <h1 className={styles.title}>FILTER REGULATIONS BY...</h1>

                      {/* Dropdown Filters */}
                      <div className={styles.filterSection}>
                          <h3>Land Subdivision</h3>
                          <FilterDropdown placeholderText="Eg: General Requirements"
                                          onChange={(value) => handleFilterChange("subdivision", value)}/>

                          <h3>Land Development</h3>
                          <FilterDropdown placeholderText="Eg: Street"
                                          onChange={(value) => handleFilterChange("development", value)}/>

                          <h3>Infrastructure</h3>
                          <FilterDropdown placeholderText="Eg: Road Access Rules"
                                          onChange={(value) => handleFilterChange("infrastructure", value)}/>

                          <h3>Community and Recreation</h3>
                          <FilterDropdown placeholderText="Eg: Community Space Requirement"
                                          onChange={(value) => handleFilterChange("community", value)}/>

                          <h3>Residential Development</h3>
                          <FilterDropdown placeholderText="Eg: Subdivision Exemption"
                                          onChange={(value) => handleFilterChange("residential", value)}/>

                          <h3>Building Development</h3>
                          <FilterDropdown placeholderText="Eg: Development Permit Validity"
                                          onChange={(value) => handleFilterChange("building", value)}/>

                          <h3>Planning and Surveying</h3>
                          <FilterDropdown placeholderText="Eg: Site Plan Requirements"
                                          onChange={(value) => handleFilterChange("planning", value)}/>

                          <h3>Building Safety</h3>
                          <FilterDropdown placeholderText="Eg: Fire Safety Compliance"
                                          onChange={(value) => handleFilterChange("safety", value)}/>
                      </div>

                      {/* Generate Report Button */}
                      <button className={styles.generateReportButton} onClick={handleGenerateReport}>
                          GENERATE REPORT
                      </button>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default RegulationFilterPage;
