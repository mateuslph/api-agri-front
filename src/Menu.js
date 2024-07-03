import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false); // estado para controlar a visibilidade do menu

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen) // altera o estado do menu
  }

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="nav-list">
            <ul>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Início</a></li>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Projetos</a></li>
              <li className="nav-item"><a href="https://google.com/" className="nav-link">Sobre</a></li>
            </ul>
          </div>
          <div className="login-button">
            <button><a href="https://google.com/">Entrar</a></button>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={() => setMenuIsOpen(!menuIsOpen)}>Menu</button>
            <button onClick={toggleMenu}><img className="icon" src="assets/img/menu_white_36dp.svg" alt="" /></button>
          </div>
        </nav>
        {menuIsOpen && ( // Renderiza o menu mobile apenas se estiver aberto
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
  )
}

export default Menu;
