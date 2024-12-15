import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Mesh } from "@/icons";
import React from "react";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center">
      <div className="flex flex-col w-full px-5 mt-1 justify-around md:flex-row lg:justify-between">
        <div className="flex justify-center gap-1 sm:justify-self-auto">
          <a
            className="flex items-center px-2 py-4 font-thin font-arial text-sm hover:underline hover:underline-offset-1"
            href={"https://about.google"}
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className="flex items-center px-2 py-4 font-thin font-arial text-sm hover:underline hover:underline-offset-1"
            href={"https://store.google.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </a>
        </div>

        <div className="flex items-center justify-center sm:justify-self-auto">
          <a
            className="flex items-center px-2 py-4 font-thin font-arial text-sm hover:underline hover:underline-offset-1"
            href={"https://mail.google.com/mail/u/0/#inbox"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail
          </a>
          <a
            className="flex items-center px-2 py-4 font-thin font-arial text-sm hover:underline hover:underline-offset-1"
            href={"https://www.google.com/imghp?hl=en"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Images
          </a>
          <div className="flex ml-2 gap-4 items-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="p-0 rounded-full size-9 border-none hover:bg-[#2d2e31]"
                >
                  <Mesh className="!w-auto !h-auto" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit p-[6px] bg-[#393d40]">
                <p className="text-xs">Google apps</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Avatar className="h-8 w-8 bg-[#5F6368] hover:ring-2 hover:ring-gray-600 cursor-pointer">
                  <AvatarFallback className="bg-[#5d6cbd] text-lg">
                    A
                  </AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="w-fit p-[6px] bg-[#393d40]">
                <p className="text-xs">Anonymous</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
