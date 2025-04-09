import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";
import axios from "axios";
import styles from "./RegulationFilter.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "./TopBar";

function RegulationFilterPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});
  const [regulations, setRegulations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      setLoading(true);
      axios
        .get("http://localhost:5000/api/regulation-filter", { params: filters })
        .then((response) => setRegulations(response.data))
        .catch((error) => {
          console.error("Error fetching regulations:", error);
          setError("Failed to load regulations.");
        })
        .finally(() => setLoading(false));
    }
  }, [filters]);

  const handleGenerateReport = () => {
    if (regulations.length === 0) {
      setError("Please select filters to generate a report.");
      return;
    }
    navigate("/regulation-report", { state: { regulations } });
  };

  const categories = {
    subdivision: [
      "General Requirements",
      "Survey Requirements",
      "Survey Plan Standards",
      "Plot Size Regulations",
    ],
    development: ["Street", "Road and Water Body Compliance"],
    infrastructure: ["Road Access Rules"],
    community: ["Community Space Requirement"],
    residential: ["Subdivision Exemption"],
    building: ["Development Permit Validity"],
    planning: ["Site Plan Requirements"],
    safety: ["Fire Safety Compliance"],
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <TopBar />
      <main className={styles.mainContent}>
        <div className={styles.contentArea}>
          <h1 className={styles.title}>FILTER REGULATIONS BY...</h1>

          {error && <p className={styles.error}>{error}</p>}

          {/* Render FilterDropdowns */}
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3>{category.replace(/_/g, " ")}</h3>
              <FilterDropdown
                placeholderText={`Eg: Select ${category}`}
                items={items}
                value={filters[category] || ""}
                onChange={(value) => handleFilterChange(category, value)}
              />
              <br />
            </div>
          ))}

          {/* Regulations Display */}
          <div className={styles.regulationList}>
            {loading ? (
              <p>Loading regulations...</p>
            ) : regulations.length > 0 ? (
              regulations.map((reg) => (
                <div key={reg.clause_number} className={styles.regulationItem}>
                  <h4>
                    Clause {reg.clause_number} - {reg.category} (
                    {reg.sub_category})
                  </h4>
                  <p>{reg.full_text}</p>
                </div>
              ))
            ) : (
              <p>No regulations found. Please adjust filters.</p>
            )}
          </div>

          <button
            className={styles.generateReportButton}
            onClick={handleGenerateReport}
          >
            GENERATE REPORT
          </button>
        </div>
      </main>
    </div>
  );
}

export default RegulationFilterPage;
