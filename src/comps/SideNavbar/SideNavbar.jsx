import React, { useContext } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

import SidemenuOption from "../SideMenuOptions/SidemenuOption";
import styles from "./SideNavbar.module.css";

import NotesContext from "../../context/NotesContext";

const SideNavbar = () => {

  const {isOpen, toggleSidebar, notes} = useContext(NotesContext);

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>
          {isOpen && <h2>Notely</h2>}
        </div>
        {isOpen && <button>Add note</button>}
        {isOpen && notes.map((item, i) => <SidemenuOption key={i}>{item.title} </SidemenuOption>)}
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
