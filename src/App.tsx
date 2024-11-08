import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import NeuralNetwork from "./components/NeuralNetwork";

const App: React.FC = () => {
  return (
    <div>
      <CustomCursor />
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <NeuralNetwork />
    </div>
  );
};

export default App;
