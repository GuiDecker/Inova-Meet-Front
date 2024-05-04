import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const UserProfilePage = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex pl-4 md:pl-[10%] items-center bg-mainBlue h-[170px]">
        <h1 className="text-2xl text-white font-bold">Minha conta</h1>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex flex-col md:flex-row justify-center m-5 md:m-0 p-5 md:p-20 gap-5 md:gap-x-24 bg-white w-full md:w-[95%] h-[95%] border border-black rounded-2xl">
          <div className="flex flex-col items-center gap-5">
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="bg-primaryGreen hover:bg-green-400 text-black font-bold py-2 px-4 rounded w-36">
              Trocar foto de perfil
            </Button>
          </div>

          {/* Personal Information */}
          <div className="flex flex-col w-full md:w-[50%]">
            <h1 className="text-2xl mb-4">Informações Pessoais</h1>
            <hr className="border-zinc-400 border mb-4 w-full" />
            <div className="flex flex-col mb-4">
              <div className="flex flex-col gap-2 mb-4 md:flex-row md:mb-0">
                <div className="w-full md:w-1/2 md:mr-4">
                  <Label>Nome:</Label>
                  <Input type="text" placeholder="Primeiro Nome" className="bg-secondaryGray" />
                </div>
                <div className="w-full md:w-1/2">
                  <Label>Sobrenome:</Label>
                  <Input type="text" placeholder="Último Nome" className="bg-secondaryGray" />
                </div>
              </div>
              <Label>Email:</Label>
              <Input type="email" placeholder="Digite seu email" className="bg-secondaryGray" />
            </div>
            <div className="flex flex-col mb-4 md:flex-row md:gap-4">
              <div className="w-full md:w-1/2">
                <Label>Interesses:</Label>
                <Input type="text" placeholder="Digite seus interesses" className="bg-secondaryGray" />
              </div>
              <div className="w-full md:w-1/2">
                <Label>Portfólio:</Label>
                <Input type="text" placeholder="Digite seu portfólio" className="bg-secondaryGray" />
              </div>
            </div>
            <Label>Bio:</Label>
            <textarea
              type="text"
              className="resize-none w-full h-32 mt-2 border border-gray-300 bg-secondaryGray rounded p-2"
              placeholder="Escreva algo sobre você..."
            ></textarea>
          </div>
        </section>
      </div>
    </div>
  );
};
