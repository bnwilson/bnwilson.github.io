import { createContext } from "react"

 /**
  * @name NavContext
  * @description **Used to track:**
  * - 'page' content  
  * - active 'link' 
  * @param {string} title _string_ of `title` in item(s) found in `src/static/site-nav-map`
  */
  export const NavContext = createContext()