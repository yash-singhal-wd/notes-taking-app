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
          {isOpen && <h2>Notely</h2>}
        </div>

        <nav className={styles.sidebarNav}>
          <ul>
            <li><a>{isOpen? 'Dashboard' : undefined}</a></li>
            <li ><a>{isOpen? 'Pages' : undefined}</a></li>
          </ul>
        </nav>
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
