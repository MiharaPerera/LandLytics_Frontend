"use client";
import React, { useState } from "react";
import styles from "./AnnotationsPage.module.css";
import MapComponent from "./MapComponent";
import "leaflet/dist/leaflet.css";

// Sidebar Item Component
const SidebarItem = ({ children, className, isActive }) => {
  return (
    <button
      className={`${styles.sidebarItem} ${className} ${isActive ? styles.active : ""}`}
    >
      {children}
    </button>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/a6e75c6a65e7127f6c9a5c7eef5c6de6b5481928c83100361df4d707554b831a?placeholderIfAbsent=true"
          alt="Logo"
          className={styles.logo}
        />
        <SidebarItem className={styles.regulations}>REGULATIONS</SidebarItem>
        <SidebarItem className={styles.riskmaps}>RISK MAPS</SidebarItem>
      </div>
      <SidebarItem className={styles.planAnnotations}>
        PLAN ANNOTATIONS
      </SidebarItem>
      <div className={styles.sidebarFooter}>
        <SidebarItem className={styles.aichatbot}>AI CHATBOT</SidebarItem>
        <SidebarItem>ABOUT</SidebarItem>
      </div>
    </nav>
  );
};

// Address Search Component
const AddressSearch = ({ onSearch }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.locatebyaddress}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/c80f4152634236f5917409044dfc804fac8487274c0fcdd651266c16e66c1db1?placeholderIfAbsent=true"
        alt="Location icon"
        className={styles.locationIcon}
      />
      <input
        type="text"
        placeholder="Locate by address..."
        className={styles.amInputDontrename}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        aria-label="Search for address"
      />
      <button type="submit" className={styles.searchButton} aria-label="Search">
        Search
      </button>
    </form>
  );
};

// Map Display Component
const MapDisplay = ({ onLocationSelect, selectedLocation }) => {
  return (
    <section className={styles.mapframe}>
      <MapComponent onLocationSelect={onLocationSelect} />
      {selectedLocation && (
        <div className={styles.selectedLocationInfo}>
          <p>
            Selected Location: {selectedLocation.lat.toFixed(6)},{" "}
            {selectedLocation.lng.toFixed(6)}
          </p>
        </div>
      )}
    </section>
  );
};

// Property Mapper Component
const PropertyMapper = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isManualMode, setIsManualMode] = useState(false);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const toggleManualMode = () => {
    setIsManualMode(!isManualMode);
  };

  const handleAddressSearch = (address) => {
    // In a real implementation, this would geocode the address
    console.log("Searching for address:", address);
  };

  return (
    <section className={styles.propertyMapperSection}>
      <h2 className={styles.mapyourproperty}>MAP YOUR PROPERTY...</h2>
      <AddressSearch onSearch={handleAddressSearch} />
      <button
        className={`${styles.manualselection} ${isManualMode ? styles.active : ""}`}
        onClick={toggleManualMode}
      >
        {isManualMode ? "Exit Manual Selection" : "Manual Selection"}
      </button>
      {isManualMode && (
        <p className={styles.selectionInstructions}>
          Click on the map to select your property location
        </p>
      )}
      <MapDisplay
        onLocationSelect={handleLocationSelect}
        selectedLocation={selectedLocation}
      />
    </section>
  );
};

// Header Component
const Header = () => {
  return (
    <header className={styles.upperbar}>
      <h1 className={styles.pageTitle}>ANNOTATE PROPERTY</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/49778df22ab12ef7d27a5eae0eed1f69aa9d3ab0d5ea393b3e9a1958ee16e2ac?placeholderIfAbsent=true"
        alt="User profile"
        className={styles.profileIcon}
      />
    </header>
  );
};

// Main Content Component
const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <Header />
      <PropertyMapper />
    </main>
  );
};

// Main AnnotationsPage Component
function AnnotationsPage() {
  return (
    <div className={styles.annotationsPage}>
      <div className={styles.pageContainer}>
        <div className={styles.column}>
          <Sidebar />
        </div>
        <div className={styles.mainColumn}>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default AnnotationsPage;
