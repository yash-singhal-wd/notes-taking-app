import React from "react";
import styles from "./SidemenuOption.module.css";

export default function SidemenuOption({children}) {
    return (
        <nav className={styles.sidebarNav}>
            <ul>
            <li ><a>{children}</a></li>
            </ul>
        </nav>
    );
}