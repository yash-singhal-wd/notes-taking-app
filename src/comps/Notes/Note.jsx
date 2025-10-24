import React, { useContext, useState } from "react";
import styles from "./Note.module.css";

import NotesContext from "../../context/NotesContext";
import NoteTitle from "./NoteTitle";
import NoteContent from "./NoteContent";

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
            { currentNote?.title && <NoteTitle/> } 
            { currentNote && <NoteContent/>}
        </main>
    );
};

export default Note;
