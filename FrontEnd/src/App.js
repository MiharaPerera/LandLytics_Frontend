import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";
import AboutPage from "./About/SAMPLE_ABOUT.jsx";
import SAMPLE_REG_MAIN from "./Sample main/SAMPLE_REG_MAIN";
import RegulationFilterPage from "./sample reg filter/RegulationFilterPage";
import RegulationReport from "./Regulations/RegulationReport"
import SampleRiskMapMain from "./MainRiskMap/SampleRiskMapMain";
import SampleRiskMapSelected from "./SelectedRiskMap/SampleRiskMapSelected";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route - Redirect to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Main Home Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Regulation Main Page */}
        <Route path="/regulations" element={<SAMPLE_REG_MAIN />} />

        {/* Regulation Filtering Page */}
        <Route path="/regulation-filter" element={<RegulationFilterPage />} />

        {/* Regulation Report Page */}
        <Route path="/regulation-report" element={<RegulationReport />} />

        {/* Risk Map Page */}
        <Route path="/risk-maps" element={<SampleRiskMapMain />} />

        {/* Risk Map Selected Page */}
                <Route path="/risk-map-selected" element={<SampleRiskMapSelected />} />
      </Routes>
    </Router>
  );
}

export default App;
