import React from "react";
import { useTheme } from "./hooks/useTheme";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NeuralNetwork from "./components/NeuralNetwork";

const App: React.FC = () => {
  const { theme, toggle } = useTheme();

  return (
    <div>
      <CustomCursor />
      <Header theme={theme} onToggle={toggle} />
      <About />
      <hr className="section-divider" />
      <Experiences />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Blog />
      <hr className="section-divider" />
      <Contact />
      <footer className="footer">aaryan asthana · {new Date().getFullYear()}</footer>
      <NeuralNetwork />
    </div>
  );
};

export default App;
