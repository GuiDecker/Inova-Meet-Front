import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import React from "react";

export const CreateCommunityDescription = () => {
  return (
    <div>
      <div className="flex pl-[10%] items-center  bg-mainBlue h-[170px]">
        <h1 className="text-2xl text-white font-bold -mt-4">
          Crie uma comunidade
        </h1>
      </div>

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex justify-center p-20 gap-x-24 bg-white w-[95%] h-[95%] rounded-2xl">
          <div className="flex items-center gap-3 absolute left-[5%] top-[23%] ">
          {/* // trocar esse icone veio */}
            <ArrowLeftIcon className="h-7 w-7 rounded-full bg-red-600" />
            <Label>Voltar</Label>
          </div>
          <div className="flex flex-col items-center  gap-7">
           <h2 className="text-2xl mr-auto text-black font-bold">Descreva sua comunidade</h2>
           <Label className="text-base">Escolha uma descrição que conte aos usuários quais serão os assuntos abordados na comunidade</Label>

           <textarea
              type="text"
              className="resize-none w-full max-w-[100%] h-32 mt-2 border border-gray-300 bg-secondaryGray rounded p-2"
              placeholder="Comunidade Motion: o design no futuro"
            />

           <Button className="w-[30%] bg-blue-800 hover:bg-blue-700">
            Próximo
           </Button>
          </div>
          <div className="flex flex-col p-5 gap-3 max-h-[370px] rounded w-full max-w-[250px] bg-primaryGray">
          <h2 className="text-2xl text-black font-bold">Dicas</h2>
          <Label className="text-base">Considere essas questões a serem respondidas :</Label>
          <Label className="text-base">Qual o objetivo desse grupo?</Label>
          <Label className="text-base">Qual serão os assuntos abordados</Label>
          <Label className="text-base">Quais serão os eventos que acontecerão?</Label>
          </div>
        </section>
      </div>
    </div>
  );
};
