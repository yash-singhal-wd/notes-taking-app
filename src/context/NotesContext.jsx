// all import statements
import React from 'react';
import { createContext, useReducer } from "react";

//initial state
const initialState = {
    isOpen: true,
    notes: [{ id:1, title: "Note_1", content: ""}],
    currentNote: {}
}
//create context - for intellisense
const NotesContext = createContext({
    isOpen: true,
    notes: [],
    currentNote: {},
    selectCurrentNote: () => {},
    toggleSidebar: () => {},
    updateCurrentNoteTitle: () => {},
});

//main reducer function
function reducer(state, action) {
    if(action.type == "TOGGLE_SIDEBAR"){
        return {...state, isOpen: !state.isOpen};
    }
    if(action.type == "UPDATE_CURRENT_NOTE"){
        const {id} = action.payload;
        const currentNoteArr = state.notes.filter( note => note.id == id);
        return {...state, currentNote: currentNoteArr[0]};
    }

    if (action.type === "UPDATE_TITLE") {
        const { id, newTitle } = action.payload;

        const updatedNotes = state.notes.map(note =>
            note.id === id ? { ...note, title: newTitle } : note
        );

        const updatedCurrentNote =
            state.currentNote?.id === id
            ? { ...state.currentNote, title: newTitle }
            : state.currentNote;

        return { ...state, notes: updatedNotes, currentNote: updatedCurrentNote };
    }

    return state;
}

// context component
export function NotesContextProvider({children}){
    const [ notesState, dispatch] = useReducer(reducer, initialState);

    function toggleSidebar(){
        dispatch({
            type: "TOGGLE_SIDEBAR",
            payload: {}
        });
    }

    function selectCurrentNote(id){
        dispatch({
            type: "UPDATE_CURRENT_NOTE",
            payload: {id}
        });
    }

    function updateCurrentNoteTitle(id, newTitle){
        dispatch({
            type: "UPDATE_TITLE",
            payload: {id, newTitle}
        });
    }

    const notesCtx = {
        isOpen: notesState.isOpen,
        notes: notesState.notes,
        currentNote: notesState.currentNote,
        toggleSidebar,
        selectCurrentNote,
        updateCurrentNoteTitle
    };

    return (
        <NotesContext.Provider value={notesCtx}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;