import { BusinessIcon } from "@/assets/icons/business";
import { Label } from "@/components/ui/label";
import React from "react";
import { Fragment } from "react";

export const InterrestSection = () => {
  const interests = [
    { label: "Design", icon: <BusinessIcon /> },
    { label: "Artes Visuais", icon: <BusinessIcon /> },
    { label: "Tecnologia", icon: <BusinessIcon /> },
    { label: "Business", icon: <BusinessIcon /> },
  ];
  const places = [
    { label: "Restaurante", src: "restaurant" },
    { label: "Museu", src: "museum" },
    { label: "Cafeteria", src: "coffe" },
    { label: "Parque", src: "park" },
  ];

  return (
    <Fragment>
    <section className="p-12 flex flex-col justify-center">
      <Label className="text-white text-3xl mx-auto">Acesse seus principais interesses</Label>

      {/* <div className="grid grid-cols-4 gap-12 mt-24"> */}
      <div className="flex justify-center flex-wrap gap-12 my-24">
        {interests.map((interest, index) => (
          <div
            key={index}
            style={{ backgroundColor: "#76E8F2" }}
            className="flex flex-col gap-7 justify-center items-center w-[200px] h-48 rounded-2xl"
          >
            <Label className="text-base">{interest.label}</Label>
            {interest.icon}
          </div>
        ))}
      </div>

      <Label className="text-white text-3xl mx-auto">
        Pontos de encontro em destaque no Inova<span className="text-primaryGreen">Meet</span>
      </Label>
      <Label className="text-white text-base mx-auto my-2">
        Já marcou um encontro? Não sabe aonde ir? Veja as possibilidades que a Inova
        <span className="text-primaryGreen">Meet</span> separou para você
      </Label>
      <div className="flex  gap-16 justify-center items-center mt-4">
      {places.map((place, index) => (
      <div key={index} className="flex flex-col gap-7 justify-center items-center mt-4">
      <div className="w-48 h-48 rounded-full overflow-hidden bg-white">
        <img src={`././public/${place.src}.png`} alt={place.label} className="w-full h-full object-cover" />
      </div>
      <Label className="text-white text-xl">{place.label}</Label>
    </div>  
      ))}
      </div>
    </section>
    <section className="p-12 flex flex-col justify-center">

      <div>

      </div>
    </section>
    </Fragment>
  );
};
