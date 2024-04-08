import React from "react";
import { Header } from "./components/header";
import { IntroSection } from "./components/intro-section";
import { InterrestSection } from "./components/interrest-section";

export const LandingHome = () => {
  return (
    <div>
      <Header />
      <main className="bg-primaryBlue ">
        <IntroSection />
        <InterrestSection />
      </main>
    </div>
  );
};
