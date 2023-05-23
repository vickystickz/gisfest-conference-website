import { siteConfiguration } from '@/config/siteConfig';
import Button from './shared/Button';
import { HeroLocation } from './jumbotron/HeroInfo';

export default function CallToAction() {
	const { callToAction, jumbotron } = siteConfiguration;
	//todo - awaiting background SVG from Micheal
	return (
		<div className="flex items-center font-clashDisplay justify-center w-full bg-cardBgContour bg-black rounded-3xl">
			<div className="p-10 flex flex-col gap-10 ">
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
					textColor="black"
					bgColor="bg-white"
					otherStyles="font-p-medium  "
				/>
			</div>
		</div>
	);
}
