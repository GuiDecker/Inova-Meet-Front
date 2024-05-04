import { Button } from "@/components/ui/button";
import React from "react";

export const CreateCommunityHeader = () => {
  return (
    <div className="flex flex-col p-6 bg-mainBlue h-[170px]">
      <Button className="w-32 bg-blue-800 ml-[60%] md:ml-[80%] lg:ml-[90%] hover:bg-blue-700">Salvar e Sair</Button>
      <h1 className="text-2xl ml-0 md:ml-[3%] text-white font-bold mt-[10%] md:mt-[5%] lg:mt-[2%]">
        Crie uma comunidade
      </h1>
    </div>
  );
};
