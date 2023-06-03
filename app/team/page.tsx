import React from 'react';

import Image from 'next/image';
import bgIsolation from '@/public/assets/bg-patterns/bg-isolation.svg';
import Team from '@/components/team/Team';
const TeamPage = () => {
	return (
		<div className="w-full">
			<div className="relative w-full">
				<Image
					src={bgIsolation}
					alt="bg-isolation"
					className="h-auto w-auto absolute z-0 laptop:left-0 left-0  top-[-30%]"
				/>
			</div>
			<div className="mx-auto max-w-screen-tv laptop:px-20 tablet:px-14 laptop:space-y-[107px] space-y-[57px] px-3">
				<Team />
			</div>
		</div>
	);
};

export default TeamPage;
