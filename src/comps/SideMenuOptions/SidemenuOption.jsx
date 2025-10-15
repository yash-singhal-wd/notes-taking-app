import React from "react";
import styles from "./SidemenuOption.module.css";

export default function SidemenuOption({children}) {
    return (
        <nav className={styles.sidebarNav}>
            <ul>
            <li ><div onClick={() => console.log("Clicked here")}>{children}</div></li>
            </ul>
        </nav>
    );
}