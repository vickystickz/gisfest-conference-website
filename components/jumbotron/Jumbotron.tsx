import React from 'react';
import HeroContent from './HeroContent';
import Image from 'next/image';
import { siteConfiguration } from '@/config/siteConfig';

const Jumbotron = () => {
	const { jumbotron } = siteConfiguration;
	return (
		<div className="laptop:h-screen tablet:h-max relative transition-all delay-150 ease-out flex flex-col laptop:gap-[5%] tablet:gap-[5%] gap-4 ">
			<Image
				src={jumbotron.heroImage}
				alt="hero-image"
				className="top-0 object-cover bottom-0 z-0 absolute h-full w-full"
			/>
			<div className="bg-gradient  absolute z-10 top-0 w-full h-full"></div>
			<HeroContent
				conference={jumbotron.conference}
				buttons={jumbotron.heroButtons}
			/>
		</div>
	);
};

export default Jumbotron;
