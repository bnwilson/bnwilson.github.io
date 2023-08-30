import React, {useState, useEffect} from 'react';
import './App.css';
import {Header, Title} from './Components/Header';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';




function App() {
  const home = "about"
  const [main, setMain] = useState(home)

  const activateNavByValue = (navHomeKey) => {
    const navItems = document.querySelectorAll('.navbar_button');
    const navItemList = {
      "about": navItems[0],
      "experience": navItems[1],
      "projects": navItems[2],
      "contact": navItems[3]
    }
    navItems ? navItemList[navHomeKey].classList.toggle('navbar_button__active') : console.log(navItemList)
  }
  useEffect(() => { activateNavByValue(home)},[home]);

  const mainHeader = (
    <Header>
      <Title />
      <Nav props={handleNavClick} />
    </Header>
  )   

  function handleNavClick (event) {
    event.preventDefault();
    let mainContentKey = event.currentTarget.getAttribute('value');
    let prevNav = document.querySelector('.navbar_button__active');
    prevNav && 
      prevNav.classList.toggle('navbar_button__active');
    event.currentTarget.classList.toggle('navbar_button__active');
    setMain(mainContentKey);
  }

  return (
    <div>
      {mainHeader}
      <MainContent mainTitle="Bradley" appContentKey={main} />
    </div>
  );
}

export default App;