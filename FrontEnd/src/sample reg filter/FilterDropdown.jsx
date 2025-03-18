import React, { useState, useRef, useEffect } from "react";
import styles from "./RegulationFilter.module.css";

function FilterDropdown({ placeholderText, iconSrc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const items = [
    "General Requirements",
    "Subdivision Standards",
    "Land Use Regulations",
    "Zoning Requirements",
    "Environmental Compliance",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button className={styles.header} onClick={toggleDropdown}>
        <span className={styles.exampleText}>{selectedItem || placeholderText}</span>
        <img src={iconSrc} alt="Dropdown arrow" className={styles.img3} />
      </button>
      {isOpen && (
        <div className={`${styles.itemsFrame} ${styles.itemsFrameOpen}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
