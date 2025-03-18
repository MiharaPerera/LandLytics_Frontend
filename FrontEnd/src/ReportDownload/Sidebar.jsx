import styles from "./InputDesign.module.css";

export function Sidebar() {
  const navItems = [
    "REGULATIONS",
    "RISK MAPS",
    "PLAN ANNOTATIONS",
    "AI CHATBOT",
    "ABOUT",
  ];

  return (
    <aside className={styles.sidebar}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7969611cbf7211f85f1177c5b728cc761d491d65"
        alt="app logo"
        className={styles.logo}
      />
      <nav className={styles.navigation}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className={styles.navLink}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
