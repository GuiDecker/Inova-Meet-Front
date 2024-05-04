import { ProfileIcon } from "@/assets/icons/profile";
import { SearchIcon } from "@/assets/icons/search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const FeedHeader = () => {
  return (
    <header className="flex justify-between items-center py-6 px-6 bg-mainBlue text-white h-28">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <img src="/logo-inovameet.png" alt="Logo" width={100} height={85} />
        <h1 className="text-lg font-bold -mt-4">
          Inova<span className="text-green-500">Meet</span>
        </h1>
      </div>
      {/* Search Inputs and Buttons */}
      <div className="flex items-center max-w-[447px]">
        <Input
          type="text"
          placeholder="Pesquisar eventos"
          className="px-3 py-2 rounded-l-md rounded-r-none bg-white text-black placeholder-black focus:outline-none"
        />
        <Input
          type="text"
          placeholder="São Paulo, Br"
          className="px-3 py-2  rounded-none bg-white text-black placeholder-gray-500 focus:outline-none"
        />

        <Button className="px-4 py-2  bg-primaryGreen hover:bg-green-400 text-white rounded-none rounded-r-md">
          <SearchIcon />
        </Button>
      </div>
      <Button className="px-4 py-2 bg-primaryGreen hover:bg-green-400 text-black rounded-md">
        Iniciar uma comunidade
      </Button>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 gap-4">
        <div className="flex flex-col gap-3 items-center justify-center cursor-pointer ">
          <ProfileIcon />
          <Label>Conexões</Label>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center cursor-pointer ">
          <ProfileIcon />
          <Label>Notificações</Label>
        </div>
        <div className="flex items-center cursor-pointer ">
          <Avatar className="w-[70px] h-[70px] -mt-3 border-8 border-mainBlue">
            <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
