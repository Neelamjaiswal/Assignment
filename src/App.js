import "./App.css";
import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from './components/Navebar1';
import Home from "./components/home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


function App() {
  return (
	
    <BrowserRouter>
    <Navbar1 />
	<Navbar />
  <Routes>
    

        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/recommendations" element={<Recommendations />}></Route>
   
      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
