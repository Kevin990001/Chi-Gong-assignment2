import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage';
import CreditsPage from './components/CreditsPage';
import GamePage from './components/GamePage';




const App = () => {
  return (

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/game" element={<GamePage />} />
          <Route path="/credits" element={<CreditsPage />} />
        </Routes>
      </Router>
   
  );
};

export default App;


