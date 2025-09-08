import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import Hero from "../components/Hero.jsx";
import LogoMarquee from "../components/LogoMarquee.jsx";
import StrykeXAdvantage from "../components/StrykeXAdvantage.jsx";
import Works from "../components/Works.jsx";
import Faq from "../components/Faq.jsx";
import LightningFast from "../components/LightningFast.jsx";

const LandingPage = () => {
  return (
    <MainLayout>
      <div id="home">
        <Hero />
      </div>
      <div>
        <LogoMarquee />
      </div>
      <div>
        <StrykeXAdvantage />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Faq />
      </div>
      <LightningFast />
    </MainLayout>
  );
};

export default LandingPage;
