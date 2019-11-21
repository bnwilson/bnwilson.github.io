import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Experience from './Experience';

const Title = ({title}) => {
    return (
        <h1 className="main__content-title">
            {title}
        </h1>
    )
}

const MainContent = ({appContentKey}) => {
    const [content, setData] = useState('');
    
    useEffect(() => {

        let apps =  {
            "about": (<About> <Title title="A Little About Me"/></About>),
            "contact": (<Contact> <Title title="Contact Information"/></Contact>),
            "projects": (<Projects> <Title title="My Projects"/></Projects>),
            "experience": (<Experience> <Title title="My Experience"/></Experience>)
        }
        setData(apps[appContentKey])
    }, [appContentKey])
    
    return (
        <div className="main__content">
            {content}
        </div>
    )
}

export default MainContent;

// let apps =  {
//     "about": (<About> <Title title="A Little About Me"/></About>),
//     "about": [About, "A Little About Me"],

//     "contact": [Contact, "Contact Information"],
//     "projects": [Projects, "My Projects"],
//     "experience": [Experience, "My Experience"]
// }