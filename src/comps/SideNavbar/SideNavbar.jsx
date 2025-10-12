import React, { useState } from "react";
import styles from "./SideNavbar.module.css";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>
          {isOpen && <h2>Notes</h2>}
        </div>

        <nav className={styles.sidebarNav}>
          <ul>
            <li><a href="#dashboard">{isOpen? 'Dashboard' : undefined}</a></li>
            <li ><a href="#notes">{isOpen? 'Notes' : undefined}</a></li>
          </ul>
        </nav>
      </aside>

      <button
        className={styles.toggleBtn}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </>
  );
};

export default SideNavbar;
