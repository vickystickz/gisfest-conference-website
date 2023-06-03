import { siteConfiguration } from '@/config/siteConfig';
import Button from './shared/Button';
import { HeroLocation } from './jumbotron/HeroInfo';
import BgLine from '../public/assets/bg-patterns/bg-line.svg';
import Image from 'next/image';

export default function CallToAction() {
	const { callToAction, jumbotron } = siteConfiguration;

	return (
		<div className="flex relative bg-ctaBGContour overflow-clip items-center font-clashDisplay laptop:justify-start tablet:justify-start justify-center w-full bg-cover bg-no-repeat bg-sc-10 rounded-3xl">
			<div className="laptop:p-16 tablet:p-10 p-8 flex flex-col gap-10 relative z-10 ">
				<div className="flex flex-col laptop:flex-row tablet:flex-row laptop:gap-8 gap-4 laptop:p-0 tablet:p-0 pb-[32px] pt-5">
					<HeroLocation
						text={jumbotron.conference.date}
						showLocationIcon={false}
						borderColor="border-tc-10"
					/>
					<HeroLocation
						text={jumbotron.conference.location}
						showLocationIcon={true}
						borderColor="border-tc-10"
					/>
				</div>
				<p className="text-transparent text-h4 laptop:text-h2 font-p-semibold bg-clip-text bg-gradient-to-r from-yellow-0 via-purple-30 to-red-0">
					{callToAction.largeText}
				</p>
				<p className="text-h5 laptop:text-h3 font-p-normal text-tc-0">
					{callToAction.ctaText}
				</p>
				<Button
					text={callToAction.button.text}
					route={callToAction.button.route}
					showArrow={callToAction.button.showArrow}
					variant="white"
				/>
			</div>
			<div className='z-0 absolute bottom-[-15rem] tablet:bottom-[-50%] laptop:bottom-[-1rem]  right-0'>
				<Image src={BgLine} alt="call-to-action" className='h-auto w-auto' />
			</div>
			
		</div>
	);
}
