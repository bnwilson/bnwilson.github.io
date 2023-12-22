import React from "react";
import { SelfPortrait } from "./Image/selfPortrait";
import { formatBodyText } from "../utils/parsers";
import { SectionTitle } from "./sectionTitle";

/** Callback for bodyContent.map(...) 
 * 
 * Assigns value to 'key' prop for `non-[string|array]` item(s)
*/
const bodyContentCallback = ((contentItem, index) => {
    if (!['string', 'array'].includes(typeof contentItem) ) {
        let content = contentItem
        try {
            return React.cloneElement(contentItem, {key: index});            
        } catch (err) {
            console.log(err);
            return contentItem;
        }
    } else {
        return contentItem;
    }
})

export function WelcomeBanner ({welcomeText={headingText:"", bodyText:"", codeContent:[]}}) {
    const heading = welcomeText.headingText || "Welcome to { error:  'No heading text arg passed, you crazy dev.' }";
    const body = welcomeText.bodyText || "{ error:  'Missing riveting, tear-inducing, rollercoaster-of-emotion content' }";
    const bodyContent = formatBodyText(body, welcomeText.codeContent)
    
    return (
        <article className="home_content__welcome" >
            <SelfPortrait wrapperClassName="home_content__img_wrapper" imgClassName="home_content__portrait" />
            <h2 className="home_content__welcome_heading">{heading}</h2>
            <p className="home_content__welcome_body">{bodyContent.map(bodyContentCallback)}</p>
            {/* <article>
            </article> */}
        </article>
    )
}