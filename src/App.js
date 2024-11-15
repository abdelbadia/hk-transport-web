import logo from './logo.svg';
import './Style/App.css';
import React from 'react';
import './Style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Vérifie que tu as bien importé Router, Route et Routes
import Home from './components/Home';
import Clients from './components/Clients';
import ClientDetails from './components/ClientDetails';
/*import Dashboard from './components/Dashboard';
import Facture from './components/Facture';
*/
import Navbar from './components/Navbar';  // Importation du Navbar

function App() {
  return (
      <Router>
         <Navbar />  {/* Menu toujours visible */}
      <Routes>
        <Route path="/" element={<Home />} />   {/* Route par défaut */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
      </Routes>
  </Router>
  );
}

export default App;
