import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";
import AboutPage from "./About/SAMPLE_ABOUT.jsx";
import SAMPLE_REG_MAIN from "./Sample main/SAMPLE_REG_MAIN";

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
      </Routes>
    </Router>
  );
}

export default App;
