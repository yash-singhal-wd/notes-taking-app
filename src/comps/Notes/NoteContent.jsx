import React,{useState, useContext} from 'react';
import Button from '../../comps/Button/Button';
import NotesContext from '../../context/NotesContext';
import styles from "./Note.module.css";

export default function NoteContent(){
     const { currentNote } = useContext(NotesContext);

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
                    <textarea id="myNotes" rows="10" cols="50" placeholder="Start typing for notes..."></textarea>
                ) : (
                    <textarea placeholder="Start typing for notes...">{currentNote.content}</textarea>
                )}
                <div className={styles.buttonContainer}>
                    <Button>{isEditing? 'Save': 'Edit' }</Button>
                </div>
            </div>
            <p>{currentNote.content}</p>
        </>
    );
}