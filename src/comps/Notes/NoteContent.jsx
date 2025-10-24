import React,{useState, useContext} from 'react';
import Button from '../../comps/Button/Button';
import styles from "./Note.module.css";
import NotesContext from '../../context/NotesContext';

export default function NoteContent(){
     const { currentNote, updateCurrentNoteTitle } = useContext(NotesContext);

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(currentNote?.content || "");

    // const handleEditClick = () => {
    //     if(isEditing){
    //         updateCurrentNoteTitle(currentNote.id, editedTitle);
    //         setIsEditing(false);
    //     } else {
    //         setIsEditing(true);
    //         setEditedTitle(currentNote.title);
    //     }
    // };

    return (
        <>
            <div className={styles.noteHeader}>
                {isEditing ? (
                    // <input
                    //     type="text"
                    //     value={editedTitle}
                    //     onChange={(e) => setEditedTitle(e.target.value)}
                    //     className={styles.editInput}
                    //     autoFocus
                    // />
                    <textarea id="myNotes" rows="10" cols="50" placeholder="Start typing..."></textarea>
                ) : (
                    <textarea>{currentNote.content}</textarea>
                )}
                <div className={styles.buttonContainer}>
                    <Button onClick={handleEditClick}>{isEditing? 'Save': 'Edit' }</Button>
                </div>
            </div>
            <p>{currentNote.content}</p>
        </>
    );
}