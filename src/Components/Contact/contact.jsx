import React, {useState} from 'react';
import '../../styles/contact.css';
import { copyTextContentsToClipboard } from '../../utils/clipboard';
import { ContactIcon } from './contact-icon';

export const Contact = ({gmailContact="", contactItems=[]}) => {
    const [copyMsg, setCopyMsg] = useState("");
    const [isCopyActive, setIsCopyActive] = useState(true);

    const handleEmailCopy = async (event) => {
        event.preventDefault();
        if (isCopyActive) {
            const emailText = document.querySelector('.email-text');
            
            const emailTextInnerHtml = emailText.textContent || emailText.value || emailText.innerHTML
            /* * Deprecated * * 
            emailText.select();
            document.execCommand('copy'); 
            */
            const result = await copyTextContentsToClipboard(emailTextInnerHtml, true);
            switch (result) {
                case "fail":
                    setCopyMsg("There was an issue copying to the clipboard =(");
                    break;
            
                case "success":
                    setCopyMsg("Copied!");
                    break;
            
                default:
                    break;
            }
        }
        const tooltip = document.querySelector('.contact-item__email-hidden-tooltip');
        tooltip.classList.toggle('unhidden-tooltip');
        setIsCopyActive((copyState) => { 
            const newCopyState = !copyState;
            if (newCopyState && copyMsg === 'Copied!') {
                setCopyMsg('');
            } 
            return !copyState
        })
    }

    return (
        
        <div className="contact-wrapper">
            <span className="contact-subtitle">
                <h4>Feel free to contact me with any questions, remarks, feedback or just to shoot the breeze!</h4>
            </span>
            <span className="contact-email">
                <input type="text" 
                    className="email-text" 
                    value={gmailContact}
                    readOnly
                />
                <div className="button-msg-wrapper">
                    <button type="button"
                        className={`copy-button${isCopyActive ? '' : ' inactive'}`}
                        onClick={handleEmailCopy}
                    >
                        {`${isCopyActive ? 'Copy Email' : ' Reset '}`}
                    </button>
                    <p className="contact-item__email-hidden-tooltip">{copyMsg}</p>
                </div>
            </span>
            <span className="contact-icons">
                {contactItems.map((contact, i) =>
                    <ContactIcon href={contact.href} srcKey={contact.contactKey} key={i} />
                )}

            </span>        
        </div>
    
    )
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
