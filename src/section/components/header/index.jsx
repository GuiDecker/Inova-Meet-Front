import { ProfileIcon } from "@/assets/icons/profile";
import { SearchIcon } from "@/assets/icons/search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-mainBlue text-white h-28">
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
      {/* Action Buttons */}
      <div className="flex items-center space-x-4 gap-4">
        <Button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 bg-primaryGreen hover:bg-green-400 text-black rounded-md"
        >
          Iniciar uma comunidade
        </Button>
        <Button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 bg-primaryGreen hover:bg-green-400 text-black rounded-md"
        >
          Cadastre-se
        </Button>
        <div onClick={() => navigate("/user-profile")} className="flex items-center cursor-pointer">
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
};
