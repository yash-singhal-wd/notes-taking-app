import React from "react";
import styles from "./Note.module.css";

const Note = ({ isOpen }) => {
  return (
    <main className={`${styles.mainContent} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <h1>Notes App</h1>
      <p>The main content resizes automatically based on sidebar state.</p>
      {/* You can render notes here */}
    </main>
  );
};

export default Note;
