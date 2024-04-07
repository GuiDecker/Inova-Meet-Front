// import { Logo } from "@/assets/icons/user-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-mainBlue text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src="@/components/ui/icons/logo-inovameet-nova 1.svg" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-lg font-bold">Your Site Name</h1>
      </div>

      {/* Search Inputs and Buttons */}
      <div className="flex items-center">
        {/* Search Input 1 */}
        <Input
          type="text"
          placeholder="Pesquisar eventos"
          className="px-3 py-2 rounded-l-md rounded-r-none bg-white text-black placeholder-black focus:outline-none"
        />

        {/* Search Input 2 */}
        <Input
          type="text"
          placeholder="Location"
          className="px-3 py-2  rounded-none bg-white text-white placeholder-gray-500 focus:outline-none"
        />

        {/* Search Button */}
        <Button className="px-4 py-2 rounded-1-none bg-gray-600 hover:bg-gray-700 text-white rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Button className="px-4 py-2 bg-primaryGreen hover:bg-green-700 text-black rounded-md">
          Iniciar uma comunidade
        </Button>
        <Button className="px-4 py-2 bg-primaryGreen hover:bg-green-700 text-black rounded-md">Cadastre-se</Button>
        <div className="flex items-center">
          <img src="/profile-icon.png" alt="Profile" className="h-8 w-8 rounded-full" />
          {/* <Logo /> */}
        </div>
      </div>
    </header>
  );
};
