import React from "react";
import { Label } from "@/components/ui/label";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  const socialMediaIcons = {
    Facebook: <InstagramLogoIcon />,
    Instagram: <InstagramLogoIcon />,
    Twitter: <TwitterLogoIcon />,
    LinkedIn: <LinkedInLogoIcon />,
  };

  const socialMediaPlatforms = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

  return (
    <footer className="h-72 items-center bg-primaryBlue text-white">
      <section className="flex justify-center gap-20 -ml-[85px] mb-7">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-2xl font-bold">Sua conta</h1>
          <Label className="text-sm text-zinc-200 font-normal">Cadastre-se</Label>
          <Label className="text-sm text-zinc-200 font-normal">Entrar</Label>
          <Label className="text-sm text-zinc-200 font-normal">Conecte-se com comunidades</Label>
          <Label className="text-sm text-zinc-200 font-normal">Comece uma comunidade</Label>
        </div>
        <div className="h-48 w-[1px] bg-zinc-300"></div>
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-2xl font-bold">Siga-nos</h1>

          {socialMediaPlatforms.map((platform) => (
            <div key={platform} className="flex items-center">
              {socialMediaIcons[platform]}
              <Label className="text-sm text-zinc-200 font-normal ml-2">{platform}</Label>
            </div>
          ))}
        </div>
      </section>
      <p className="text-center bg-primaryBlue">&copy; 2024 YourWebsiteName. All rights reserved.</p>
    </footer>
  );
};
