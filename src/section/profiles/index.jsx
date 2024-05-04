import React, { Fragment } from "react";
import { Footer } from "../components/footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ChatBubbleIcon, HeartFilledIcon, HeartIcon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";

export const ProfilePage = () => {
  const contents = [
    {
      id: 1,
      user_image: "https://github.com/shadcn.png",
      user_name: "Rosane Silva",
      post_text:
        "Galera, vou usar aqui para postar um pouco das minhas artes. Quem puder, curte e comenta para poder me ajudar. Gratidão!!!!!!",
      likes: 4,
      comments: 0,
      date: "05/03/2024",
      post_image: "",
    },
    {
      id: 2,
      user_image: "https://github.com/shadcn.png",
      user_name: "Rosane Silva",
      post_text: "Comunidade Quiet Ambition",
      likes: 7,
      comments: 0,
      date: "08/03/2024",
      post_image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      user_image: "https://github.com/shadcn.png",
      user_name: "Thiago Silva",
      post_text: "Sociedade de Realidade Virtual, estamos com inscrições abertas...",
      likes: 13,
      comments: 0,
      date: "09/02/2024",
      post_image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      user_image: "https://github.com/shadcn.png",
      user_name: "Albert Einstein",
      post_text: "Relatividade Geral é muito legal!!! 🪐🪐🧐",
      likes: 1,
      comments: 0,
      date: "11/02/2024",
      post_image:
        "https://plus.unsplash.com/premium_photo-1663091701962-2ae72a2ad2ac?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Fragment>
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/05/49/86/39/240_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg"
          alt="Logo"
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute right-20 top-6 flex items-center justify-center w-9 h-9 bg-primaryGreen rounded-full">
          <Pencil1Icon width={20} height={20} />
        </div>
      </div>
      <section className="w-full h-full pb-32 bg-primaryGray flex justify-center">
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col items-center gap-2 w-[400px] ml-14">
            <div className="flex flex-col items-center gap-2 bg-white pt-10 pb-8 w-full rounded-b-xl">
              <Avatar className="w-32 h-32  -mt-28 mb-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="user profile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button className="w-[60%] text-base font-bold bg-primaryGreen hover:bg-green-400  text-blac mb-3">
                Follow
              </Button>
              <Separator />
              <Label className="text-base text-center my-2">
                Following <hr className="border-none" />
                <b>35</b>
              </Label>
              <Separator />
              <Label className="text-base text-center mt-2">
                Followers <hr className="border-none" />
                <b>58</b>
              </Label>
              <Separator />
              <Label className="text-lg text-center my-2">
                Portifólio <hr className="border-none" />
                <b className="text-sm">www.rosanasilva.com.br</b>
              </Label>
              <Separator />
              <Label className="text-lg text-center my-2">
                Contato <hr className="border-none" />
                <b className="text-sm">rosana_silva@gmail.com</b>
              </Label>
            </div>
            {/* Sugestões */}
            <div className="flex flex-col gap-2 bg-white mt-16 pb-8 w-full rounded-xl">
              <h2 className="text-xl text-black text-center my-5">Grupos que sou participante</h2>
              <div className="flex items-center justify-between mx-5">
                <Label className="text-sm font-bold max-w-[150px]">Comunidade Mulheres que codam</Label>
                <PlusIcon />
              </div>
              <div className="flex items-center justify-between mx-5">
                <Label className="text-sm font-bold max-w-[150px]">Comunidade Quiet Ambition</Label>
                <PlusIcon />
              </div>

              <div className="flex flex-col mx-5 mt-2 gap-5 items-center justify-center text-center">
                <h3 className="text-xl font-bold">Minhas Comunidades</h3>
              </div>
              <div className="flex items-center justify-between mx-5">
                <Label className="text-sm font-bold max-w-[150px]">Comunidade Quiet Ambition</Label>
                <PlusIcon />
              </div>
            </div>
          </div>
          {/* Home Feed */}
          <div className="flex-grow flex flex-col mx-[5%] mt-6 gap-5 max-w-[1200px]">
            <div className="flex justify-between mr-5">
              <Label className="text-xl font-bold">Rosana Silva</Label>
              <div className="flex items-center justify-center w-9 h-9 bg-primaryGreen rounded-full">
                <Pencil1Icon width={20} height={20} />
              </div>
            </div>
            <div className="flex flex-col gap-2 -mt-3">
              <Label className="text-sm">UX e UI Professional</Label>
              <Label className="text-sm">
                <b>Interesse:</b> Design/ Artes Visuais
              </Label>
            </div>
            <Separator className="bg-zinc-400" />
            <Label className="text-sm mb-5">
              Sou uma profissioan de Ux & UI design especializada em trazer ao seu cliente a melhor experiência
              possível. Sou mãe de pet, gosto de gatos, arte e música.
            </Label>
            <Separator className="bg-zinc-400" />
            <Label className="text-lg mb-5">Minhas Postagens</Label>

            {/* Postagens */}
            {contents.map((item) => (
              <div key={item.item} className="bg-white rounded-xl w-full h-auto p-6">
                <div className="flex justify-between ">
                  <div className="flex gap-2">
                    <Avatar className="w-12 h-12 -mt-3 mb-4">
                      <AvatarImage src={item.user_image} alt="user profile" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Label className="text-xs ">
                      <b>{item.user_name}</b>
                    </Label>
                    <Label className="text-xs ">{item.date}</Label>
                  </div>
                  <div className="flex">
                    <PlusIcon width={20} height={20} />
                    <Label className="text-xs">Seguir</Label>
                  </div>
                </div>
                <img
                  src={item.post_image}
                  className="w-full rounded-xl mb-3"
                  style={{ marginTop: item.post_image ? 12 : -10 }}
                />
                <Label className="text-sm leading-[0px] ml-2">{item.post_text}</Label>
                <div className="flex justify-between mt-5">
                  <div className="flex gap-2">
                    <HeartFilledIcon width={20} height={20} color="green" />
                    <Label className="text-xs">{item.likes} Likes</Label>
                  </div>
                  <Label className="text-xs">{item.comments} comentários</Label>
                </div>
                <Separator className="bg-zinc-400 my-1" />
                <div className="flex gap-3 mt-2 cursor-pointer">
                  <HeartIcon width={20} height={20} />
                  <ChatBubbleIcon width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
