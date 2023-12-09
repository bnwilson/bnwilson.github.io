import React from "react";
import '../styles/home.css';
/* Components */
import { WelcomeBanner } from "../Components/welcomeBanner";
import { SectionTitle } from "../Components/sectionTitle";
import { QuoteSlideshow } from "../Components/QuoteSlideshow/quoteSlideshow";
import { ExperienceHighlights } from "../Components/Experience";
import { Contact } from "../Components/Contact";
/* Static Content */
import { homeContent } from "../static/home-content";
import { homePeopleFeedback } from "../static/home-people-feedback";
import { contactItems } from "../static/contact-items"

export default function Home () {
    const {welcome, whatIBring} = homeContent
    const {gmailContact, contactLinks} = contactItems

    return (
        <div className="home_content__wrapper" >
            <WelcomeBanner welcomeText={welcome} />
            <SectionTitle title={whatIBring.headingText} />
            <ExperienceHighlights experienceHighlights={whatIBring.experienceHighlights} />
            <SectionTitle title="Contact Me" />
            <Contact gmailContact={gmailContact} contactItems={contactLinks} />
            <SectionTitle title="What people are saying" />
            <QuoteSlideshow quotes={homePeopleFeedback} />
        </div>
    )
}

