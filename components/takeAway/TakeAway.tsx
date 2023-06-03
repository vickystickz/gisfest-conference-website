'use client';

import React from 'react';
import { siteConfiguration } from '@/config/siteConfig';
import Image from 'next/image';
import locationPath from '@/public/assets/bg-patterns/location-path.svg';
import bgIsolation from '@/public/assets/bg-patterns/bg-isolation-full.svg';
import { useTakeAway } from '@/hooks/useTakeAway';

const TakeAway = () => {
	const { handleTitleSwitch, activeIndex } = useTakeAway();
	const { takeAway } = siteConfiguration;
	return (
		<div className="laptop:flex flex-col w-full lapto:gap-8 laptop:my-[160px]  relative mt-[140px] tablet:mt-[80px]">
			<div className="h-[600px] w-full overflow-auto laptop:h-auto laptop:w-auto laptop:right-[-6rem] absolute tablet:top-[-120px] laptop:top-[-230px] right-[-0%]  top-[-170px]">
				<Image
					src={bgIsolation}
					alt="bg-isolation"
					className="h-full w-full laptop:h-auto laptop:w-auto object-cover"
				/>
			</div>
			<h3 className="laptop:text-h1 text-h2 text-tc-0 font-clashDisplay font-s-regular">
				{takeAway[activeIndex].title}
			</h3>
			<div className="grid  laptop:grid-cols-6 tablet:grid-cols-6 grid-cols-1 relative laptop:gap-0 gap-4">
				<div className="tablet:col-span-3 col-span-1 flex flex-col gap-14 tablet:gap-0">
					<div className="flex flex-col">
						<ul className="flex flex-row flex-wrap gap-8 items-center">
							{takeAway.map((takeAway, index) => {
								return (
									<li
										key={index}
										className={`cursor-pointer laptop:text-h5 text-body h-[32px] transition-all delay-150 ease-in-out font-clashDisplay ${
											index === activeIndex
												? 'border-b-[1px] text-tc-0 '
												: 'text-tc-10'
										}`}
										onClick={() => handleTitleSwitch(index)}
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
				<div className="col-span-4 tablet:col-span-3 flex h-[250px] justify-center tablet:justify-end transition-all delay-150  ease-in-out">
					{takeAway.map((takeAway, index) => {
						return (
							index === activeIndex && (
								<p
									key={index}
									className="laptop:w-[677px] tablet:w-[500px] w-full  laptop:text-h5 text-body text-tc-0"
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
