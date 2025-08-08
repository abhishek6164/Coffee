import React from "react";
import Hero from "./component/Hero";
import Variaty from "./component/Variaty";
import BuyFrom from "./component/BuyFrom";
import Application from "./component/Application";
import Footer from "./component/Footer";

import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2, // smoothness factor
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <Variaty />
        <BuyFrom />
        <Application />
        <Footer />
      </div>
    </div>
  );
};

export default App;
