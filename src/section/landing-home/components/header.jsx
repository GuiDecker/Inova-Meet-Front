import { ProfileIcon } from "@/assets/icons/profile";
import { SearchIcon } from "@/assets/icons/search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-mainBlue text-white h-28">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <img src="././public/logo-inovameet.png" alt="Logo" width={100} height={85} />
        <h1 className="text-lg font-bold -mt-4">
          Inova<span className="text-green-500">Meet</span>
        </h1>
      </div>
      {/* Search Inputs and Buttons */}
      <div className="flex items-center max-w-[447px]">
        {/* Search Input 1 */}
        <Input
          type="text"
          placeholder="Pesquisar eventos"
          className="px-3 py-2 rounded-l-md rounded-r-none bg-white text-black placeholder-black focus:outline-none"
        />

        {/* Search Input 2 */}
        <Input
          type="text"
          placeholder="São Paulo, Br"
          className="px-3 py-2  rounded-none bg-white text-white placeholder-gray-500 focus:outline-none"
        />

        {/* Search Button */}
        <Button className="px-4 py-2  bg-primaryGreen hover:bg-green-400 text-white rounded-none rounded-r-md">
          <SearchIcon />
        </Button>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center space-x-4 gap-4">
        <Button className="px-4 py-2 bg-primaryGreen hover:bg-green-400 text-black rounded-md">
          Iniciar uma comunidade
        </Button>
        <Button className="px-4 py-2 bg-primaryGreen hover:bg-green-400 text-black rounded-md">Cadastre-se</Button>
        <div className="flex items-center cursor-pointer">
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
};
