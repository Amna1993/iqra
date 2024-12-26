import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Awards from "./components/Awards";
import Team from "./components/Team";
import Research from "./components/Research";
import Courses from "./components/Courses";
import Funding from "./components/Funding";
import Footer from "./components/Footer";
import Publication from "./components/Publication";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Research />
      <Team />
      <Bio />
      <Awards />
      <Publication />
      <Courses />
      <Funding />
      <Footer />
    </div>
  );
}

export default App;
