// all import statements
import React from 'react';
import { createContext, useReducer } from "react";

//initial state
const initialState = {
    isOpen: true,
    notes: []
}
//create context - for intellisense
const NotesContext = createContext({
    isOpen: true,
    notes: [],
    toggleSidebar: () => {},
});

//main reducer function
function reducer(state, action) {
    if(action.type == "TOGGLE_SIDEBAR"){
        return {...state, isOpen: !state.isOpen};
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
        })
    }

    const notesCtx = {
        isOpen: notesState.isOpen,
        notes: notesState.notes,
        toggleSidebar
    };

    return (
        <NotesContext.Provider value={notesCtx}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;