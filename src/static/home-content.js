/**
 * **`homeContent`** - Static 'Home' page _(text)_ content.  
 * 
 * - **Tags**:  `{{codeContent}}` - _To be injected into code-formatted elements_
 * - **Special chars**:  `\n` - _newlines, to be replaced with `<br />` tags_
 * 
 *   ##### **Note**:  _May convert to JSON, so writing properties as strings._
 */
export const homeContent = {
    "welcome": {
        "headingText": "Hello, welcome to my Portfolio page!",
        "bodyText": 
            "My name is Brad Wilson; I'm a full-stack developer currently located in Central Ohio. " +
            "I have a background in IT Operations, Infrastructure, and Process-Automation, but my " +
            "current focus is front-end / full-stack development.  Feel free to look take a look at my " +
            "projects & source code (link up top) - including this very portfolio page! \\n \\n" + 
            "At the moment, my favorite tools in my toolbox are:\\n  {{codeContent}}",
        "codeContent": [
            "React",
            "NextJS",
            "Node.js", 
            "Typescript",
            "Python",
            "GraphQL"
        ]
    },
    "whatIBring": {
        "headingText": "What I Bring",
        // TODO:  convert 'highlight' to 'highlights': [...highlight]
        "experienceHighlights": [
            {
                "years": "8",
                "highlight": 
                    "Collective IT: Operations, Infrastructure, & Software Engineering",
            },
            {
                "years": "5",
                "highlight": 
                    "Node.js / JavaScript (ES6) development",
            },
            {
                "years": "4",
                "highlight": 
                    "Automation technologies: developing, testing, implementing, and supporting ",
            },
            {
                "years": "3",
                "highlight": 
                    "Using DevOps & cloud platforms like Jenkins, EC2, s3, " + 
                    "Gitlab, Docker, and Kubernetes"
            },
            {
                "years": "2",
                "highlight": 
                    "Writing python and bash scripts to accomplish various automated tasks"
            },
            {
                "years": "1",
                "highlight":
                    "Utilizing front-end frameworks & languages like ReactJS, JQuery, Django"
            }
        ]
    }
}