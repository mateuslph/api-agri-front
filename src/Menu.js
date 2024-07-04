import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className={`nav-list ${menuIsOpen ? 'open' : ''}`}>
            <ul>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Início</a></li>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Projetos</a></li>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Sobre</a></li>
            </ul>
            <div className="login-button">
              <button><a href="https://google.com/">Entrar</a></button>
            </div>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={toggleMenu}>
              <img className="icon" src={menuIsOpen ? "close_white_36dp.svg" : "menu_white_36dp.svg"} alt="menu icon" />
            </button>
          </div>
        </nav>
        {menuIsOpen && (
          <div className="mobile-menu">
            <ul>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Início</a></li>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Projetos</a></li>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Sobre</a></li>
            </ul>
            <div className="login-button">
              <button><a href="https://google.com/">Entrar</a></button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Menu;
