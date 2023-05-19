import { TSponsorCard, SponsorCategory } from '@/config/types';
import Image from 'next/image';
import Link from 'next/link';

const SponsorCard = ({ sponsor }: TSponsorCard) => {
	return (
		<Link href={sponsor.website} target="_blank">
			<div className=" cursor-pointer bg-sc-10 w-auto p-4 rounded-2xl min-h-[122px]  tablet:min-h-[150px]  laptop:min-h-[135px] flex flex-col gap-4 tablet:gap-6">
				<span
					className={` self-start bg-sc-20  text-body-sm tablet:text-body font-p-medium whitespace-nowrap   border px-2 tablet:px-3 py-1 tablet:py-2 rounded-lg   ${getCategoryStyle(
						sponsor.category
					)}`}
				>
					{sponsor.category}
				</span>
				<div className=" text-tc-10 self-center">
					{sponsor.confirmed ? (
						<Image
							src={sponsor.logo}
							alt={sponsor.companyName}
							className=" scale-75 tablet:scale-100 p-2"
							placeholder="blur"
						/>
					) : (
						<p className="  uppercase font-p-semibold text-body">
							Your logo here
						</p>
					)}
				</div>
			</div>
		</Link>
	);
};

export default SponsorCard;

function getCategoryStyle(category: string) {
	if (category === SponsorCategory.Platinum) {
		return 'text-yellow-20';
	} else if (category === SponsorCategory.Diamond) {
		return 'text-red-20';
	} else {
		return 'text-purple-20';
	}
}
