import React from 'react';
import Image from '../img/brad_professional.gif';
import '../styles/styles.css';

function Logo() {
    return (
        <div>
            <a
                className="header__image"
                href="/"
            >
                <img src={Image} alt="Brad"></img>
            </a>
        </div>
    )
}

export default Logo;