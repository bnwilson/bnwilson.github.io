import React from 'react';
import Image from '../img/brad_professional.gif';
import Nav from './Nav';
import '../styles/styles.css';

function Header() {
    return (
        <header className="header">
            <Logo />
            <Title />
            <Nav />
        </header>
    )   
}

function Logo() {
    return (
        <a
            className="header__image"
            href="/"
        >
            <img src={Image} alt="Brad"></img>
        </a>
    )
}

function Title() {
    return (
        <h1 className="header__title">
            Brad Wilson's Portfolio
        </h1>
    )
}

export default Header;