"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  HeartIcon,
  MessageCircle,
  Send,
} from "lucide-react";
import { Button } from "../ui/button";

import { Courgette } from "next/font/google";
const courgette = Courgette({ weight: "400", subsets: ["latin"] });
const StoryCarousel = () => {
  //  Types
  interface Story {
    name: string;
    avatar: string;
    story: string;
    timestamp: string;
  }
  //   Mock data
  const storiesMock = [
    {
      name: "Alice Johnson",
      avatar: "https://source.unsplash.com/200x200/?portrait&1",
      story: "https://source.unsplash.com/400x600/?portrait&1",
      timestamp: "2h",
    },
    {
      name: "Bob Smith",
      avatar: "https://source.unsplash.com/200x200/?portrait&2",
      story: "https://source.unsplash.com/400x600/?portrait&2",
      timestamp: "5h",
    },
    {
      name: "Charlie Davis",
      avatar: "https://source.unsplash.com/200x200/?portrait&3",
      story: "https://source.unsplash.com/400x600/?portrait&3",
      timestamp: "10h",
    },
    {
      name: "David Miller",
      avatar: "https://source.unsplash.com/200x200/?portrait&4",
      story: "https://source.unsplash.com/400x600/?portrait&4",
      timestamp: "14h",
    },
    {
      name: "Emma White",
      avatar: "https://source.unsplash.com/200x200/?portrait&5",
      story: "https://source.unsplash.com/400x600/?portrait&5",
      timestamp: "18h",
    },
    {
      name: "Frank Wilson",
      avatar: "https://source.unsplash.com/200x200/?portrait&6",
      story: "https://source.unsplash.com/400x600/?portrait&6",
      timestamp: "20h",
    },
    {
      name: "Grace Brown",
      avatar: "https://source.unsplash.com/200x200/?portrait&7",
      story: "https://source.unsplash.com/400x600/?portrait&7",
      timestamp: "22h",
    },
    {
      name: "Harry Johnson",
      avatar: "https://source.unsplash.com/200x200/?portrait&8",
      story: "https://source.unsplash.com/400x600/?portrait&8",
      timestamp: "24h",
    },
    {
      name: "Isabel Davis",
      avatar: "https://source.unsplash.com/200x200/?portrait&9",
      story: "https://source.unsplash.com/400x600/?portrait&9",
      timestamp: "1h",
    },
    {
      name: "Jack Robinson",
      avatar: "https://source.unsplash.com/200x200/?portrait&10",
      story: "https://source.unsplash.com/400x600/?portrait&10",
      timestamp: "3h",
    },
    {
      name: "Kelly Miller",
      avatar: "https://source.unsplash.com/200x200/?portrait&11",
      story: "https://source.unsplash.com/400x600/?portrait&11",
      timestamp: "6h",
    },
    {
      name: "Leo White",
      avatar: "https://source.unsplash.com/200x200/?portrait&12",
      story: "https://source.unsplash.com/400x600/?portrait&12",
      timestamp: "8h",
    },
    {
      name: "Mia Johnson",
      avatar: "https://source.unsplash.com/200x200/?portrait&13",
      story: "https://source.unsplash.com/400x600/?portrait&13",
      timestamp: "12h",
    },
    {
      name: "Nathan Wilson",
      avatar: "https://source.unsplash.com/200x200/?portrait&14",
      story: "https://source.unsplash.com/400x600/?portrait&14",
      timestamp: "16h",
    },
    {
      name: "Olivia Smith",
      avatar: "https://source.unsplash.com/200x200/?portrait&15",
      story: "https://source.unsplash.com/400x600/?portrait&15",
      timestamp: "19h",
    },
    {
      name: "Paul Davis",
      avatar: "https://source.unsplash.com/200x200/?portrait&16",
      story: "https://source.unsplash.com/400x600/?portrait&16",
      timestamp: "21h",
    },
    {
      name: "Quinn Robinson",
      avatar: "https://source.unsplash.com/200x200/?portrait&17",
      story: "https://source.unsplash.com/400x600/?portrait&17",
      timestamp: "23h",
    },
    {
      name: "Rachel White",
      avatar: "https://source.unsplash.com/200x200/?portrait&18",
      story: "https://source.unsplash.com/400x600/?portrait&18",
      timestamp: "2h",
    },
    {
      name: "Samuel Brown",
      avatar: "https://source.unsplash.com/200x200/?portrait&19",
      story: "https://source.unsplash.com/400x600/?portrait&19",
      timestamp: "4h",
    },
    {
      name: "Tina Johnson",
      avatar: "https://source.unsplash.com/200x200/?portrait&20",
      story: "https://source.unsplash.com/400x600/?portrait&20",
      timestamp: "7h",
    },
  ];
  // Local state
  const [stories, setStories] = useState<Story[]>(storiesMock);
  const [activeStory, setActiveStory] = useState<number>(0);
  //   hooks

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prevActiveStory) =>
        prevActiveStory < stories.length - 1
          ? prevActiveStory + 1
          : prevActiveStory
      );
    }, 4000);

    // Clear the interval when activeStory reaches the end
    return () => {
      clearInterval(interval);
    };
  }, [activeStory]);

  return (
    <div className=" p-5 sticky top-0 z-50 bg-neutral-950">
      <div className="lg:hidden flex gap-2 items-center justify-between pb-5">
        <h1 className={`block text-xl font-semibold ${courgette.className}`}>
          Momentos
        </h1>

        <div className="flex gap-5 items-center">
          <HeartIcon />
          <MessageCircle />
        </div>
      </div>
      <Dialog>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%] md:w-[90%] mx-auto"
        >
          <CarouselContent>
            {stories.map((singleStory, index) => (
              <CarouselItem key={index} className="basis-14">
                <DialogTrigger asChild>
                  <div>
                    <Avatar
                      className={`   rounded-full `}
                      onClick={() => setActiveStory(index)}
                    >
                      <AvatarImage
                        src={singleStory?.avatar}
                        alt={singleStory?.name}
                      />
                      <AvatarFallback>
                        {singleStory?.name?.split("")[0]}
                      </AvatarFallback>
                    </Avatar>
                    <h1 className=" mt-2 text-[0.7rem] w-10 truncate ">
                      {singleStory.name}
                    </h1>
                  </div>
                </DialogTrigger>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <DialogContent className="sm:max-w-md">
          {/* <Progress
          value={progress}
          className="w-full h-[5px] absolute sticky-0"
        /> */}

          <DialogHeader className="flex justify-start items-start">
            <DialogTitle>
              <div className="flex items-center gap-2 h-full  text-left">
                <Avatar className={` rounded-full `}>
                  <AvatarImage
                    src={stories[activeStory]?.avatar}
                    alt={stories[activeStory]?.name}
                  />
                  <AvatarFallback>
                    {stories[activeStory]?.name?.split("")[0]}
                  </AvatarFallback>
                </Avatar>
                <h1 className="  text-sm text-gray-200 ">
                  {stories[activeStory].name}
                </h1>
                <p className="text-xs text-gray-500">
                  {stories[activeStory].timestamp}
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className=" flex justify-center items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setActiveStory((prevActiveStory) =>
                  prevActiveStory > 0 ? prevActiveStory - 1 : prevActiveStory
                )
              }
            >
              <ChevronLeft className="h-5 w-5 opacity-40 hover:opacity-100" />
            </Button>
            <Image
              width={400}
              height={600}
              src={stories[activeStory].story}
              alt={stories[activeStory].name}
              placeholder="empty"
              loading="eager"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setActiveStory((prevActiveStory) =>
                  prevActiveStory < stories.length - 1
                    ? prevActiveStory + 1
                    : prevActiveStory
                )
              }
            >
              <ChevronRight className="h-5 w-5 opacity-40 hover:opacity-100" />
            </Button>
          </div>
          <DialogFooter>
            <div className="flex gap-2 justify-between  w-full">
              <Input
                type="text"
                placeholder="Send message"
                className="rounded-full  "
              />
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StoryCarousel;
