import React from 'react';
import "./App.css";
import Home from "./Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tips from "./TipsPage/Tips";
import Contact from "./ContactPage/Contact";
import NavbarComponent from "./NavBar/Navbar";

function NoPage() {
  return (
    <div>404: Page not found</div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="tips" element={<Tips/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
