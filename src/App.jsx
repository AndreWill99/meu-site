import React from "react";
import "./styles/global.css";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import About from "./components/About";
import Habilidades from "./components/Habilidades";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="container">
      <Header />
      <InfoSection />
      <About />
      <Habilidades />
      <Analytics />
    </div>
  );
};

export default App;