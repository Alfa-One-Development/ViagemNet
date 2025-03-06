import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IndianapolisTripPage from '../pages/Indianapolis'; 

function App() {

  return (
    <Router>
      <h1>Site de Viagem</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/indianapolis">Indianapolis</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indianapolis" element={<IndianapolisTripPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;