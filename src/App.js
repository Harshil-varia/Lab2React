import { BrowserRouter,Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import { useState } from "react";
import Layout from "./components/Layout.js";
import './index.css';


export default function App() {
  const [count, setCount]= useState(1);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setCount={setCount} count={count}/>}>
          <Route path="home" element={<Home  />} />
          <Route path="about" element={<About count={count}/>} />
          <Route path="contact" element={<Contact count={count}/>} /></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}




