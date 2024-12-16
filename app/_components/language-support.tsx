import { languages } from "@/constants";
import React from "react";

const LanguageSupport = () => {
  return (
    <div className="flex items-center w-full gap-2 row-start-5 text-sm justify-center">
      <span className="text-[#bfbfbf]">Google offered in:</span>
      {languages?.map((lang: string) => (
        <a
          href="#"
          className="text-[0.8rem] leading-4 text-[#99c3ff] hover:underline"
          key={lang}
        >
          {lang}
        </a>
      ))}
    </div>
  );
};

export default LanguageSupport;
