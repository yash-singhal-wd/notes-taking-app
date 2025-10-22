import React from 'react';
import Button from '../../comps/Button/Button';
import styles from "./Note.module.css";

export default function NoteTitle( {isEditing, editedTitle, setEditedTitle, currentNote, handleEditClick}) {
    return (
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
    );
}