import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Publications from "./components/Publications";
import Team from "./components/Team";
import Research from "./components/Research";
import Courses from "./components/Courses";
import Partnerships from "./components/Partnerships";
import Funding from "./components/Funding";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Research />
      <Team />
      <Bio />
      <Publications />
      <Courses />
      <Partnerships />
      <Funding />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
