import React from 'react';
import gmailIcon from '../../img/002-gmail-1.svg';
import discordIcon from '../../img/009-discord-1.svg';
import linkedInIcon from '../../img/linkedin_icon.svg';
import gitHubIcon from '../../img/github_icon.svg';

const sourceMap = {
    "gmail": {
        src: gmailIcon,
        alt: "Gmail"
    },
    "discord": {
        src: discordIcon,
        alt: "Discord"
    },
    "linkedIn": {
        src: linkedInIcon,
        alt: "LinkedIn"
    },
    "github": {
        src: gitHubIcon,
        alt: "Github"
    }
}

export function ContactIcon ({classNameLink="link-item", classNameImg="link-img", href="", srcKey=""}) {
    const contactSrc = sourceMap[srcKey]
        
    return (
        <>
            <a className={classNameLink} href={href}>
                <img 
                    className={classNameImg} 
                    src={contactSrc.src} 
                    alt={contactSrc.alt}
                />
            </a>
        </>
    )
}