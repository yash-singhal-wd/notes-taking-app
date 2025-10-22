// all import statements
import React from 'react';
import { createContext, useReducer } from "react";

//initial state
const initialState = {
    isOpen: true,
    notes: [{ title: "Note_1", content: ""}],
    currentNote: {}
}
//create context - for intellisense
const NotesContext = createContext({
    isOpen: true,
    notes: [],
    currentNote: {},
    updateCurrentNote: () => {},
    toggleSidebar: () => {},
    updateCurrentNoteTitle: () => {},
});

//main reducer function
function reducer(state, action) {
    if(action.type == "TOGGLE_SIDEBAR"){
        return {...state, isOpen: !state.isOpen};
    }
    if(action.type == "UPDATE_CURRENT_NOTE"){
        const {title, content} = action.payload
        return {...state, currentNote: {title, content} };
    }
    if(action.type == "UDATE_TITLE"){
        const { title, content } = action.payload;
        return {...state, currentNote: {title, content}}
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

    function updateCurrentNote( title, content){
        dispatch({
            type: "UPDATE_CURRENT_NOTE",
            payload: {title, content}
        });
    }

    function updateCurrentNoteTitle( title, content ){
        dispatch({
            type: "UPDATE_TITLE",
            payload: {title, content}
        });
    }

    const notesCtx = {
        isOpen: notesState.isOpen,
        notes: notesState.notes,
        currentNote: notesState.currentNote,
        toggleSidebar,
        updateCurrentNote,
        updateCurrentNoteTitle
    };

    return (
        <NotesContext.Provider value={notesCtx}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;