import React, { useState } from "react";
import SidemenuOption from "../SideMenuOptions/SidemenuOption";

import { Menu, X } from "lucide-react"; // npm install lucide-react
import styles from "./SideNavbar.module.css";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>
          {isOpen && <h2>Notely</h2>}
        </div>
        <SidemenuOption > Dashboard </SidemenuOption>
        <SidemenuOption > Dashboard </SidemenuOption>

      </aside>

      <button
        className={styles.toggleBtn}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </>
  );
};

export default SideNavbar;
