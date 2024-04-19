import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tech from "./pages/Tech";
import News from "./pages/News";
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
