import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import About from '../pages/about';
// import Contact from '../pages/contact';
import Projects from '../pages/projects';
import Home from '../pages/home';
import { Experience } from '../pages/experience';

/* Old - keeping for reference */
/* const pageMap =  {
    "about": (<About> <Title title="A Little About Me"/></About>),
    "contact": (<Contact> <Title title="Contact Information"/></Contact>),
    "projects": (<Projects> <Title title="My Projects"/></Projects>),
    "experience": (<Experience> <Title title="My Experience"/></Experience>)
} */

const pageMap = {
    "home":       <Home />,
    "about":      <About />,
    "experience": <Experience />,
    "projects":   <Projects />
}

const MainContent = ({appContentKey=""}) => {
    const [mainContentKey, setMainContentKey] = useState('');
    
    useEffect(() => {
        if (appContentKey && Object.keys(pageMap).includes(appContentKey)) {
            setMainContentKey(appContentKey)
        } else {
            setMainContentKey("home")
        }
    }, [appContentKey])

        
    return (
        <main className="main__content">
            {pageMap[mainContentKey] || <span>No content can be rendered</span> }
        </main>
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