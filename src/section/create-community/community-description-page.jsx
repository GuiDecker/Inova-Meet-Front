import { ArrowBackIcon } from "@/assets/icons/arrow-back";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { CreateCommunityHeader } from "./header";

export const CreateCommunityDescription = () => {
  return (
    <div>
      <CreateCommunityHeader />

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex flex-col lg:flex-row justify-center p-5 lg:p-20 gap-5 lg:gap-x-24 bg-white w-full lg:w-[95%] h-[95%] rounded-2xl">
          {/* Back Button */}
          <div className="flex items-center gap-3 absolute left-[5%] top-[23%] ">
            <ArrowBackIcon />
            <Label>Voltar</Label>
          </div>
          {/* Main Content */}
          <div className="flex flex-col items-center gap-5 w-full lg:w-3/5">
            <h2 className="text-2xl text-black font-bold">Descreva sua comunidade</h2>
            <Label className="text-base">
              Escolha uma descrição que conte aos usuários quais serão os assuntos abordados na comunidade
            </Label>
            <Textarea
              type="text"
              className="resize-none w-full max-w-full md:max-w-[80%] h-32 mt-2 border border-gray-300 bg-secondaryGray rounded p-2"
              placeholder="Comunidade Motion: o design no futuro"
            />
            <Button className="w-full md:w-[50%] lg:w-[30%] bg-blue-800 hover:bg-blue-700">Próximo</Button>
          </div>
          {/* Side Panel */}
          <div className="flex flex-col mx-auto gap-3 rounded w-full md:w-[80%] lg:w-[40%] max-h-[370px] bg-primaryGray p-5">
            <h2 className="text-2xl text-black font-bold">Dicas</h2>
            <Label className="text-base">Considere essas questões a serem respondidas:</Label>
            <Label className="text-base">Qual o objetivo desse grupo?</Label>
            <Label className="text-base">Quais serão os assuntos abordados?</Label>
            <Label className="text-base">Quais serão os eventos que acontecerão?</Label>
          </div>
        </section>
      </div>
    </div>
  );
};
