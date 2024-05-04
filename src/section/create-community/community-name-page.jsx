import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export const CreateCommunityName = () => {
  return (
    <div>
      <div className="flex pl-[10%] items-center  bg-mainBlue h-[170px]">
        <h1 className="text-2xl text-white font-bold -mt-4">
          Crie uma comunidade
        </h1>
      </div>

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex justify-center p-20 gap-x-24 bg-white w-[95%] h-[95%] rounded-2xl">
          <div className="flex flex-col items-center  gap-7">
           <h2 className="text-2xl mr-auto text-black font-bold">Dê um nome a sua comunidade</h2>
           <Label className="text-base">Escolha um nome que identifique o propósito da sua comunidade</Label>

           <textarea
              type="text"
              className="resize-none w-full max-w-[100%] h-12 mt-2 border border-gray-300 bg-secondaryGray rounded p-2"
              placeholder="Comunidade Motion: o design no futuro"
            />

           <Button className="w-[30%] bg-blue-800 hover:bg-blue-700">
            Próximo
           </Button>
          </div>
          <div className="flex flex-col p-5 gap-3 rounded h-[200px] w-full max-w-[250px] bg-primaryGray">
          <h2 className="text-2xl text-black font-bold">Dicas</h2>
          <Label className="leading-1 text-base">Dê um nome que seja lúdico e represente o propósito e o assunto que será abordado na comunidade</Label>
          </div>
        </section>
      </div>
    </div>
  );
};
