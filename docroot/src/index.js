import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import logo from './logo.svg';

// EXAMPLE IMPORT of FIREBASE:
// import { db, auth } from './services/firebase';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render app to root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
