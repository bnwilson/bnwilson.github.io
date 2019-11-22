import React from 'react';
import Image from '../img/brad_professional.gif';
import '../styles/styles.css';

// Not used, passing props.children to Header Component from App, instead

export function Header(props) {
    return (
        <header className="header">
            {props.children}
        </header>
    )   
}

export function Logo() {
    return (
        <a
            className="header__image"
            href="/"
        >
            <img src={Image} alt="Brad"></img>
        </a>
    )
}

export function Title() {
    return (
        <h1 className="header__title">
            Brad Wilson's Portfolio
        </h1>
    )
}
