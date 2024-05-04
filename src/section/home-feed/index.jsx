import React, { Fragment } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import { FeedHeader } from "./components/header";

export const HomeFeedPage = () => {
  const contents = [
    {
      id: 1,
      title: "Comunidade Quiet Ambition",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Encontre pessoa da área de tecnologia que não querem seguir a áre de gestão e entenda o porquê",
      people: 1250,
    },
    {
      id: 2,
      title: "Comunidade Dev GPT",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Descubra formas de facilitar seu trabalho como desenvolvedor compartilhando hacks e utilidades do ChatGPT",
      people: 10000,
    },
    {
      id: 3,
      title: "Comunidade de Realidade Virtual",
      image:
        "https://plus.unsplash.com/premium_photo-1663091701962-2ae72a2ad2ac?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Comunidade sobre o compartilhamento de opiniões sobre o impacto da tecnologia VR na sociedade atual",
      people: 150,
    },
  ];

  return (
    <Fragment>
      <FeedHeader />
      <section className="w-full h-full pb-32 bg-primaryGray flex justify-center">
        <div className="flex flex-row justify-center gap-10">
          {/* <div className="w-1/3 flex flex-col mb-10 ml-14"> */}
          <div className="flex flex-col items-center gap-2 w-[320px] ml-14">
            <div className="flex flex-col items-center gap-2 bg-white mt-16 pb-8 w-full rounded-xl">
              <div className="w-full py-10 bg-mainBlue rounded"></div>
              <Avatar className="w-24 h-24 md:w-28 md:h-28 -mt-12 border-8 border-mainBlue">
                <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Label className="text-xl font-bold">Ana Barbosa</Label>
              <Label className="text-base mb-2">Software Engineer</Label>
              <Separator />
              <Label className="text-base my-2">
                <b>Interesse:</b> Tecnologia/business
              </Label>
              <Separator />
              <Label className="text-base text-center my-2">
                Following <hr />
                <b>35</b>
              </Label>
              <Separator />
              <Label className="text-base text-center mt-2">
                Followers <hr />
                <b>58</b>
              </Label>
            </div>
            {/* Sugestões */}
            <div className="flex flex-col gap-2 bg-white mt-16 pb-8 w-full rounded-xl">
              <h2 className="text-xl text-black text-center my-5">Sugestões</h2>
              <Separator />
              <div className="flex items-center justify-between mx-5">
                <div className="flex flex-row justify-center items-center gap-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Label className="text-base font-bold">Ana Barbosa</Label>
                    <Label className="text-sm ">Tecnologia</Label>
                  </div>
                </div>
                <PlusIcon />
              </div>

              <Separator />
              <div className="flex flex-col mx-5 mt-2 gap-5 items-center justify-center text-center">
                <h3 className="text-base">Que tal marcar um encontro?</h3>
                <Label className="font-bold text-base">Veja uma lista de lugares para conhecer alguém melhor</Label>
                <Button className="text-base bg-primaryGreen text-black font-bold">Encontre o lugar perfeito</Button>
                <Label className="text-base">Quer compartilha seus conhecimentos em algum assunto?</Label>
                <Label className="text-base">Crie uma comunidade e convide seus amigos </Label>
                <Button className="text-base bg-primaryGreen text-black font-bold">Criar comunidade</Button>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col mx-[5%] mt-16 gap-5">
            <h1 className="text-3xl font-bold mx-auto">SEJA BEM VINDA, ANA</h1>
            <div className="h-32 bg-white rounded-xl">
              <Textarea
                placeholder="Compartilhe conosco o que está pensando, uma nova habilidade, conte-nos como vai seu novo projeto"
                className="bg-white border-0  resize-none focus:outline-none w-full h-full"
              />
              <Button className="text-base bg-primaryGreen text-black font-bold relative bottom-14 left-[60%] md:left-[70%] lg:left-[80%]">
                Publicar
              </Button>
            </div>

            <div className="flex flex-col bg-white gap-2 py-10 rounded-xl">
              <Label className="text-lg text-center mb-10">
                Encontre as melhores comunidades para compartilhar seus interesses
              </Label>

              <h3 className="text-xl font-bold pl-12">Hoje</h3>
              <Separator />

              {contents.map((item) => (
                <div key={item.id} className="flex gap-8 mt-6 ml-10">
                  <img src={item.image} alt="Logo" className="w-[226px] h-[150px] rounded-xl object-cover" />
                  {/* </div> */}
                  <div className="flex flex-col gap-2 justify-center">
                    <Label className="text-base font-bold">{item.title}</Label>
                    <Label className="text-base max-w-[85%]">{item.text}</Label>
                    <Label className="text-base">{item.people}</Label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
