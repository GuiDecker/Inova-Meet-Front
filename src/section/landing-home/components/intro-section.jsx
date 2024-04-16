import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";

export const IntroSection = () => {
  return (
    // add flex-wrap
    <section className="p-12 flex flex-wrap justify-center ">
      <div className="flex flex-col  gap-12 mt-28">
        <Label className="text-white text-4xl mx-auto max-w-[561px]">
          Uma plataforma onde
          <br /> <span className="text-primaryGreen">interesses</span> e
          <span className="text-primaryGreen"> amizades</span> se
          <br /> tornam <span className="text-primaryGreen">networking</span>
        </Label>

        {/* <Label className="text-white text-sm max-w-[562px]"> */}
        <Label className="text-white text-sm max-w-[490px]">
          Design, artes visuais, mundo tech ou business? Seja qual for seus interesses, a Inova
          <span className="text-primaryGreen">Meet</span> é o lugar perfeito para compartilhar conhecimentos, ideias,
          habilidades ou até mesmo fazer negócios.
        </Label>

        <Button className="bg-primaryGreen hover:bg-green-400 text-white max-w-[270px] w-full mx-auto">
          Cadastre-se
        </Button>
      </div>
      <img src="././public/people-group.png" alt="Logo" width={789} height={613} />
    </section>
  );
};
