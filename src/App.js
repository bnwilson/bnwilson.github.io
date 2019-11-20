import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';



function App() {
  const [main, setMain] = useState("about")

  function handleNavClick (event) {
    event.preventDefault();
    let mainContentKey = event.currentTarget.getAttribute('value');
    console.log(mainContentKey)
    // let mainContentKey = event.target.value;
    setMain(mainContentKey);

  }

  return (
    <div>
      <Header navCallback={handleNavClick} />
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