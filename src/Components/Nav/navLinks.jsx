import React, { useEffect, useState, useContext } from "react";
import { siteNavMap } from "../../static/site-nav-map"
import { NavContext } from "../nav.context";

/**
 * 
 * @param {MouseEventHandler} onclick 
 * @returns 
 */
export function NavLinks ({onclick}) {
    const [isNavMenuExpanded, setIsNavMenuExpanded] = useState(false);
    const activeNav = useContext(NavContext)
    useEffect(() => setIsNavMenuExpanded(false),[])
    /**
     * 
     * @param {React.MouseEvent<HTMLDivElement>} e 
     */
    const handleResponsiveMenuClick = () => {
        const navElement = document.querySelector('.main_navbar .main_navbar__navmenu')
        console.log(`Is responsive ---->    ${!isNavMenuExpanded}`)
        navElement.classList.toggle("responsive")
        setIsNavMenuExpanded(!isNavMenuExpanded);
    }

    return (
        <div className="main_navbar__navmenu" >
            {!isNavMenuExpanded ? 
                <span className="material-symbols-outlined nav_icon" onClick={handleResponsiveMenuClick} >
                    menu
                </span> :
                <span className="material-symbols-outlined nav_icon" onClick={handleResponsiveMenuClick} >
                    close
                </span>
            }
            <ul >
                {siteNavMap.map((nav,i) => {
                    let linkClassName = 'main_navbar__navlink'
                    linkClassName += (activeNav === nav.value) ? 
                        ' navbar_button__active' : ''

                    return (
                        <li className={linkClassName} 
                            data-nav-link={nav.value} 
                            key={i} 
                            onClick={onclick}
                        >
                            {nav.title}
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}