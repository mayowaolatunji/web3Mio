import React from "react";

import "./App.css";

import Header from "./components/header.jsx";
import SkillsPage from "./components/skillsPage.jsx";
import Portfolio from "./components/portfolioPage.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="container">
      <div className="Header">
        <Header />
      </div>
      <div className="SkillsPage">
        <SkillsPage />
      </div>
      <div className="Portfolio">
        <Portfolio />
      </div>
      <div className="AboutMe">
        <AboutMe />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
