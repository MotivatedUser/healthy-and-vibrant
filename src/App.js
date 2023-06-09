import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import OrderHere from "./pages/OrderHere";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/order-here" element={<OrderHere />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
