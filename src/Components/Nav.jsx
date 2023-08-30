import React from 'react';


function Nav({props}) {
    let navContent = [
        {
            value: "about", title: "About"
        },
        {
            value: "experience", title: "Experience"
        },
        {
            value: "projects", title: "Projects"
        },
        {
            value: "contact", title: "Contact"
        }
    ]

    return (
        <nav className="header__navbar">
            {
                props.children ? props.children : 
                <ul className="navbar_list">
                    {navContent.map((item, index) => {
                        return (<li 
                                className="navbar_list-item"
                                key={index}
                                >
                                    <button 
                                        className="navbar_button"
                                        value={item.value} 
                                        onClick={props}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                        )
                    })}
                </ul>
            }
        </nav>
    )
}

export default Nav;
