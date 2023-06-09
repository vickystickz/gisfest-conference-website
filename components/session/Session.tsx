import React from "react";
import Tag from "@/components/shared/Tag";
import { AgendaCategory, TAgendaCard } from "@/config/types";
import SpeakerCard from "../shared/SpeakerCard";
import { TablerCopy } from "../icons/TablerCopy";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Link from "next/dist/client/link";

interface TSession {
  session: {
    id: number;
    category: AgendaCategory | undefined;
    title: string;
    abstract: string | undefined;
    speakers: TAgendaCard["speakers"] | undefined;
    day: string;
  };
}

const Session = (session: TSession["session"]) => {
    console.log(session);
    // Change this to the actual link
    const sessionLink = `https://www.localhost:3000/agenda/${session.id}`;
     

    const handleCopy = () => {
        navigator.clipboard.writeText(sessionLink)
          .then(() => {
            console.log('Link copied to clipboard!');
          })
          .catch((error) => {
            console.error('Failed to copy link:', error);
          });
      };
  return (
    <section>
      <div className=" laptop:space-y-8 space-y-6">
        <div className="flex gap-6">
          <Tag category={session.category} day={undefined} />
          <Tag category={undefined} day={session.day} />
        </div>
        <h2 className="laptop:text-h2 text-h5 font-p-semibold w-[90%]">{session.title}</h2>
      </div>
      <div className="laptop:space-y-12 space-y-4 laptop:mt-[215px] mt-24">
        <h4 className="laptop:text-h2 tablet:text-h3 text-h4 font-clashDisplay">About the Session</h4>
        <p className=" laptop:text-h5 text-body font-p-regular">{session.abstract}</p>
      </div>
      {session.category !== AgendaCategory.network && (
        <div>
          <div className="grid laptop:grid-cols-2 tablet:grid-cols-2 grid-cols-1 gap-14 laptop:gap-0  justify-between mt-[128px] ">
            <h4 className="laptop:text-h3 laptop:text-start tablet:text-start col-span-1 text-h4 text-center font-p-semibold laptop:order-first tablet:order-first order-last font-clashDisplay">Speaker(s)</h4>
            <div className="flex laptop:justify-end tablet:justify-end justify-start gap-4 col-span-1 items-center">
              <span className="text-body font-p-regular text-tc-10">Share session</span>
              <div className="rounded-full h-[39.81px] w-[39.81px] flex items-center justify-center bg-sc-20 cursor-pointer transition-all ease-in-out hover:bg-sc-10"
              onClick={handleCopy}
              >
                <TablerCopy />
              </div>
              <div className="rounded-full h-[39.81px] w-[39.81px] flex items-center justify-center bg-sc-20 cursor-pointer transition-all ease-in-out hover:bg-sc-10">
                <LinkedInIcon width={"16.16px"} height={"16.16px"} />
              </div>
              <div className="rounded-full h-[39.81px] w-[39.81px] flex items-center justify-center bg-sc-20 cursor-pointer transition-all ease-in-out hover:bg-sc-10">
                <TwitterIcon width={"16.16px"} height={"16.16px"} />
              </div>
            </div>
          </div>
          <div className="flex laptop:items-start laptop:justify-start justify-center w-full mt-[44.47px]">
            {session.speakers?.map((speaker, id) => (
              <SpeakerCard key={id} speaker={speaker} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Session;
