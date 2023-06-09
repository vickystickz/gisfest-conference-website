import React from "react";
import Image from "next/image";
import bgIsolationAbstract from "@/public/assets/bg-patterns/bg-isolation-abstract.svg";

const TopBgPattern = () => {
  return (
    <div className="w-full">
      <Image
        src={bgIsolationAbstract}
        alt="bg-isolation"
        priority={true}
        className="h-auto w-auto absolute z-0 laptop:right-0 right-0  top-0"
      />
    </div>
  );
};

export default TopBgPattern;
