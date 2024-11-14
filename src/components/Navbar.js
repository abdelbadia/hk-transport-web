// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css'; // Assure-toi d'ajouter du CSS pour le style

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuClick = () => setIsOpen(false); // Ferme le menu
  return (
    <div className="navbar"> 
            <div className="navbar-title">HK</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard" onClick={handleMenuClick}>Tableau de bord</Link></li>
          <li><Link to="/facture" onClick={handleMenuClick}>Facture</Link></li>
          <li><Link to="/course" onClick={handleMenuClick}>Course</Link></li>
          <li><Link to="/clients" onClick={handleMenuClick}>Clients</Link></li>
          <li><Link to="/chauffeurs" onClick={handleMenuClick}>Chauffeurs</Link></li>
          <li><Link to="/transporteur" onClick={handleMenuClick}>Transporteur</Link></li>
          <li><Link to="/banque" onClick={handleMenuClick}>Banque</Link></li>
        </ul>
      </div>
         )}
    </div>
  );
};

export default Navbar;
