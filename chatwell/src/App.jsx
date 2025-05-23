import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Report from './pages/Report';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<Report/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
