import React, {useState, useEffect} from 'react';
import { NavTitle } from './navTitle';
// import { NavLinks } from './navLinks'
// import { NavContext } from '../nav.context';
// import { siteNavMap } from '../../static/site-nav-map';
import { siteTitles } from '../../static/site-titles';

// import Image from '../img/brad_professional.gif';

const navBarStyles = {
    "display": "flex", 
    "flexWrap": "nowrap", 
    "flexDirection": "row",
    "justifyContent": "spaceBetween"
}

/**
 * `props`::`{titles: {title:"", subTitle:""}, siteMap: [...siteMaps{title:"",value:""}]}`
 * @name Navbar - Site navigation bar with minimal state change
 * @description High-Order Component, contains page _title_ and _nav
 */
export function Navbar ({children}) {
    
    return (
        <div className='main_navbar' >
            <NavTitle 
                title={siteTitles.title} 
                subTitle={siteTitles.subTitle}
            />
            {/* <NavLinks /> */}
            {children}
        </div>
    )
    
}