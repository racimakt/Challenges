import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
