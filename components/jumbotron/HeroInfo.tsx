import React from 'react';
import LocationIcon from '../icons/LocationIcon';

type THeroText = {
	text: string;
};

export const HeroText = ({ text }: THeroText) => {
	return (
		<div className="rounded-3xl w-[84px] h-[34px] laptop:w-[148px] laptop:h-[48px] bg-gradient-to-r p-[1px] from-yellow-0 via-purple-30 to-red-0 ">
			<div className=" bg-[#465263] backdrop-blur-sm flex items-center justify-center text-white w-full h-full rounded-3xl">
				<span className="laptop:font-p-semibold font-s-medium laptop:text-body text-body-xm">
					{text}
				</span>
			</div>
		</div>
	);
};

type THeroLocation = {
	text: string;
	showLocationIcon: boolean;
	borderColor?: string;
};

export const HeroLocation = ({
	text,
	showLocationIcon,
	borderColor,
}: THeroLocation) => {
	return (
		<div
			className={`border-[1.4px]  ${
				borderColor ? borderColor : 'border-tc-0'
			} laptop:backdrop-blur-sm backdrop-blur-xs rounded-[28px] flex gap-[15px] items-center w-max laptop:px-8 laptop:py-4 px-5 py-4 justify-center`}
		>
			{showLocationIcon && (
				<LocationIcon width={24} height={24} strokeColor={`white`} />
			)}
			<span className="text-white laptop:text-body text-body-sm laptop:font-p-semibold font-p-medium">
				{text}
			</span>
		</div>
	);
};
