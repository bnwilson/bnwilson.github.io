module.exports = {
    projectCaption: "My collection of publically-shared projects. " +
                    "Feel free to reach out to me with any questions, or raise a Github issue!",
    projectHeaders: [
        "Project Name", "Description", "Tools Used", "Link"
    ],
    projectSections: [
        {
            id: "react",
            name: "ReactJS",
            caption: "Web apps and sites utilizing ReactJS"
        }, 
        {
            id: "nodejs",
            name: "NodeJS / Javascript",
            caption: "Node.js apps with no major framework"
        }, 
        {
            id: "misc",
            name: "Misc. Apps and Scripts",
            caption: "Miscellaneous apps, scripts, coding challenge"
        }
    ],
    projectItems: [
        {
            title: "Portfolio (Source Code)",
            info: "Github repo containing the source code for this portfolio page.  " + 
                  "The SPA is built & bundled as a static page; configured/hosted via Github Pages.",
            tools: "ReactJS, webpack, babel, Node.js, npm, Github Pages",
            urlLink: "https://github.com/bnwilson/bnwilson.github.io",
            urlText: "Github Link",
            sectionId: "react"
        },
        {
            title: "BLAillustrations Website",
            info: "Website for Columbus-artist BLA Illustrations. Store integrates Shopify API and Hydrogen-React library. " +  
                  "Browse the Gallery for recent artwork, " +
                  "submit a commission request, drop a line, or purchase BLA original stickers, portraits, decals, and drawings. " +
                  "Utilizes functions, server-side rendering, and Netlify CMS so the artist can update her content independently.",
            tools: "ReactJS, Next.js, FaaS, SendGrid (emails), Netlify, NetlifyCMS, reCaptcha, hydrogen-react, chakraUI, Shopify Storefront API, GraphQL",
            urlLink: "https://www.blaillustrations.com",
            urlText: "Website Link",
            sectionId: "react"
        },
        {
            title: "BLA Illustrations (Source Code)",
            info: "Github repo containing the source code for the site.  " + 
                  "The repo is set up with webhooks to Netlify's CMS & CI/CD service. " + 
                  "More info can be found in the README.md.",
            tools: "ReactJS, Next.js, FaaS, webhooks, Typescript, SendGrid (emails), NetlifyCMS, reCaptcha (contact form), Shopify Storefront API, GraphQL",
            urlLink: "https://github.com/bnwilson/blaillustrations",
            urlText: "Github Link",
            sectionId: "react"
        },
        {
            title: "Projects",
            info: "Misc. projects & scripts written in variety of languages.",
            tools: "javascript, python, typescript, bash, hubot (chatbot framework) - coffeescript",
            urlLink: "https://github.com/bnwilson/projects",
            urlText: "Github Link",
            sectionId: "misc"
        },
        {
            title: "D&D Character Creator (Frontend)",
            info: `Interactive Dungeons and Dragons\u00A9 character creator, choose your character Name, Race,` +
                  "Class, Alignment, and input your attributes and the app will calculate your stats," +
                  "bonus attributes, and stats!.",
            tools: "ReactJS Create React App, Javascript, html/css3, css grid/flex, fetch, Jest (testing)",
            urlLink: "https://github.com/DnDnU/dnd-character-sheet-frontend",
            urlText: "Github Link",
            sectionId: "react"
        },
        {
            title: "D&D Character Creater (Backend)",
            info: "API-layer for D&D, utilizes dnd5eapi.co to access up-to-date race and " +
                  "class data. Also handles the dice rolls for stats (6x d6 rolls and returns highest 3 values).",
            tools: "NodeJS, ExpressJS, node-fetch, jest, dnd5eapi.co (3rd-party API)",
            urlLink: "https://github.com/DnDnU/dnd-character-sheet-backend",
            urlText: "Github Link",
            sectionId: "react"
        },

        {
            title: "Blog site",
            info: "Create a user, choose your avatar, create and view yours and others' posts. " + 
                  "Built to be hosted locally with connection to a MySQL database.",
            tools: "NodeJS, ExpressJS, Handlebars, MVC, html/css3/grid/flex, sequelize (JS ORM for SQL)",
            urlLink: "https://github.com/WeCanCodeIT/blog-mastery-brad-richard",
            urlText: "Github Link",
            sectionId: "nodejs"
        },
        {
            title: "Blackjack",
            info: "Just a simple game of Blackjack, starting with 300 chips. Playable on Github Pages (link to the right).",
            tools: "Vanilla JS, html/css, webpack, Github pages",
            urlLink: "https://bnwilson.github.io/blackjack-blackjack",
            urlText: "Play Now!",
            sectionId: "nodejs"
        },
        {
            title: "Highstreet Hospital",
            info: "Console-based Hospital. Generates Hospital staff, patients, along with randomized names.",
            tools: "NodeJS, Javascript (ES6), readline-sync, https (REST call to name-generator)",
            urlLink: "https://github.com/bnwilson/projects/tree/master/high-street-hospital",
            urlText: "Github Link",
            sectionId: "nodejs"
        },
        {
            title: "Fortune Teller",
            info: "Answer a series of questions and get your fortune read! The results are not always crystal clear.",
            tools: "NodeJS, Javascript (ES6), readline-sync (command input)",
            urlLink: "https://github.com/bnwilson/projects/tree/master/fortune-teller",
            urlText: "Github Link",
            sectionId: "nodejs"
        },
        {
            title: "Guessing Game",
            info: "You get 3 tries to guess a number 1-10, if you don't guess the correct number in 3 tries you lose!" +
                  "Note:  the prompt will provide hints",
            tools: "NodeJS, Javascript (ES6), readline-sync (command input)",
            urlLink: "https://github.com/bnwilson/projects/tree/master/guessing-game",
            urlText: "Github Link",
            sectionId: "nodejs"
        },
        {
            title: "Move Mac Screenshots",
            info: "Script which moves my MacOS Desktop screenshots to a screenshot folder.",
            tools: "Python",
            urlLink: "https://github.com/bnwilson/projects/tree/master/move-mac-screenshots",
            urlText: "Github Link",
            sectionId: "misc"
        }
    ]
}