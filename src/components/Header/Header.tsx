// src/components/Header/Header.tsx
import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  navBackgroundColor: string;
  backgroundImageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ navBackgroundColor, backgroundImageUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <nav className="nav-bar" style={{ backgroundColor: navBackgroundColor }}>
        <button className="nav-button menu">MENU</button>
        <button className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className="nav-button">ENTRAR</button>
          <button className="nav-button">CONTATO</button>
        </div>
      </nav>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
    </div>
  );
};

export default Header;
