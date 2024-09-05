import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import './App.css';
import ButtonIcon from './assets/Button-icon.svg'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="body">
        <Header icon={<img src={ButtonIcon} alt="Logo" />} text="Новая этикетка" />
        <Main />
      </div>
    </div>
  );
}

export default App;
