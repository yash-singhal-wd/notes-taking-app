// all import statements
import React from 'react';
import { createContext, useReducer } from "react";

//initial state
const initialState = {
    items: []
}
//create context
const NotesContext = createContext({
    items: []
});

//main reducer function
function reducer(state, action) {
    return state;
}

// context component
export function NotesContextProvider({children}){
    const [ notesState, dispatch] = useReducer(reducer, initialState);

    const notesCtx = {
        items: notesState.items
    };

    return (
        <NotesContext.Provider value={notesCtx}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;