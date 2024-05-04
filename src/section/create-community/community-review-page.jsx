import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import React from "react";

export const CreateCommunityReview = () => {
  return (
    <div>
      <div className="flex pl-[10%] items-center  bg-mainBlue h-[170px]">
        <h1 className="text-2xl text-white font-bold -mt-4">Crie uma comunidade</h1>
      </div>

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex justify-center p-20 gap-x-24 bg-white w-[95%] h-[95%] rounded-2xl">
          <div className="flex items-center gap-3 absolute left-[5%] top-[23%] ">
            {/* // trocar esse icone veio */}
            <ArrowLeftIcon className="h-7 w-7 rounded-full bg-red-600" />
            <Label>Voltar</Label>
          </div>
          <div className="flex flex-col gap-5 justify-start ">
            <h2 className="text-2xl text-black font-bold">Revise os dados da sua comunidade</h2>
            {/* <Separator className="-mt-2 w-full" /> */}
            <hr className="border-zinc-400 border mb-4 ml-[-16%] w-[135%]" />
            <Label className="mt-4">Nome do grupo</Label>
            <Input type="text" placeholder="Nome do grupo" className="bg-secondaryGray" />

            <Label className="mt-4">Descreva sua comunidade</Label>
            <Input type="text" placeholder="Descreva sua comunidade" className="bg-secondaryGray" />

            <Label>Tópicos de interesse selecionados</Label>
            <div className="flex flex-wrap justify-centeritems-center gap-3 w-[100%] h-32">
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
