"use client";

import React, { useState } from "react";
import { siteConfiguration } from "@/config/siteConfig";
import Image from "next/image";
import locationPath from "../../public/assets/bg-patterns/location-path.svg";
import bgIsolation from "../../public/assets/bg-patterns/bg-isolation.svg";

const TakeAway = () => {
  const { takeAway } = siteConfiguration;
  const [activeTitle, setActiveTitle] = useState(
    `${takeAway.map((takeAway) => takeAway.title)[0]}`
  );
  return (
    <div className="laptop:flex flex-col w-full lapto:gap-8  relative mt-[140px] tablet:mt-[80px]">
      <div className="h-[600px] w-full overflow-auto laptop:h-auto laptop:w-auto laptop:right-[-6rem] absolute tablet:top-[-120px] laptop:top-[-230px] right-[-0%]  top-[-170px]">
        <Image
          src={bgIsolation}
          alt="bg-isolation"
          className="h-full w-full laptop:h-auto laptop:w-auto object-cover"
        />
      </div>
      <h3 className="laptop:text-h1 text-h2 text-tc-0 font-clashDisplay font-s-regular">
        {activeTitle}
      </h3>
      <div className="grid laptop:grid-cols-6 tablet:grid-cols-6 grid-cols-1 relative gap-4">
        <div className="laptop:col-span-2 tablet:col-span-3 col-span-1 flex flex-col gap-14 tablet:gap-0">
          <div className="flex flex-col">
            <ul className="flex flex-row gap-8 items-center">
              {takeAway.map((takeAway, index) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer laptop:text-h5 text-body h-[32px] transition-all delay-150 ease-in-out font-clashDisplay ${
                      takeAway.title === activeTitle
                        ? "border-b-[1px] text-tc-0 "
                        : "text-tc-10"
                    }`}
                    onClick={() => setActiveTitle(takeAway.title)}
                  >
                    {takeAway.title}.
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 w-[262.89px] h-[316.77px]">
            <Image
              src={locationPath}
              alt="location-path"
              className="laptop:block tablet:block translate-y-10 hidden h-full w-full object-fill"
            />
          </div>
        </div>
        <div className="col-span-4 tablet:col-span-3 flex justify-center tablet:justify-end transition-all delay-150  ease-in-out">
          {takeAway.map((takeAway, index) => {
            return (
              takeAway.title === activeTitle && (
                <p
                  key={index}
                  className="laptop:w-[500px] tablet:w-[500px] w-full  laptop:text-h5 text-body text-tc-0"
                >
                  {takeAway.description}
                </p>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TakeAway;
