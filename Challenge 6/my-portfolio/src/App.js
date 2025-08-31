import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
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
