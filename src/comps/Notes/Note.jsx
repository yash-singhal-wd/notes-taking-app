import React, { useContext, useState } from "react";
import styles from "./Note.module.css";

import Button from '../../comps/Button/Button';
import NotesContext from "../../context/NotesContext";

// make save and Edit button work

const Note = () => {
    const { isOpen, currentNote } = useContext(NotesContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(currentNote?.title || "");

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedTitle(currentNote.title);
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
                <>
                    <div className={styles.noteHeader}>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                                className={styles.editInput}
                                autoFocus
                            />
                        ) : (
                            <h1>{currentNote.title}</h1>
                        )}
                        <div className={styles.buttonContainer}>
                            <Button onClick={handleEditClick}>{isEditing? 'Save': 'Edit' }</Button>
                        </div>
                    </div>
                    <p>{currentNote.content}</p>
                </>
            }
        </main>
    );
};

export default Note;
