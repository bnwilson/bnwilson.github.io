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
            "projects & source code (link up top), including this very portfolio page! \\n \\n" + 
            "At the moment, my favorite tools in my toolbox are:\\n  {{codeContent}}",
        "codeContent": [
            "React",
            "NextJS",
            "Node.js", 
            "Typescript",
            "Python",
            "GraphQL"
        ]
    }
}