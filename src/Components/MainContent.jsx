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

const MainContent = ({mainTitle, appContentKey}) => {
    const [content, renderContent] = useState(''); 
    
    useEffect(() => {
        let apps =  {
            "about": About,
            "contact": Contact,
            "projects": Projects,
            "experience": Experience
        }
        renderContent(apps[appContentKey])
    }, [appContentKey])
    
    return (
        <div className="main__content">
            <Title title={mainTitle} />
            {content}
        </div>
    )
}

export default MainContent;