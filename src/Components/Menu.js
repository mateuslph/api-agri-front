import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className="nav-bar" aria-label="Main Navigation">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className={`nav-list ${menuIsOpen ? 'open' : ''}`}>
        <ul>
          <li className="nav-item"><a href="#" className="nav-link">Início</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
        </ul>
        <div className="login-button">
          <button><a href="#">Entrar</a></button>
        </div>
      </div>
      <div className="menu-toggle">
        <button onClick={toggleMenu} aria-label="Toggle Main Menu">
          <img className="icon" src={menuIsOpen ? "close_white_36dp.svg" : "menu_white_36dp.svg"} alt="menu icon" />
        </button>
      </div>
    </header>
  );
}

export default Menu;
