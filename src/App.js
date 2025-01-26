import React from "react";
import './App.css';
import Header from  './component/header.js';
import MiddlePart from  './component/Middle.js';
import Achievements from  './component/acheivement.js';
import WindSection from  './component/win-model.js';
import CarosuselSection from  './component/carosuel.js';
import BenefitsSection from  './component/BenefitsSection.js';
import AccordianStructure from  './component/accrodian.js';
import FooterData from  './component/footer.js';

function App() {
  return (
      <>
        <Header/>
        <MiddlePart/>
        <Achievements/>
        <WindSection/>
        <CarosuselSection/>
        <BenefitsSection/>
        <AccordianStructure/>
        <FooterData/>
      </>
  );
}

export default App;
