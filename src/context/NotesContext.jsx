// all import statements
import React from 'react';
import { createContext, useReducer } from "react";

//initial state
const initialState = {
    notes: []
}
//create context
const NotesContext = createContext({
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
        notes: notesState.notes
    };

    return (
        <NotesContext.Provider value={notesCtx}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;