import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Box1 - 30% width */}
      <div className="flex flex-col pt-[5%] items-center bg-primaryBlue h-[50vh] md:h-[100vh] w-[100%] max-w-[100%] md:w-[30%] md:max-w-[30%]">
        <img src="/logo-inovameet.png" alt="Logo" width={200} height={170} />
        <h2 className="text-2xl text-white font-bold -mt-4 mb-[20%] md:mb-[40%]">
          Inova<span className="text-green-500">Meet</span>
        </h2>
        <h2 className="text-3xl mb-4 text-white font-bold">Bem-vindo de volta!</h2>
        <Label className="text-3xl text-white text-center font-bold">Acesse sua conta agora mesmo</Label>
      </div>

      {/* Box2 - 70% width */}
      <div className="flex flex-col gap-5 justify-center px-8 items-center mx-auto bg-white h-[60vh] md:h-[100vh] w-[70%]">
        <h1 className="text-4xl text-primaryGreen font-bold">Crie sua conta</h1>
        <Label className="text-zinc-400 light">Preencha seus dados</Label>
        <Input className="max-w-[420px] h-12 rounded-lg mb-3 bg-primaryGray" placeholder="Nome Completo" />
        <Input className="max-w-[420px] h-12 rounded-lg mb-3 bg-primaryGray" placeholder="Email" />
        <Input className="max-w-[420px] h-12 rounded-lg mb-3 bg-primaryGray" placeholder="Senha" />
        <Button className="bg-primaryGreen hover:bg-green-400 text-black font-bold py-2 px-4 rounded-lg h-10 w-52">
          Cadastre-se
        </Button>
      </div>
    </div>
  );
};
