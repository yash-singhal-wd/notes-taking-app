import React from "react";
import {useState} from "react";

import { NotesContextProvider } from "./context/NotesContext";
import SideNavbar from "./comps/SideNavbar/SideNavbar";
import Note from "./comps/Notes/Note";
// make 3 main screens - collapsible sidenavbar, a normal navbar and main pages of notes
// SideNavbar, Navbar, MainScreen
// localstorage feature - useEffect - for persistence
// ContextAPI and useReducer

//Features:
//Theme feature
//Sidebar Management
//CRUD operations on Notes

// Optional:
//Framer Motion for subtle animations
//Add Markdown preview mode
//Add a search bar to filter notes
//Add a “recently edited” list
//

export default function App() {
  return (
    <NotesContextProvider >
      <SideNavbar />
      <Note/>
    </NotesContextProvider>

  )
}
