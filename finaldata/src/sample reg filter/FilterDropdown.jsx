import React, { useState } from "react";
import styles from "./RegulationFilter.module.css";

const FilterDropdown = ({ placeholderText, items = [], onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    onChange(item); // Send selected item back to parent
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className={styles.dropdownBox}>
      {/* Dropdown Header */}
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.exampleText}>
          {value || placeholderText}
        </span>
        <img
          src={`${process.env.PUBLIC_URL}/assets/${isOpen ? "downArrow.png" : "downArrow.png"}`}
          alt="Toggle Dropdown"
          className={styles.img3}
        />
      </div>

      {/* Dropdown Options */}
      <div className={`${styles.itemsFrame} ${isOpen ? styles.itemsFrameOpen : ""}`}>
        {items.length === 0 ? (
          <div className={styles.dropdownItem}>No options available</div>
        ) : (
          items.map((item) => (
            <div
              key={item}
              className={`${styles.dropdownItem} ${item === value ? styles.activeItem : ""}`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
