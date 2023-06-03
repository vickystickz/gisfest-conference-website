import { TConferenceSpeaker } from '@/config/types';
import TwitterIcon from '@/components/icons/TwitterIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import Link from 'next/link';
import Image from 'next/image';

const SpeakerCard = ({ speaker }: TConferenceSpeaker) => {
	return (
		<div className="col-span-1 flex flex-col items-center text-center">
			<div className="relative rounded-tl-[240px] rounded-br-[240px] rounded-bl-[240px] rounded-tr-2xl h-[175.75px] w-[176.19px] bg-gradient-to-r p-[1.4px] from-[#F5A627] via-[#995CA4] to-[#CE3573]">
				<div className="relative rounded-tl-[240px] rounded-br-[240px] rounded-bl-[240px] rounded-tr-2xl h-full w-full overflow-hidden ring-1 ring-white border border-b-[#F5A627] border-l-[#F5A627] border-t-[#995CA4] border-r-[#CE3573]">
					<Image
						src={speaker.avatar}
						alt={speaker.name}
						fill
						// placeholder="blur" - Please uncomment after changing the team image to png/jpeg @vikkystickz
						className="object-cover rounded-tl-[240px] rounded-br-[240px] rounded-bl-[240px] rounded-tr-2xl w-full h-full transition-transform duration-300 hover:scale-125"
					/>
				</div>
				{speaker.sociallink && (
					<div
						className={`absolute bottom-[5%] right-[8%] rounded-full h-10 w-10 bg-black border ${getSocialColor(
							speaker.sociallink
						)}`}
					>
						<Link href={speaker.sociallink}>
							<div
								className={`absolute bottom-[25%] right-[23%] ${getSocialColor(
									speaker.sociallink
								)}`}
							>
								{getSocialIcon(speaker.sociallink)}
							</div>
						</Link>
					</div>
				)}
			</div>
			<figcaption className="p-5 font-medium">
				<div className="text-body font-p-semibold text-tc-0">
					{speaker.name}
				</div>
				<div
					className={`text-tc-10 ${
						speaker.role === 'Coming Soon!' && ' font-p-bold'
					}`}
				>
					{speaker.role} {speaker.company && '@'} {speaker.company}
				</div>
			</figcaption>
		</div>
	);
};

export default SpeakerCard;

const getSocialIcon = (socialLink: string) => {
	if (socialLink.includes('twitter.com')) {
		return <TwitterIcon width={20} height={20} strokeWidth={1} />;
	} else if (socialLink.includes('linkedin.com')) {
		return <LinkedInIcon width={20} height={20} strokeWidth={1} />;
	} else {
		return null;
	}
};

const getSocialColor = (socialLink: string) => {
	if (socialLink.includes('twitter.com')) {
		return 'text-yellow-20';
	} else if (socialLink.includes('linkedin.com')) {
		return 'text-purple-40';
	} else {
		return null;
	}
};
