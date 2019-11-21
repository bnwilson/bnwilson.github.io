import React, {useState} from 'react';
import './App.css';
import {Header, Logo, Title} from './Components/Header';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';
import Dropdown from './Components/Dropdown';




function App() {
  const [main, setMain] = useState("about")

  const mainHeader = (
    <Header>
      <Logo />
      <Title />
      <Nav>
        <Dropdown navCallback={handleNavClick}/>
      </Nav>
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

// Default Code
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */