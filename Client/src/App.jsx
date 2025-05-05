import React from 'react';
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav'; 
import Landingpage from './pages/LandingPage'; 
import SubjectPage from './pages/SubjectPage';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/subjects" element={<SubjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
