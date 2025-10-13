import React, { useContext } from "react";
import styles from "./Note.module.css";

import NotesContext from "../../context/NotesContext";

const Note = () => {
    const { isOpen } = useContext(NotesContext);

    return (
        <main className={`${styles.mainContent} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <h1>Notes App</h1>
        <p>The main content resizes automatically based on sidebar state.</p>
        {/* You can render notes here */}
        </main>
    );
};

export default Note;
