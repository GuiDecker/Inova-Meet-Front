import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const UserProfilePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  bg-mainBlue h-[170px]">
        <img src="././public/logo-inovameet.png" alt="Logo" width={100} height={85} />
        <h2 className="text-lg text-white font-bold -mt-4">
          Inova<span className="text-green-500">Meet</span>
        </h2>
      </div>

      <div className="flex justify-center items-center bg-primaryGray h-[82.4vh]">
        <section className="flex p-20 gap-x-24 bg-white w-[95%] h-[95%] border border-black  rounded-2xl">
          <div className="flex flex-col items-center gap-7">
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" alt="my profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button className="bg-primaryGreen hover:bg-green-400 text-white font-bold py-2 px-4 rounded w-36 ">
              Trocar foto de perfil
            </Button>
          </div>
          <div>
            <h1 className="text-2xl">Informações Pessoais</h1>
          </div>
        </section>
      </div>
    </div>
  );
};
