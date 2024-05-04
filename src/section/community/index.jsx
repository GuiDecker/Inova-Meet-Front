import React, { Fragment } from "react";
import { Footer } from "../components/footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ChatBubbleIcon, HeartFilledIcon, HeartIcon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
import { FeedHeader } from "../home-feed/components/header";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GlobeIcon } from "@/assets/icons/globe";
import { BuildingIcon } from "@/assets/icons/building";

export const CommunityPage = () => {
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
      <FeedHeader />
      <section className="w-full h-full pb-32 bg-primaryGray flex justify-center">
        <div className="flex flex-row justify-center gap-8">
          <div className="flex flex-col items-center w-[400px] ml-14">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logo"
              className="w-full h-[180px] object-cover rounded-xl mt-7"
            />
            <div className="flex flex-col items-center gap-2 bg-white mt-8 pb-8 w-full rounded-xl">
              <div className="flex flex-col justify-center items-center bg-primaryGreen w-full h-20 rounded-t-xl">
                <Label className="text-xl font-bold">Ana Barbosa</Label>
                <Label className="text-base mb-2">Software Engineer</Label>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Label className="text-xl font-bold">Idioma</Label>
                <Label className="text-base mb-2">Português (Brasil)</Label>
              </div>
              <Separator className="bg-gray-300" />
              <div className="flex flex-col justify-center items-center">
                <Label className="text-xl font-bold">Tipo</Label>
                <Label className="text-base mb-2">Público</Label>
              </div>
              <Separator className="bg-gray-300" />
              <div className="flex flex-col justify-center items-center">
                <Label className="text-xl font-bold">Criado em</Label>
                <Label className="text-base mb-2">02/04/2020</Label>
              </div>
              <Separator className="bg-gray-300" />
              <div className="flex flex-col justify-center items-center">
                <Label className="text-xl font-bold">Proprietário</Label>
                <Label className="text-base mb-2">Maria Cardoso</Label>
              </div>
              <Separator className="bg-gray-300" />
              <div className="flex flex-col justify-center items-center">
                <Label className="text-xl font-bold">Moderadores</Label>
                <Label className="text-base -mb-1">Maria Cardoso</Label>
                <Label className="text-base">Ana Barbosa</Label>
              </div>
              {/* <Separator /> */}
            </div>
            {/* Next meeting */}
            <div className="flex flex-col gap-2 bg-white mt-8 pb-8 w-full rounded-xl">
              <h2 className="text-xl text-black text-center mt-5">Próximos Encontros</h2>
              <Separator />
              <div className="flex flex-col justify-between mx-5 gap-2">
                <Label className="text-sm">
                  Modalidade: <b>presencial</b>
                </Label>
                <Label className="text-sm">Lugar:</Label>
                <Label className="text-sm">Endereço:</Label>
                <Label className="text-sm">Data: 18/05/2024</Label>
                <Button className="mt-2 text-base bg-primaryGreen text-black font-bold">Confirmar a presença</Button>
              </div>
            </div>

            <div className="flex flex-col gap-2 bg-white mt-8 pb-8 w-full rounded-xl">
              <h2 className="text-xl text-black text-center mt-5">Sugestões</h2>
              <Separator />
              <Dialog>
                <DialogTrigger asChild>
                  {/* <Button variant="outline">Open Modal</Button> */}
                  <Button className="mt-2 mx-5 text-base bg-primaryGreen text-black font-bold">
                    Marcar um encontro
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Criar novo encontro</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label>Lugar</Label>
                      <Input placeholder="FIAP Paulista" />
                    </div>
                    <div className="space-y-2">
                      <Label>Endereço</Label>
                      <Input placeholder="Av. Feijão Maravilha 73" />
                    </div>
                    <Label htmlFor="account-type">Account Type</Label>
                    <RadioGroup defaultValue="online" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem className="peer sr-only" id="online" value="online" />
                        <Label
                          className="flex items-center space-x-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:border-gray-400 data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:data-[state=checked]:border-gray-50 dark:data-[state=checked]:bg-gray-800"
                          htmlFor="online"
                        >
                          <GlobeIcon className="h-5 w-5" />
                          <span>Online</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem className="peer sr-only" id="presencial" value="presencial" />
                        <Label
                          className="flex items-center space-x-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:border-gray-400 data-[state=checked]:border-gray-900 data-[state=checked]:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:data-[state=checked]:border-gray-50 dark:data-[state=checked]:bg-gray-800"
                          htmlFor="presencial"
                        >
                          <BuildingIcon className="h-5 w-5" />
                          <span>Presencial</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Criar encontro</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              {/* <Button className="mt-2 mx-5 text-base bg-primaryGreen text-black font-bold">Marcar um encontro</Button> */}
            </div>
          </div>
          {/* Home Feed */}
          <div className="flex-grow flex flex-col mx-[5%] mt-6 gap-5 max-w-[1200px]">
            <div className="flex gap-5">
              <h1 className="text-xl font-bold">Quiet Ambition</h1>
              <Button className="text-base w-40 bg-primaryGreen hover:bg-green-400 text-black font-bold">
                Participe
              </Button>
            </div>

            <div className="flex flex-col gap-3 bg-white rounded-xl p-4">
              <div className="flex justify-between items-center">
                <Label>Descrição da comunidade</Label>
                <div className="flex items-center justify-center w-9 h-9 bg-primaryGreen rounded-full">
                  <Pencil1Icon width={20} height={20} />
                </div>
              </div>
              <Label className="text-base mb-3">
                Encontre pessoa da área de tecnologia que não querem seguir a área de gestão e entenda o porquê.
              </Label>
            </div>

            <div className="flex flex-col gap-3 bg-white rounded-xl p-4">
              <Label>Tópicos de interesse</Label>
              <div className="flex gap-3 flex-wrap mb-3">
                <Button className="bg-mainBlue hover:bg-blue-900 font-bold text-white">Bussiness</Button>
                <Button className="bg-mainBlue hover:bg-blue-900 font-bold text-white">Technology</Button>
              </div>
            </div>

            <Separator className="bg-zinc-400" />
            <Label className="text-lg ">Faça uma Postagem</Label>

            <div className="h-32 bg-white rounded-xl">
              <Textarea
                placeholder="Compartilhe conosco o que está pensando, uma nova habilidade, conte-nos como vai seu novo projeto"
                className="bg-white border-0  resize-none focus:outline-none w-full h-full"
              />
              <Button className="text-base bg-primaryGreen text-black font-bold relative bottom-14 left-[60%] md:left-[70%] lg:left-[80%]">
                Publicar
              </Button>
            </div>
            <Label className="text-lg">Postagens da Comunidade</Label>
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
