import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Awards from "./components/Awards";
import Team from "./components/Team";
import Research from "./components/Research";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Funding from "./components/Funding";
import Footer from "./components/Footer";
import Publication from "./components/Publication";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Bio />
      <Research />
      <Education />
      <Publication />
      <Awards />
      <Courses />
      <Funding />
      <Team /> 
      <Footer />
    </div>
  );
}

export default App;
