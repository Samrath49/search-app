import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary w-full absolute bottom-0 flex flex-col flex-wrap items-center justify-center">
      <div className="px-8 py-3 flex w-full border-b-[0.75px] border-[#313335]">
        <span className="flex items-center gap-2 font-thin font-arial">
          India
        </span>
      </div>

      <div className="flex flex-col w-full px-4 justify-around md:flex-row lg:justify-between">
        {[1, 2].map((groupNumber) => (
          <div
            key={groupNumber}
            className="flex justify-center sm:justify-self-auto"
          >
            {footerLinks
              .filter((link) => link.group === groupNumber)
              .map((link, i) => (
                <a
                  key={i}
                  className="flex items-center px-4 py-3 font-thin font-arial text-sm hover:underline hover:underline-offset-1"
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
