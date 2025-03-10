"use client";
import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapComponent.module.css";

// Fix for Leaflet marker icon issue in Next.js/React
const fixLeafletIcon = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
};

const MapComponent = ({ onLocationSelect }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    // Initialize map only on client-side
    if (typeof window !== "undefined" && !mapInitialized) {
      fixLeafletIcon();

      // Initialize map if it doesn't exist yet
      if (!mapInstanceRef.current && mapRef.current) {
        // Default view centered on a general US location
        const map = L.map(mapRef.current).setView([37.7749, -122.4194], 13);

        // Add OpenStreetMap tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add click event to map
        map.on("click", (e) => {
          const { lat, lng } = e.latlng;

          // Update marker position or create new marker
          if (markerRef.current) {
            markerRef.current.setLatLng(e.latlng);
          } else {
            markerRef.current = L.marker(e.latlng).addTo(map);
          }

          // Call the callback with selected location
          if (onLocationSelect) {
            onLocationSelect({ lat, lng });
          }
        });

        // Store map instance in ref
        mapInstanceRef.current = map;
        setMapInitialized(true);

        // Handle window resize to update map size
        const handleResize = () => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        };

        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
          if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
            mapInstanceRef.current = null;
          }
        };
      }
    }
  }, [onLocationSelect, mapInitialized]);

  return (
    <div className={styles.mapContainer}>
      <div
        ref={mapRef}
        className={styles.leafletMap}
        aria-label="Interactive property map"
      ></div>
    </div>
  );
};

export default MapComponent;
