import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
    const location = useLocation();

    return (
        <aside className={styles.sidebarColumn}>
            <nav className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <img
                        src="/assets/Light%20BG%20JPG.png"
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <ul className={styles.navLinks}>
                    {["REGULATIONS", "RISK MAPS", "PLAN ANNOTATIONS", "AI CHATBOT", "ABOUT"].map((item, index) => (
                        <li key={index} className={location.pathname === `/${item.toLowerCase().replace(" ", "-")}` ? styles.active : ""}>
                            <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
