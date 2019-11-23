import React, {useState, useEffect} from 'react';
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

export function Title(props) {
    const [title, setTitle] = useState("Brad Wilson")

    useEffect(() => {
        const title = (props.title) ? setTitle(props.title) : "Brad Wilson"
        setTitle(title);
    }, [props])

    return (
        <h1 className="header__title">
            {title}
        </h1>
    )
}
