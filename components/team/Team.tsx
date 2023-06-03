import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import { siteConfiguration } from '@/config/siteConfig';
import SpeakerCard from '../shared/SpeakerCard';

const Team = () => {
	const { teams, teamDescription } = siteConfiguration;
	return (
		<div className="laptop:px-20 tablet:px-4 px-0 space-y-[80px] z-20 relative">
			<div className="laptop:w-[88%] laptop:mx-auto tablet:px-16 px-0 py-20 pt-32">
				<SectionHeader title="Team" layout="text-start font-clashDisplay" />
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

			<div className="space-y-[115px]">
				{teams.map((team, id) => {
					if (team.category === 'Organizing') {
						return (
							<div key={`team-category-${id}`} className=" space-y-12">
								<div className="grid laptop:grid-cols-4 tablet:grid-cols-2 gap-8 grid-cols-1">
									{team.teamMembers.map((teamMember, id) => (
										<SpeakerCard
											key={`speaker-${id}`}
											speaker={{
												name: teamMember.fullName,
												role: teamMember.teamName,
												sociallink: teamMember.linkedIn,
												avatar: teamMember.avatar,
												company: '',
											}}
										/>
									))}
								</div>
							</div>
						);
					} else {
						return (
							<div key={`team-category-${id}`} className="space-y-12">
								<SectionHeader
									title={team.category}
									layout="text-center font-clashDisplay"
								/>
								<div className="grid laptop:grid-cols-4 tablet:grid-cols-2 gap-8 grid-cols-1">
									{team.teamMembers.map((teamMember, id) => (
										<SpeakerCard
											key={`speaker-${id}`}
											speaker={{
												name: teamMember.fullName,
												role: teamMember.teamName,
												sociallink: teamMember.linkedIn,
												avatar: teamMember.avatar,
												company: '',
											}}
										/>
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
