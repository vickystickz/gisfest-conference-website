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
				'bg-gradient-to-r p-[0.15rem] from-yellow-20 via-purple-10 to-red-20'
			} shadow-primary  rounded-full  border-2 border-tc-0 cursor-pointer `}
		>
			<div className="bg-white bg-cardBgContour  flex items-center p-10 flex-col  w-full h-full rounded-full">
				<p className="font-p-semibold text-h3 text-sc-20">{hashtag}</p>
				<small className="text-body-sm flex items-center gap-2 font-p-medium text-sc-30">
					<LocationIcon />
					<span>{location}</span>|<span>{date}</span>
				</small>
			</div>
		</Link>
	);
}
