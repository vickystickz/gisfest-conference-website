import { siteConfiguration } from '@/config/siteConfig';
import SpeakerCard from '../shared/SpeakerCard';
import SectionHeader from '../shared/SectionHeader';
import Link from 'next/link';

export default function Speakers() {
	const { speakers, defaultSpeakerInfo, speakerDeckURL, speakerCTA } =
		siteConfiguration;

	return (
		<div className="flex flex-col gap-y-10 ">
			<SectionHeader title="Speakers" layout="text-center" />
			<div className="grid grid-flow-row grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 tv:grid-cols-4">
				{speakers.length === 1
					? defaultSpeakerInfo.map((speaker, id) => (
							<SpeakerCard key={`speaker-${id}`} speaker={speaker} />
					  ))
					: speakers.map((speaker, id) => (
							<SpeakerCard key={`speaker-${id}`} speaker={speaker} />
					  ))}
			</div>
			<div className="flex flex-col tablet:flex-row gap-10 w-full tablet:p-6 laptop:p-20 ">
				<div className="tablet:basis:1/2 laptop:basis-1/3  p-2">
					<h1 className="font-p-semibold font-clashDisplay laptop:text-h4 tablet:text-h4 text-h5 text-tc-10">
						Interested in speaking at GISfest 2023?
					</h1>
				</div>
				<div className="flex justify-start tablet:justify-end tablet:basis:1/2 laptop:basis-2/3 tablet:self-center   p-2 tablet:p-4">
					<Link
						href={speakerDeckURL}
						title={speakerCTA}
						className="py-[14px] px-6 tablet:p-4 laptop:text-h5 tablet:text-h5 font-clashDisplay text-body whitespace-nowrap text-center hover:bg-tc-30 font-p-medium border border-tc-30 rounded-lg text-tc-0"
					>
						{speakerCTA}
					</Link>
				</div>
			</div>
		</div>
	);
}
