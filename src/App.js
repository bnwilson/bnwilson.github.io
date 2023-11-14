import React, {useState, useEffect, useCallback} from 'react';
import './App.css';

import MainContent from './Components/MainContent';
import { siteNavMap } from './static/site-nav-map';
import {NavContext} from './Components/nav.context';
//import { Navbar } from './Components/Nav/Navbar';
import { NavLinks, Navbar } from './Components/Nav';


const activateNavByValue = (navActiveKey) => {
  //const navItems = document.querySelectorAll('.main_navbar__navlink');
  const navItems = document.querySelectorAll(`[data-navkey=${navActiveKey}]`)
  const navItem = navItems[0]
  navItem && 
    navItem.classList.toggle('navbar_button__active');
}

const validContentKeys = siteNavMap.map(navItem => navItem.value)

function App() {
  const home = siteNavMap[0].value;
  const [siteContentKey, setSiteContentKey] = useState('');
  
  useEffect(() => { setSiteContentKey(home)},[home]);

  /** `handleNavClick` - `onClick` callback for handling 'active' links and page content
   * @name handleNavClick
   * @param {React.MouseEvent<HTMLLIElement>} event 
   */
  function handleNavClick (event) {
    // event.preventDefault();
    const mainContentKey = event.currentTarget.dataset['navLink'] //('data-navkey');
    
    console.log('mainContentKey: >> ', mainContentKey)
    // let prevNav = document.querySelector('navbar_button__active');
    // prevNav && 
    //   prevNav.classList.toggle('navbar_button__active');
    // event.currentTarget.classList.toggle('navbar_button__active');
    if (mainContentKey && mainContentKey !== siteContentKey && validContentKeys.includes(mainContentKey)){
      setSiteContentKey(mainContentKey);
    }
  }

  const handleNavClickCallback = useCallback(handleNavClick,[siteContentKey]);


  return (
    <div>
      <NavContext.Provider value={siteContentKey} >
        <Navbar >
          <NavLinks onclick={handleNavClick} />
        </Navbar>
        <MainContent appContentKey={siteContentKey} />
      </NavContext.Provider>
    </div>
  );
}

export default App;