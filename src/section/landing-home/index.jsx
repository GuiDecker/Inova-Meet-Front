import React from "react";
import { IntroSection } from "./components/intro-section";
import { InterrestSection } from "./components/interrest-section";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const LandingHome = () => {
  return (
    <div>
      <Header />
      <main className="bg-primaryBlue ">
        <IntroSection />
        <InterrestSection />
      </main>
      <Footer />
    </div>
  );
};
