import React from 'react';
 
const navContentDefault = [
    {value: "home", title: "Home"},
    {value: "experience", title: "Experience"},
    {value: "projects", title: "Projects"},
    {value: "about", title: "About"}
]

export function Nav(props) {
 

    return (
        <nav className="header__navbar">
            {
                props.children ? props.children : 
                <ul className="navbar_list">
                    {navContentDefault.map((item, index) => {
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
