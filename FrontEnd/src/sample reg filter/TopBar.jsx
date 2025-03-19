import React from "react";
import styles from "./TopBar.module.css";
import {useNavigate} from "react-router-dom";

function TopBar() {
    const navigate = useNavigate();
    return (
        <header className={styles.topBar}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                <img src="/assets/" alt="Back" className={styles.img2}/>
            </button>
            <img src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/c56b8fa2c1789b1f2d3a49b5352ee6de37326fce5408f486ecf0750c75584e12?placeholderIfAbsent=true"
                 alt="Regulations icon" className={styles.img3}/>
        </header>
    );
}

export default TopBar;
