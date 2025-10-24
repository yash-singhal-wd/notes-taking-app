import React, { useContext, useState } from "react";
import styles from "./Note.module.css";

import NotesContext from "../../context/NotesContext";
import NoteTitle from "./NoteTitle";
import NoteContent from "./NoteContent";

const Note = () => {
    const { isOpen, currentNote, updateCurrentNoteTitle } = useContext(NotesContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(currentNote?.title || "");

    const handleEditClick = () => {
        if(isEditing){
            updateCurrentNoteTitle(currentNote.id, editedTitle);
            setIsEditing(false);
        } else {
            setIsEditing(true);
            setEditedTitle(currentNote.title);
        }
    };

    return (
        <main className={`${styles.mainContent} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
            { !currentNote?.title && 
                <>
                    <h1>Notes App</h1>
                    <p>Click on the Notes name to view it.</p>
                </>
            }

            { currentNote?.title && 
                <NoteTitle isEditing={isEditing} editedTitle={editedTitle} 
                    setEditedTitle={setEditedTitle} currentNote={currentNote} 
                    handleEditClick={handleEditClick} 
                />
            }

            {1 && 
            
                <NoteContent/>
            }
        </main>
    );
};

export default Note;
