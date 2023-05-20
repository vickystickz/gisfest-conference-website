import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { siteConfiguration } from "@/config/siteConfig";

const Team = () => {
  const { teams, teamDescription } = siteConfiguration;
  return (
    <div className="laptop:px-20 tablet:px-16 px-0 ">
      <div className="laptop:px-4 tablet: px-0 py-16 ">
        <SectionHeader title="Team" layout="text-start" />
        <div className="flex flex-col gap-6">
          {teamDescription.map((description, id) => (
            <p
              key={`team-description-${id}`}
              className="laptop:text-h5 text-body text-tc-10 font-p-medium "
            >
              {description}
            </p>
          ))}
        </div>
      </div>

      <div>
        {teams.map((team, id) => {
          if (team.category === "Organizing") {
            return team.teamMembers.map((teamMember, id) => (
              <div
                key={`team-category-${id}`}
                className="grid laptop:grid-cols-4 tablet:grid-cols-3 gap-8 grid-cols-1"
              >


              </div>
            ));
          } else {
            return (
              <div key={`team-category-${id}`}>
                <SectionHeader title={team.category} layout="text-center" />
                <div className="grid laptop:grid-cols-4 tablet:grid-cols-3 gap-8 grid-cols-1">
                  {team.teamMembers.map((teamMember, id) => (
                    <div
                      key={`team-member-${id}`}
                      className="col-span-1"
                    ></div>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Team;
