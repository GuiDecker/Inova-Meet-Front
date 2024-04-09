import { BusinessIcon } from "@/assets/icons/business";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PersonIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import React from "react";

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
      <div className="flex flex-wrap gap-16 justify-center items-center mt-4">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col gap-7 justify-center items-center mt-4">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-white">
              <img src={`././public/${place.src}.png`} alt={place.label} className="w-full h-full object-cover" />
            </div>
            <Label className="text-white text-xl">{place.label}</Label>
          </div>
        ))}
      </div>
      <div className="flex  justify-center mt-20 mr-44 ">
        <img src={`././public/Group1.png`} alt={"girl"} className="object-cover" width={1200} height={898} />
      </div>

      <Label className="text-white text-base mx-auto max-w-[913px] -mt-60 mb-8">
        Conecte-se com pessoas e grupos com os mesmos interesses que você, a partir de
        <br /> encontros presenciais ou totalmente online, de forma segura e simplificada
      </Label>
      <Button className="bg-primaryGreen hover:bg-green-400 text-black max-w-[270px] w-full mx-auto mb-20">
        Cadastre-se
      </Button>

      <div className="flex flex-wrap gap-10 justify-center">
        <div className="flex flex-col  gap-3 justify-center  w-[400px] h-[180px] bg-primaryGreen">
          <h2 className="text-black text-lg font-bold ml-12">Conecte-se com comunidades</h2>
          <Label className="text-black font-bold ml-12 mb-2">
            Encontre comunidades que compartilhem os <br /> mesmos interesses que você
          </Label>
          <Button className="ml-10 max-w-[180px]">Procure comunidades</Button>
        </div>
        <div className="flex flex-col  gap-3 justify-center  w-[400px] h-[180px] bg-primaryGreen">
          <div className="flex ml-4 gap-3 items-center">
            <PlusCircledIcon width={20} height={20} />
            <h2 className="text-black text-lg font-bold">Conecte-se com comunidades</h2>
          </div>
          <Label className="text-black font-bold ml-12 mb-2">
            Encontre comunidades que compartilhem os <br /> mesmos interesses que você
          </Label>
          <Button className="ml-10 max-w-[180px]">Procure comunidades</Button>
        </div>
      </div>
    </section>
  );
};
