import React from "react";
import styles from "./InputDesign.module.css";
import SidebarNavItem from "./SidebarNavItem";

function Sidebar() {
  const navItems = [
    { title: "REGULATIONS", isActive: false },
    { title: "RISK MAPS", isActive: false },
    { title: "PLAN ANNOTATIONS", isActive: true },
    { title: "AI CHATBOT", isActive: false },
    { title: "ABOUT", isActive: false },
  ];

  return (
    <aside className={styles.div2}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed347d3c10a3b1f94c9fda0a13226b394dee0403"
        alt="Logo"
        className="w-[130px] h-[119px] m-[21px_0_0_21px] max-sm:w-[60px] max-sm:h-[60px] max-sm:m-[10px]"
      />
      <nav className={styles.div3}>
        {navItems.map((item, index) => (
          <SidebarNavItem
            key={index}
            title={item.title}
            isActive={item.isActive}
            className={
              item.isActive
                ? styles.div6
                : index === 0
                  ? styles.div4
                  : index === 1
                    ? styles.div5
                    : index === 3
                      ? styles.div7
                      : styles.div8
            }
          />
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
