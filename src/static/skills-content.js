module.exports = {
    title: "My skills and knowledge includes (but not limited to): ",
    skillCategories: [
        {
            id: 0,
            name: "frontEnd", 
            description: "Front-End"
        },
        {
            id: 1,
            name: "backEnd", 
            description: "Back-End"
        },
        {
            id: 2,
            name: "soft",
            description: "Soft Skills"
        }
    ],
    skillRatingCap: 10, // Eventually will use a graph display
    skillItems: {
        frontEnd: [
            {
                categoryName: "frontEnd",
                skill: "ReactJS",
                skillDescription: "Versions 16-18",
                skillRating: 7,
                subSkills: [
                    "Component Lifecycle", "Hooks (useState, useEffect, useReducer, useQuery, useMemo, useCallback)",
                    "Context (useContext, createContext, Provider)", "props"
                ]
            },
            {
                categoryName: "frontEnd",
                skill: "HTML5",
                skillRating: 7
            },
            {
                categoryName: "frontEnd",
                skill: "CSS3",
                skillRating: 6
            },
            {
                categoryName: "frontEnd",
                skill: "Node.js (JS, TS, axios)",
                skillRating: 9,
                subSkills: [
                    "JavaScript", "Typescript", "Express.js", "npm", "npx", "yarn", "MVC", "mustache/handlebars",
                    "Promise API (async, await, .then().catch(), new Promise(accept, reject)", "axios"
                ]
            },
        ],
        backEnd: [

        ]
    }
    
}