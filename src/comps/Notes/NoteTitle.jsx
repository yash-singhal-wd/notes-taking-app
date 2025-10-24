import React,{useState, useContext} from 'react';
import Button from '../../comps/Button/Button';
import styles from "./Note.module.css";
import NotesContext from '../../context/NotesContext';

export default function NoteTitle() {
    const { currentNote, updateCurrentNoteTitle } = useContext(NotesContext);

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
        </>
    );
}