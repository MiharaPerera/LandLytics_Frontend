import React from "react";

function SidebarNavItem({ title, isActive, className }) {
  return <button className={className}>{title}</button>;
}

export default SidebarNavItem;
