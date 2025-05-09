import React from 'react';
import './Header.css';
import logo from '../assets/images/Barcode_logo.png';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import linkedinIcon from '../assets/icons/linkedin.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Barcode" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Notícias</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
      <div className="icons">
        <a href="#"><i className="fas fa-user"></i></a>
        <a href="#"><i className="fas fa-search"></i></a>
        <a href="#"><i className="fas fa-shopping-cart"></i></a>
      </div>
       <div className="social-icons">
        <a href="https://www.facebook.com/llbarcodetech" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/llbarcodetech/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/barcode-tech/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>

    </header>
  );
};

export default Header;
