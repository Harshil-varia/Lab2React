import { BrowserRouter,Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import { useState } from "react";
import './index.css';
import Navbar from "./components/Navbar.js";


export default function App() {
  const [count, setCount]= useState(1);
  return (
    <BrowserRouter>
      <Navbar setCount={setCount} count={count} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About count={count}/>} />
        <Route path="/contact" element={<Contact count={count}/>} />
      </Routes>
    </BrowserRouter>
  );
}




