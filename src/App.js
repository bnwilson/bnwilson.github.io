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