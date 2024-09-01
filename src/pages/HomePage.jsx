import React from "react";
import Header from "../components/Header";
import SkillsPage from "./SkillsPage";


const HomePage = () => {
  return (
    <>
      <Header />
      <section id="skills-section">
        <SkillsPage />
      </section>      
    </>
  )
};

export default HomePage;
