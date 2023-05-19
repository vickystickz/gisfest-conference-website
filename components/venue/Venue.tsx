import Link from 'next/link';
import VenueImageOne from '@/public/assets/images/venue/image1.png';
import VenueImageThree from '@/public/assets/images/venue/image3.png';
import VenueImageTwo from '@/public/assets/images/venue/image2.png';
import Image from 'next/image';
import { siteConfiguration } from '@/config/siteConfig';
export default function Venue() {
	const { venueImages } = siteConfiguration;
	return (
		<div className="flex flex-col tablet:flex-row gap-10  ">
			<div className="flex flex-col gap-10 justify-center text-tc-0 basis-1/3 p-2">
				<button className="rounded-xl border-gradient p-[0.1rem] self-start">
					<span className="block bg-sc-20 p-3 text-body font-p-semibold rounded-xl">
						Venue
					</span>
				</button>
				<h3 className=" text-h4 laptop:text-h3 font-p-semibold">Location</h3>
				<h1 className=" font-p-regular laptop:font-p-medium text-body laptop:text-h5 ">
					GISfest 2023 conference will be held Lreum Ipsum. Conference will be
					live streams for registered participants.
				</h1>
				<Link
					href={'https://downloadurl.come'}
					title="Download sponsorship deck"
					className="tag-padding self-start text-body  laptop:text-h5 text-left tablet:text-center hover:bg-tc-30 font-p-medium border border-tc-30 rounded-lg text-tc-0"
				>
					Learn more
				</Link>
			</div>
			<div className="basis-2/3 grid grid-cols-5 laptop:gap-10 gap-4">
				{venueImages.map((image, id) => (
							<div key={`venue-image-${id}`} className={`w-full ${id === 0 ? "col-span-5": id === 1? "col-span-3": "col-span-2"} `} >
								<Image src={image.path} alt={image.alt} className='h-full w-full object-fill' />
							</div>
					)
					
			)}
			</div>
		</div>
	);
}
