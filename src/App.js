import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Bio from "./components/Bio";
import Publications from "./components/Publications";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Bio />
      <Publications />
      <Team />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
