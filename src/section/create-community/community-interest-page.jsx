import { ArrowBackIcon } from "@/assets/icons/arrow-back";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";
import { CreateCommunityHeader } from "./header";

export const CreateCommunityInterest = () => {
  return (
    <div>
      <CreateCommunityHeader />

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex flex-col lg:flex-row justify-center p-5 lg:p-20 gap-5 lg:gap-x-24 bg-white w-full lg:w-[95%] h-[95%] rounded-2xl">
          <div className="flex items-center gap-3 absolute left-[5%] top-[23%] ">
            <ArrowBackIcon />
            <Label>Voltar</Label>
          </div>
          <div className="flex flex-col mx-auto items-center gap-7 w-full md:w-3/5 lg:w-[40%]">
            <h2 className="text-2xl mr-auto md:mx-auto text-black font-bold">Escolha os tópicos de interesse</h2>
            <div className="flex flex-wrap justify-center items-center gap-3 w-[100%] h-40 bg-primaryGray rounded-md">
              <Badge className="w-[40%] h-11 flex text-center justify-center bg-blue-800">Design</Badge>
              <Badge className="w-[40%] h-11 flex text-center justify-center bg-blue-800">Artes visuais</Badge>
              <Badge className="w-[40%] h-11 -mt-10 flex text-center justify-center bg-blue-800">Business</Badge>
              <Badge className="w-[40%] h-11 -mt-10 flex text-center justify-center bg-blue-800">Technology</Badge>
            </div>

            {/* <Button className="w-[40%] h-11 bg-blue-800 hover:bg-blue-700">Próximo</Button> */}
            <Button className="w-full md:w-[50%] lg:w-[30%] bg-blue-800 hover:bg-blue-700">Próximo</Button>
          </div>
          <div className="flex flex-col mx-auto gap-3 rounded w-full md:w-[80%] lg:w-[40%] max-h-[370px] bg-primaryGray p-5">
            {/* <div className="flex flex-col p-5 gap-3 max-h-[250px] rounded-md w-full max-w-[250px] bg-primaryGray"> */}
            <h2 className="text-2xl text-black font-bold">Dicas</h2>
            <Label className="text-base">Seja especifico!</Label>
            <Label className="text-base">
              As comunidades serão promovidas para usuários que apresentem interesses em comum aos da própria comunidade
            </Label>
          </div>
        </section>
      </div>
    </div>
  );
};
