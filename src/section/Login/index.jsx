import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";


export const LoginPage = () => {
  return (
    <div >
      <div className="flex flex-col justify-center items-center  bg-mainBlue h-[170px]">
      <img src="././public/logo-inovameet.png" alt="Logo" width={100} height={85} />
      <h2 className="text-lg text-white font-bold -mt-4">
          Inova<span className="text-green-500">Meet</span>
        </h2>
      </div>
      
      <div className="flex flex-col gap-5 justify-center px-8 items-center bg-primaryBlue h-[82.4vh]">
        {/* <div className=" flex flex-col gap-5 "> */}

          <h1 className="text-2xl text-white font-bold">Login</h1>
          <Input className="max-w-[420px] h-12 rounded bg-white" placeholder="Email" />
          <Input className="max-w-[420px] h-12 rounded bg-white" placeholder="Senha" />
          <Label className="text-white">Ainda não é membro? <span className="text-primaryGreen">Cadastre-se</span></Label>
          <button className="bg-primaryGreen hover:bg-green-400 text-white font-bold py-2 px-4 rounded w-36">
            Entrar
          </button>
        {/* </div> */}
      </div>
     </div>
  );
};
