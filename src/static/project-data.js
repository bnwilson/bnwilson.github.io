module.exports = {
    projectCaption: "My collection of publically-shared projects. " +
                    "Feel free to reach out to me with any questions, or raise a Github issue!",
    projectHeaders: [
        "Project Name", "Description", "Tools Used", "Link"
    ],
    projectItems: [        
        {
            title: "BLA Illustrations Website",
            info: "(Work-in-progress) Website for Columbus-artist BLA Illustrations. Browse the Gallery for recent artwork, " +
                  "submit a commission request, drop a line, or purchase BLA original stickers, portraits, decals, and drawings. " +
                  "Utilizes functions, server-side rendering, and Netlify CMS so the artist can update her content independently.",
            tools: "ReactJS, NextJS, function, SendGrid (emails), Netlify, NetlifyCMS, reCaptcha, Responsive-design",
            urlLink: "www.blaillustrations.netlify.com",
            urlText: "Website Link"
        },
        {
            title: "D&D Character Creator (Frontend)",
            info: `Interactive Dungeons and Dragons\u00A9 character creator, choose your character Name, Race,` +
                  "Class, Alignment, and input your attributes and the app will calculate your stats," +
                  "bonus attributes, and stats!.",
            tools: "ReactJS Create React App, Javascript, html/css3, css grid/flex, fetch, Jest (testing)",
            urlLink: "https://github.com/DnDnU/dnd-character-sheet-frontend",
            urlText: "Github Link"
        },
        {
            title: "D&D Character Creater (Backend)",
            info: "API-layer for D&D, utilizes dnd5eapi.co to access up-to-date race and " +
                  "class data. Also handles the dice rolls for stats (6x d6 rolls and returns highest 3 values).",
            tools: "NodeJS, ExpressJS, node-fetch, jest, dnd5eapi.co (3rd-party API)",
            urlLink: "https://github.com/DnDnU/dnd-character-sheet-backend",
            urlText: "Github Link"
        },

        {
            title: "Blog site",
            info: "Create a user, choose your avatar, create and view yours and others' posts. " + 
                  "Built to be hosted locally with connection to a MySQL database.",
            tools: "NodeJS, ExpressJS, Handlebars, MVC, html/css3/grid/flex, sequelize (JS ORM for SQL)",
            urlLink: "https://github.com/WeCanCodeIT/blog-mastery-brad-richard",
            urlText: "Github Link"
        },
        {
            title: "Blackjack",
            info: "Just a simple game of Blackjack, starting with 300 chips. Playable on Github Pages (link to the right).",
            tools: "Vanilla JS, html/css, webpack, Github pages",
            urlLink: "https://bnwilson.github.io/blackjack-blackjack",
            urlText: "Play Now!"
        },
        {
            title: "Highstreet Hospital",
            info: "Console-based Hospital. Generates Hospital staff, patients, along with randomized names.",
            tools: "NodeJS, Javascript (ES6), readline-sync, https (REST call to name-generator)",
            urlLink: "https://github.com/bnwilson/projects/tree/master/high-street-hospital",
            urlText: "Github Link"
        },
        {
            title: "Fortune Teller",
            info: "Kada. Answer a series of questions and get your fortune read! The results are not always crystal clear.",
            tools: "NodeJS, Javascript (ES6), readline-sync (command input)",
            urlLink: "https://github.com/bnwilson/projects/tree/master/fortune-teller",
            urlText: "Github Link"
        },
        {
            title: "Guessing Game",
            info: "Kada. You get 3 tries to guess a number 1-10, if you don't guess the correct number in 3 tries you lose!" +
                  "Note:  the prompt will provide hints",
            tools: "NodeJS, Javascript (ES6), readline-sync (command input)",
            urlLink: "https://github.com/bnwilson/projects/tree/master/guessing-game",
            urlText: "Github Link"
        },
        {
            title: "Move Mac Screenshots",
            info: "Script which moves my MacOS Desktop screenshots to a screenshot folder.",
            tools: "Python",
            urlLink: "https://github.com/bnwilson/projects/tree/master/move-mac-screenshots",
            urlText: "Github Link"
        }
    ]
}