// all import statements
import React from 'react';
import { createContext, useReducer } from "react";

//initial state
const initialState = {
    isOpen: true,
    notes: []
}
//create context
const NotesContext = createContext({
    isOpen: true,
    notes: []
});

//main reducer function
function reducer(state, action) {
    return state;
}

// context component
export function NotesContextProvider({children}){
    const [ notesState, dispatch] = useReducer(reducer, initialState);

    const notesCtx = {
        isOpen: notesState.isOpen,
        notes: notesState.notes
    };

    return (
        <NotesContext.Provider value={notesCtx}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;