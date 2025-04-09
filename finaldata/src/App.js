import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";
import AboutPage from "./About/SAMPLE_ABOUT.jsx";
import SAMPLE_REG_MAIN from "./Sample main/SAMPLE_REG_MAIN";
import RegulationFilterPage from "./sample reg filter/RegulationFilterPage";
import RegulationReport from "./Regulations/RegulationReport";
import SampleRiskMapMain from "./MainRiskMap/SampleRiskMapMain";
import DownloadStatus from "./ReportDownload/DownloadStatus";
import DownloadDesign from "./ReportDownload/DownloadDesign";
import ANNOTATIONS_PAGE from "./Annotation/ANNOTATIONS_PAGE";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then(response => response.json())
      .then(data => console.log("Backend Health Check:", data))
      .catch(err => console.error("Error connecting to backend:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/regulations" element={<SAMPLE_REG_MAIN />} />
        <Route path="/regulation-filter" element={<RegulationFilterPage />} />
        <Route path="/regulation-report" element={<RegulationReport />} />
        <Route path="/download-report" element={<DownloadStatus />} />
        <Route path="/download-design" element={<DownloadDesign />} />
        <Route path="/risk-maps" element={<SampleRiskMapMain />} />
        <Route path="/plan-annotations" element={<ANNOTATIONS_PAGE />} />
        <Route path="/zonal/:zonalName" element={<div>Zonal Details Page (Under Development)</div>} />
        <Route path="/search-results" element={<div>Search Results Page (Under Development)</div>} />
      </Routes>
    </Router>
  );
}

export default App;

