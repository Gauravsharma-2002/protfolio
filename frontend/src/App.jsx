import "./App.css";
import { useState } from "react";
// import { navContext } from "./Context/navContext/NavContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Login from "./components/Auth/Login/Login";
import Error from "./components/Error/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
