import React, { useContext } from "react";
import styles from "./Note.module.css";

import NotesContext from "../../context/NotesContext";

const Note = () => {
    const { isOpen, currentNote } = useContext(NotesContext);

    return (
        <main className={`${styles.mainContent} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            { !currentNote?.title && 
                <>
                    <h1>Notes App</h1>
                    <p>Click on the Notes name to view it.</p>
                </>
            }
            {
                currentNote?.title && 
                <>
                    <h2>{currentNote.title}</h2>
                    <p>{currentNote.content}</p>
                </>
            }
        </main>
    );
};

export default Note;
