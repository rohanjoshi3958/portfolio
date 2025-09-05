import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="portfolio-container">
          <h1 className="name">Rohan Joshi</h1>       
          <div className="external-link-section">
            <h2>Check out my work:</h2>
            <div className="boxes-container">
              <a 
                href="https://master.doakib682bbkv.amplifyapp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                <div className="link-content">
                  <img 
                    src="/MBTAss.png" 
                    alt="MBTA Project Preview" 
                    className="project-image"
                  />
                  <span className="link-text">MBTA station locator</span>
                </div>
              </a>
              
              <div className="link-content work-in-progress">
                  <img 
                    src="/letter.png" 
                    alt="Future letter generator" 
                    className="project-image"
                  />
                  <span className="link-text">Future letter generator</span>
                </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
