import React,{useContext} from "react";
import styles from "./SidemenuOption.module.css";
import NotesContext from "../../context/NotesContext";

export default function SidemenuOption({children, onClick}) {
    return (
        <nav className={styles.sidebarNav}>
            <ul>
            <li ><div onClick={onClick}>{children}</div></li>
            </ul>
        </nav>
    );
}