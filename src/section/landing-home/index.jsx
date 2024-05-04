import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";

export const LandingHome = () => {
  const navigate = useNavigate();
  const interests = [
    { label: "Design", img_name: "design" },
    { label: "Artes Visuais", img_name: "visual-arts" },
    { label: "Tecnologia", img_name: "cellphone" },
    { label: "Business", img_name: "business" },
  ];
  const places = [
    { label: "Restaurante", src: "restaurant" },
    { label: "Museu", src: "museum" },
    { label: "Cafeteria", src: "coffe" },
    { label: "Parque", src: "park" },
  ];

  return (
    <div>
      <Header />
      <main className="bg-primaryBlue">
        {/* INTRO SECTION */}
        {/* <IntroSection /> */}
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
              <span className="text-primaryGreen">Meet</span> é o lugar perfeito para compartilhar conhecimentos,
              ideias, habilidades ou até mesmo fazer negócios.
            </Label>

            <Link to="/signup" className="max-w-[270px] w-full mx-auto">
              <Button className="bg-primaryGreen hover:bg-green-400 text-black max-w-[270px] w-full mx-auto">
                Cadastre-se
              </Button>
            </Link>
          </div>
          <img src="././public/people-group.png" alt="Logo" width={789} height={613} />
        </section>

        {/* INTRO SECTION */}

        {/* INTEREST SECTION */}
        {/* <InterrestSection /> */}
        <section className="p-4 md:p-12 flex flex-col justify-center items-center">
          <Label className="text-white text-3xl text-center">Acesse seus principais interesses</Label>

          <div className="flex justify-center flex-wrap gap-12 my-24">
            {interests.map((interest, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#76E8F2" }}
                className="flex flex-col gap-7 justify-center items-center w-[200px] h-48 rounded-2xl"
              >
                <Label className="text-base">{interest.label}</Label>
                {interest.icon}
                <img src={`././public/${interest.image_name}.png`} alt={interest.label} />
              </div>
            ))}
          </div>

          <Label className="text-white text-3xl text-center mt-12">
            Pontos de encontro em destaque no Inova<span className="text-primaryGreen">Meet</span>
          </Label>

          <Label className="text-white text-base mx-auto my-2">
            Já marcou um encontro? Não sabe aonde ir? Veja as possibilidades que a Inova
            <span className="text-primaryGreen">Meet</span> separou para você
          </Label>

          <div className="flex flex-wrap justify-center items-center mt-4">
            {places.map((place, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-48 m-4">
                <div className="w-32 h-32 bg-white rounded-full overflow-hidden">
                  <img src={`././public/${place.src}.png`} alt={place.label} className="w-full h-full object-cover" />
                </div>
                <Label className="text-white text-xl mt-2">{place.label}</Label>
              </div>
            ))}
          </div>

          <img
            src={`././public/Group1.png`}
            alt="girl"
            className="w-full max-w-6xl object-cover -mb-14 md:-mb-48 lg:-mb-60 -ml-20 md:-ml-40"
          />

          <Label className="text-white text-base text-center mt-4 max-w-md">
            Conecte-se com pessoas e grupos com os mesmos interesses que você, a partir de encontros presenciais ou
            totalmente online, de forma segura e simplificada
          </Label>

          <Link to="/signup" className="max-w-sm w-full">
            <Button className="bg-primaryGreen hover:bg-green-400 text-black max-w-sm w-full mt-8">Cadastre-se</Button>
          </Link>

          {/* <div className="flex justify-center mt-28">
        <div className="flex flex-col justify-center w-72 h-36 bg-primaryGreen rounded-xl p-4"> */}
          <div className="flex flex-wrap gap-10 justify-center mt-32 mb-20">
            <div className="flex flex-col  gap-3 justify-center  w-[400px] h-[180px] bg-primaryGreen rounded-lg">
              <h2 className="text-black text-lg font-bold ml-12">Conecte-se com comunidades</h2>
              <Label className="text-black font-bold ml-12 mb-2">
                Encontre comunidades que compartilhem os <br /> mesmos interesses que você
              </Label>
              <Button onClick={() => navigate("/signup")} className="ml-10 max-w-[180px]">
                Procure comunidades
              </Button>
            </div>
            <div className="flex flex-col  gap-3 justify-center  w-[400px] h-[180px] bg-primaryGreen rounded-lg">
              <div className="flex ml-4 gap-3 items-center">
                <PlusCircledIcon width={20} height={20} />
                <h2 className="text-black text-lg font-bold">Conecte-se com comunidades</h2>
              </div>
              <Label className="text-black font-bold ml-12 mb-2">
                Encontre comunidades que compartilhem os <br /> mesmos interesses que você
              </Label>
              <Button onClick={() => navigate("/signup")} className="ml-10 max-w-[180px]">
                Procure comunidades
              </Button>
            </div>
          </div>
        </section>
        {/* INTEREST SECTION */}
      </main>
      <Footer />
    </div>
  );
};
