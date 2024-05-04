import { ArrowBackIcon } from "@/assets/icons/arrow-back";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { CreateCommunityHeader } from "./header";

export const CreateCommunityReview = () => {
  return (
    <div>
      <CreateCommunityHeader />
      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex flex-col lg:flex-row justify-center p-5 lg:p-20 gap-5 lg:gap-x-24 bg-white w-[95%] h-[95%] rounded-2xl">
          <div className="flex items-center gap-3 absolute left-[5%] top-[23%] ">
            <ArrowBackIcon />
            <Label>Voltar</Label>
          </div>
          <div className="flex flex-col gap-5 justify-start ">
            <h2 className="text-2xl text-black font-bold">Revise os dados da sua comunidade</h2>
            <hr className="border-zinc-400 border mb-4 ml-0 lg:ml-[-16%] w-[97%] lg:w-[135%]" />
            <Label className="mt-4">Nome do grupo</Label>
            <Input type="text" placeholder="Nome do grupo" className="bg-secondaryGray" />

            <Label className="mt-4">Descreva sua comunidade</Label>
            <Input type="text" placeholder="Descreva sua comunidade" className="bg-secondaryGray" />

            <Label>Tópicos de interesse selecionados</Label>
            <div className="flex flex-wrap  items-center gap-3 w-[100%] min-h-32">
              <Badge className="w-[40%] h-9 flex text-center justify-center bg-blue-800 hover:bg-blue-900 rounded-s-md">
                Dado da api
              </Badge>
              <Badge className="w-[40%] h-9 flex text-center justify-center bg-blue-800 hover:bg-blue-900 rounded-s-md">
                Dado da api
              </Badge>
              <Badge className="w-[40%] h-9 -mt-10 flex text-center justify-center bg-blue-800 hover:bg-blue-900 rounded-s-md">
                Dado da api
              </Badge>
              <Badge className="w-[40%] h-9 -mt-10 flex text-center justify-center bg-blue-800 hover:bg-blue-900 rounded-s-md">
                Dado da api
              </Badge>
            </div>

            <Button className="w-[45%] bg-primaryGreen hover:bg-green-400 mx-auto">Criar comunidade</Button>
          </div>
        </section>
      </div>
    </div>
  );
};
