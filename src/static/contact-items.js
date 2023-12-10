export const contactItems = {
    gmailContact: process.env.REACT_APP_CONTACT_GMAIL_TXT || "",
    contactLinks: [
        {
            href: process.env.REACT_APP_CONTACT_LINKEDIN || "",
            contactKey: "linkedIn"
        },
        {
            href: process.env.REACT_APP_GITHUB_PROFILE_URL || "",
            contactKey: "github"
        },
        {
            href: process.env.REACT_APP_CONTACT_DISCORD || "",
            contactKey: "discord"
        },
        {
            href: process.env.REACT_APP_CONTACT_GMAIL || "",
            contactKey: "gmail"
        }
    ]
}