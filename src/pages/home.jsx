import React from "react";
import '../styles/home.css';
import { homeContent } from "../static/home-content";
import { homePeopleFeedback } from "../static/home-people-feedback";
import { WelcomeBanner } from "../Components/welcomeBanner";
import { SectionTitle } from "../Components/sectionTitle";
import { QuoteSlideshow } from "../Components/QuoteSlideshow/quoteSlideshow";

export default function Home () {
    const {welcome} = homeContent

    return (
        <div className="home_content__wrapper" >
            <WelcomeBanner welcomeText={welcome} />
            <SectionTitle title="What people are saying" />
            <QuoteSlideshow quotes={homePeopleFeedback} />
        </div>
    )
}

