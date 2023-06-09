import React from "react";
import { siteConfiguration } from "@/config/siteConfig";
import AgendaCard from "../agenda/AgendaCard";

interface TAllSession {
  currentSession: {
    day: string;
    sessionId: number;
  };
}
const AllSession = ({ currentSession }: TAllSession) => {
  const { agenda } = siteConfiguration;

  const currentDayObject = agenda.filter(
    (agenda) => agenda.name === currentSession.day
  );

  return (
    <div className="space-y-3">
      {currentDayObject.map((agendaDay) => {
        return agendaDay.agenda.map((session, index) => {
          return session.id !== currentSession.sessionId &&(
            <AgendaCard key={index} selectedTimezone={""} agenda={session} />
          );
        });
      })}
    </div>
  );
};

export default AllSession;
