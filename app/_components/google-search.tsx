"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { cn } from "@/lib/utils";
import { Camera, DragAndDrop, Mic, Search } from "@/icons";
import Link from "next/link";

export function GoogleSearch() {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLensOpen, setIsLensOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { history, addToHistory, removeFromHistory } = useSearchHistory();

  // Handle click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchText: string = query) => {
    if (searchText.trim()) {
      addToHistory(searchText.trim());
      console.log("Searching for:", searchText);
    }
  };

  const handleSearchInput = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      handleSearch(e.target.value);
      setQuery("");
    }
  };

  return (
    <div className="flex flex-col w-full items-center row-start-4">
      <div ref={searchRef} className={cn("relative w-full max-w-[584px]")}>
        <div
          className={cn(
            "bg-[#4d5156] rounded-full shadow-md transition-all duration-0",
            isExpanded
              ? "rounded-t-[24px] rounded-b-[0px] bg-[#303134]"
              : "hover:bg-[#5f6368]"
          )}
        >
          <div className="flex items-center px-4 h-12">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              title="Search"
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => handleSearchInput(e)}
              onFocus={() => setIsExpanded(true)}
              className="flex-1 bg-transparent border-none outline-none px-3 text-[#e8e8e8] placeholder-gray-400"
              autoFocus
            />
            {query && (
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full"
                >
                  <X className="size-6 text-gray-300" />
                </button>
                <span
                  className={cn(
                    "h-7 w-[0.08px]",
                    isExpanded ? "bg-[#626366]" : "bg-[#85888d]"
                  )}
                />
              </div>
            )}
            <Link href="/voice-search">
              <button className="p-2 rounded-full">
                <Mic />
              </button>
            </Link>
            <button
              className="p-2 rounded-full"
              onClick={() => setIsLensOpen(!isLensOpen)}
            >
              <Camera className="!w-auto !h-auto" />
            </button>
          </div>
        </div>

        {/* Expanded Search Area */}
        {isExpanded && (
          <div className="absolute min-h-20 z-10 w-full bg-[#303134] rounded-b-[24px] shadow-lg pb-2">
            <div className="w-full flex justify-center mb-1">
              <span className={cn("flex h-[0.7px] w-11/12 bg-[#626366]")} />
            </div>
            {history.map((item) => (
              <div
                key={item.id}
                className="flex items-center rounded-[4.5px] px-4 min-h-8 hover:bg-[#3c4043] cursor-pointer group"
                onClick={() => {
                  setQuery(item.text);
                  handleSearch(item.text);
                }}
              >
                <Clock className="size-[14px] text-gray-400 mr-3" />
                <span className="flex-1 text-[#c38aea]">{item.text}</span>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromHistory(item.id);
                  }}
                  variant={"link"}
                  className="text-[#aaadb2] hidden hover:text-[#99c3ff] group-hover:block py-0 h-auto"
                >
                  Delete
                </Button>
              </div>
            ))}
            <div className="flex w-full justify-center my-4 gap-3">
              <Button
                variant="secondary"
                className="bg-[#3c4043]"
                onClick={() => handleSearch(query)}
              >
                Google Search
              </Button>
              <a
                className={`btn btn-secondary`}
                target="_blank"
                href="https://doodles.google/"
              >
                <Button
                  variant="secondary"
                  className="bg-[#3c4043]"
                >{`I'm Feeling Lucky`}</Button>
              </a>
            </div>
          </div>
        )}
      </div>

      {isLensOpen && (
        <div className="bg-[#303134] z-10 absolute w-full max-w-[584px] text-white border-none p-5 rounded-3xl">
          <div className="space-y-4 relative">
            <h2 className="text-center text-base font-normal">
              Search any image with Google Lens
            </h2>
            <button
              onClick={() => setIsLensOpen(false)}
              className="p-1 rounded-full absolute right-0 -top-5"
            >
              <X className="size-5 text-gray-300" />
            </button>
            <div className="border border-dashed flex flex-col gap-4 bg-[#202124] border-[#3c4043] rounded-lg p-6 text-center">
              <div className="flex items-center gap-4 justify-center mb-2 py-10">
                <DragAndDrop />
                <p className="text-[#93969b]">
                  Drag an image here or{" "}
                  <button className="text-[#8ab4f8] hover:underline">
                    upload a file
                  </button>
                </p>
              </div>
              <div className="flex items-center text-sm gap-4">
                <div className="flex-1 h-[0.5px] bg-[#3c4043]" />
                <span className="text-[#93969b]">OR</span>
                <div className="flex-1 h-[0.5px] bg-[#3c4043]" />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Paste image link"
                  className="flex-1 bg-[#303134] text-sm font-thin border border-[#3c4043] rounded-full px-4 py-2 outline-none focus:border-[#8ab4f8]"
                />
                <Link href="/image-search">
                  <Button
                    variant="outline"
                    className="rounded-full bg-[#303134] border-[#3c4043] text-[#8ab4f8] hover:bg-[#24272a] hover:text-[#d3e3fb]"
                  >
                    Search
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Buttons */}
      {!isLensOpen && (
        <div className="flex gap-3 mt-8">
          <Button variant="secondary" onClick={() => handleSearch(query)}>
            Google Search
          </Button>
          <a
            className={`btn btn-secondary`}
            target="_blank"
            href="https://doodles.google/"
          >
            <Button variant="secondary">{`I'm Feeling Lucky`}</Button>
          </a>
        </div>
      )}
    </div>
  );
}
