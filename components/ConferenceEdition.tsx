import { TConferenceEdition } from '@/config/types';
import LocationIcon from './icons/LocationIcon';
import Link from 'next/link';

export default function ConferenceEdition({
	location,
	date,
	active,
	hashtag,
	url,
}: TConferenceEdition) {
	return (
		<Link
			href={url}
			title={hashtag}
			className={` ${
				active &&
				'bg-gradient-to-r p-[0.15rem] from-green-30 via-purple-10 to-red-0'
			} shadow-primary hover:scale-105 transition-transform  rounded-full  cursor-pointer `}
		>
			<div className="bg-white bg-cardBgContour  flex items-center p-10 flex-col  w-full h-full rounded-full">
				<p className="font-p-semibold text-h3 text-sc-20">{hashtag}</p>
				<small className="text-body-sm flex items-center gap-2 font-p-medium text-sc-30">
					<LocationIcon width={20} height={20} strokeWidth={1} />
					<span>{location}</span>|<span>{date}</span>
				</small>
			</div>
		</Link>
	);
}
