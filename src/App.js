import React, {useState} from 'react';
import './App.css';
import {Header, Logo, Title} from './Components/Header';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';




function App() {
  const [main, setMain] = useState("about")

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