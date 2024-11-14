import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css';  // Assure-toi d'avoir un fichier Home.css pour les styles

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
         <div className="home">
                  
    </div>
  );
};

export default Home;
