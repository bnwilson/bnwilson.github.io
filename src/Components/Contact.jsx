import React, {useState, useEffect} from 'react';
import '../styles/styles.css';
import '../styles/contact.css';
import gmailIcon from '../img/002-gmail-1.svg';
import discordIcon from '../img/009-discord-1.svg';
import linkedInIcon from '../img/linkedin_icon.svg';
import gitHubIcon from '../img/github_icon.svg';

const Contact = (props) => {
    const [copyMsg, setCopyMsg] = useState("");

    useEffect(() => setCopyMsg("Copied !"), [])

    const handleEmailCopy = (event) => {
        event.preventDefault();
        const emailText = document.querySelector('.email-text');
        emailText.select();
        document.execCommand('copy');
        const tooltip = document.querySelector('.contact-item__email-hidden-tooltip');
        tooltip.classList.toggle('unhidden-tooltip');
    }

    return (
        <div className="main__content-wrapper">
            {props.children}
            <span className="contact-subtitle">
                <h4>Feel free to contact me with any questions, remarks, feedback or just to shoot the breeze!</h4>
            </span>
            <div className="contact-wrapper">
                <span className="contact-email">
                    <input type="text" 
                        className="email-text" 
                        value="bwilson.projects@gmail.com"
                        readOnly
                    />
                <div className="button-msg-wrapper">
                    <button type="button"
                        className="copy-button"
                        onClick={handleEmailCopy}
                        >
                        Copy Email
                    </button>
                    <p className="contact-item__email-hidden-tooltip">{copyMsg}</p>
                </div>
                </span>
                <span className="contact-icons">
                    <a className="link-item" href="https://linkedin.com/li/bnwilson">
                        <img className="link-img" src={linkedInIcon} alt="LinkedIn"></img>
                    </a>
                    <a className="link-item" href="https://github.com/bnwilson/brad-portfolio/issues">
                        <img className="link-img" src={gitHubIcon} alt="GitHub"></img>
                    </a>
                    <a className="link-item" href="https://discordapp.com/channels/@me/178172848571940866">
                        <img className="link-img" src={discordIcon} alt="DiscordApp"></img>
                    </a>
                    <a className="link-item" href="mailto:bwilson.projects@gmail.com">
                        <img className="link-img" src={gmailIcon} alt="DiscordApp"></img>
                    </a>

                </span>        
            </div>
        </div>
    )
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Contact;