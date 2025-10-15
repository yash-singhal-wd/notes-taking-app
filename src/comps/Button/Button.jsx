import React from 'react';
import styles from './Button.module.css'

export default function Button({children, onClick}){
    return (
        <button onClick={onClick}>{children}</button>
    )
}