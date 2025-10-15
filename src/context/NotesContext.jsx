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
});

//main reducer function
function reducer(state, action) {
    if(action.type == "TOGGLE_SIDEBAR"){
        return {...state, isOpen: !state.isOpen};
    }
    if(action.type == "UPDATE_NOTE"){
        return {...state, currentNote: {title: payload.title, content: payload.content} };
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

    function updateCurrentNote( title, content){
        dispatch({
            type: "UPDATE_NOTE",
            payload: {title, content}
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