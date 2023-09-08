import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import OrderHere from "./pages/OrderHere";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./App.css";
import FootBath from "./pages/FootBath";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/foot" element={<FootBath />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/order-here" element={<OrderHere />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
