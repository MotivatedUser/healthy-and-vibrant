import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderHere from './pages/OrderHere';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order-here" element={<OrderHere />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      {/* Add a Footer component here if needed */}
    </Router>
  );
}

export default App;

