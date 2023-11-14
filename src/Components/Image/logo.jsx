import React from 'react';
import Image from '../../img/brad_professional.gif';

export function Logo() {
    return (
        <div style={{margin: "0 auto"}}>
            <a
                className="header__image"
                href="/"
            >
                <img src={Image} alt="Brad"></img>
            </a>
        </div>
    )
}