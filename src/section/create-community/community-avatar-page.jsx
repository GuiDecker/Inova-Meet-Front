import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@radix-ui/react-label";
import React from "react";

export const CreateCommunityAvatar = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  bg-mainBlue h-[170px]">
        <h1 className="text-5xl text-primaryGreen font-bold">Bem vindo</h1>
      </div>

      <div className="flex flex-col gap-16 px-8 pt-[30%] md:pt-[10%] lg:pt-[5%] items-center bg-primaryBlue h-[82.4vh]">
        {/* <div className=" flex flex-col gap-5 "> */}

        <Label className="text-2xl text-white w-full max-w-[500px] text-center font-bold">
          Adicione uma foto para que os membros saibam quem você é
        </Label>

        <Avatar className="w-32 h-32 md:w-48 md:h-48">
          <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <button className="bg-primaryGreen hover:bg-green-400 text-black w-full max-w-[400px] font-bold py-2 px-4 rounded">
          Carregar uma foto
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
