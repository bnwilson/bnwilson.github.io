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
    projectStories: [
        {
            title: "BLAillustrations",
            description: "Website for artist BLAillustrations. E-commerce w/ Shopify API. " +  
                         "Also features: headless-CMS, FaaS usage (contact form) - more info can be found on the repo.",
            tags: ["React", "NextJS", "NetlifyCMS", "Shopify", "GraphQL", "e-commerce", "typescript"],
            imgFile: "BLAillustrations_site_snapshot.jpg",
            links: [
                {
                    urlLink: "https://www.blaillustrations.com",
                    urlText: "Website Link"
                },
                {
                    urlLink: "https://github.com/bnwilson/blaillustrations",
                    urlText: "Github Link"
                }
            ],
            storySections: [
                {
                    sectionTitle: "Gallery",
                    sectionDescription: "Features a headless-CMS, an admin panel for uploading content, " +
                                        "and dynamic loading of markdown content. Gallery item(s) are " + 
                                        "rendered into a responsive grid and - upon a user click/touch - will " + 
                                        "pop up in a modal slideshow.",
                    tools: ["NetlifyCMS", "NetlifyFaaS", "server-side rendering", "Github webhooks"],
                    
                },
                {
                    sectionTitle: "Store",
                    sectionDescription: "Shopify store integration.  Cart context and store content are (independently) " +
                                        "fetched, redendered, and tracked.  Uses a variety of both custom and HydrogenJS-provided " + 
                                        "solutions, such as:  components, hooks, and context",
                    tools: ["graphQLClient", "shopifyStorefrontApi", "SSR", "hydrogen-react", "GraphQL", "chakra-ui"]
                },
                {
                    sectionTitle: "Contact",
                    sectionDescription: "A contact form using 'yup' for input validation and 'react-hook-form' for " + 
                                        "state management. Submission is locked behind the validation and a reCaptcha " + 
                                        "element.  Successful submission triggers a serverless function that generates " +
                                        "the formatted html/text body and issues a request to Sendgrid API.",
                    tools: ["react-hook-form.js", "yup.js", "reCAPTCHA", "Sendgrid", "Netlify FaaS"]
                }
            ]
        },
        {
            title: "'D&D&U':  D&D character-creator",
            description: `Interactive Dungeons and Dragons\u00A9 character creator. The app will guide you through ` + 
                         ` your character's --> Name, Race, ` +
                         "Class, Alignment, Attributes and the app will do the rest!",
            tags: ["ReactJS", "Javascript", "html5/css3", "dnd5eapi", "Jest", "Express.js"],
            imgFile: "DnDnU_project_preview.jpg",
            links: [
                {
                    urlLink: "https://github.com/DnDnU/dnd-character-sheet-frontend",
                    urlText: "Frontend (source)"
                },
                {
                    urlLink: "https://github.com/DnDnU/dnd-character-sheet-backend",
                    urlText: "Backend (source)"
                }
            ],
            storySections: [
                {
                    sectionTitle: "Frontend",
                    sectionDescription: `Interactive Dungeons and Dragons\u00A9 character creator. Choose your character Name, Race,` +
                          "Class, Alignment, Attributes and the app will do the rest!",
                    tools: ["ReactJS Create React App", "Javascript", "html/css3", "fetch", "Jest (testing)"]
                },
                {
                    title: "D&D Character Creater (Backend)",
                    sectionDescription: "API-layer for D&D, utilizes dnd5eapi.co to access up-to-date race and " +
                          "class data. Also handles the dice rolls for stats (6x d6 rolls and returns highest 3 values).",
                    tools: ["ExpressJS", "node-fetch", "jest", "dnd5eapi.co (3rd-party API)"]
                }
            ]
        },
        {
            title: "Blackjack",
            description: "Just a simple game of Blackjack, starting with 300 chips. Playable as a Github Pages app." + 
                         " Fair warning:  the dealer is a little snarky.",
            tags: ["Vanilla JS", "html/css", "webpack", "Github pages"],
            imgFile: "blackjack_project_preview.jpg",
            links: [
                {
                    urlLink: "https://bnwilson.github.io/blackjack-blackjack",
                    urlText: "Play Now!"
                },
                {
                    urlLink: "https://github.com/bnwilson/blackjack-blackjack",
                    urlText: "Github Link"
                }
            ]
        }
    ],
    projectItems: [
        {
            title: "Portfolio (project repo)",
            info: "Source code for this portfolio page. " + 
                  "The SPA is built & bundled as a static page; CI with Github Pages/Actions.",
            tools: "ReactJS, webpack, babel, Node.js, npm, Github Pages",
            urlLink: "https://github.com/bnwilson/bnwilson.github.io",
            urlText: "Github Link",
            sectionId: "react"
        },
        {
            title: "BLAillustrations Website",
            info: "Website for artist BLAillustrations. E-commerce w/ Shopify API. " +  
                  "Also features: headless-CMS, FaaS usage (contact form) - more info can be found on the repo.",
            tools: "ReactJS, Next.js, NetlifyFaaS, SendGrid (emails), Netlify, GraphQL, reCaptcha, hydrogen-react, chakraUI",
            urlLink: "https://www.blaillustrations.com",
            urlText: "Website Link",
            sectionId: "N/A"
        },
        {
            title: "BLAillustrations (project repo)",
            info: "Github repository containing the source code for the site.  " + 
                  "The repo is set up with webhooks to Netlify's CMS & CI/CD service. " + 
                  "More info can be found in the README.md.",
            tools: "ReactJS, Next.js, FaaS, webhooks, Typescript, SendGrid (emails), NetlifyCMS, reCaptcha (contact form), Shopify Storefront API, GraphQL",
            urlLink: "https://github.com/bnwilson/blaillustrations",
            urlText: "Github Link",
            sectionId: "N/A"
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
            title: "Katas",
            info: "Coding prompts, challenges, and 'just because' ideas",
            tools: "javascript",
            urlLink: "https://github.com/bnwilson/projects/katas",
            urlText: "Github Link",
            sectionId: "misc"
        },
        {
            title: "D&D Character Creator (Frontend)",
            info: `Interactive Dungeons and Dragons\u00A9 character creator. choose your character Name, Race,` +
                  "Class, Alignment, Attributes and the app will do the rest!",
            tools: "ReactJS Create React App, Javascript, html/css3, css grid/flex, fetch, Jest (testing)",
            urlLink: "https://github.com/DnDnU/dnd-character-sheet-frontend",
            urlText: "Github Link",
            sectionId: "N/A"
        },
        {
            title: "D&D Character Creater (Backend)",
            info: "API-layer for D&D, utilizes dnd5eapi.co to access up-to-date race and " +
                  "class data. Also handles the dice rolls for stats (6x d6 rolls and returns highest 3 values).",
            tools: "NodeJS, ExpressJS, node-fetch, jest, dnd5eapi.co (3rd-party API)",
            urlLink: "https://github.com/DnDnU/dnd-character-sheet-backend",
            urlText: "Github Link",
            sectionId: "N/A"
        },
    /* TODO:  dead link, found the local file and will upload next PR
        {
            title: "Blog site",
            info: "Create a user, choose your avatar, create and view yours and others' posts. " + 
                  "Built to be hosted locally with connection to a MySQL database.",
            tools: "NodeJS, ExpressJS, Handlebars, MVC, html/css3/grid/flex, sequelize (JS ORM for SQL)",
            urlLink: "https://github.com/WeCanCodeIT/blog-mastery-brad-richard",
            urlText: "Github Link",
            sectionId: "nodejs"
        },
    */
        {
            title: "Blackjack",
            info: "Just a simple game of Blackjack, starting with 300 chips. Playable on Github Pages (link to the right).",
            tools: "Vanilla JS, html/css, webpack, Github pages",
            urlLink: "https://bnwilson.github.io/blackjack-blackjack",
            urlText: "Play Now!",
            sectionId: "N/A"
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
        },
        {
            title: "iconify",
            info: "Converts a given image file to '.ico'",
            tools: "bash, imagemagick",
            urlLink: "https://github.com/bnwilson/projects/blob/main/scripts/iconify.sh",
            urlText: "Github Link",
            sectionId: "misc"
        }
    ]
}