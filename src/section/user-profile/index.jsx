import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const UserProfilePage = () => {
  return (
    <div>
      <div className="flex pl-[10%] items-center  bg-mainBlue h-[170px]">
        <h1 className="text-2xl text-white font-bold -mt-4">
          Minha conta
        </h1>
      </div>

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex justify-center p-20 gap-x-24 bg-white w-[95%] h-[95%] border border-black rounded-2xl">
          <div className="flex flex-col items-center gap-7">
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="bg-primaryGreen hover:bg-green-400 text-black font-bold py-2 px-4 rounded w-36">
              Trocar foto de perfil
            </Button>
          </div>
          <div className="flex flex-col w-[50%]">
            <h1 className="text-2xl mb-4">Informações Pessoais</h1>
            {/* <hr className="border-zinc-400 border mb-4 w-[50vw]" /> */}
            <hr className="border-zinc-400 border mb-4 w-[100%]" />
            <div className="flex mb-4">
              <div className="flex flex-col gap-2 mr-4">
                <Label>Nome:</Label>
                <Input type="text" placeholder="Primeiro Nome" className="bg-secondaryGray" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Sobrenome:</Label>
                <Input type="text" placeholder="Último Nome" className="bg-secondaryGray" />
              </div>
            </div>
            <Label>Email:</Label>
            <Input type="emai" placeholder="Digite seu email" className="bg-secondaryGray mb-4 mt-2" />
            <div className="flex mb-4">
              <div className="flex flex-col mr-4 gap-2">
                <Label>Interesses:</Label>
                <Input type="text" placeholder="Digite seus interesses" className="bg-secondaryGray" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Portifólio:</Label>
                <Input type="text" placeholder="Digite seu portifólio" className="bg-secondaryGray" />
              </div>
            </div>
            <Label>Bio:</Label>
            <textarea
              type="text"
              className="resize-none w-full max-w-[100%] h-32 mt-2 border border-gray-300 bg-secondaryGray rounded p-2"
              placeholder="Escreva algo sobre você..."
            ></textarea>
          </div>
        </section>
      </div>
    </div>
  );
};
