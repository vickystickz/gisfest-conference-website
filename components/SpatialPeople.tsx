import Image from 'next/image';
import SpatialPeoplImage from '@/public/assets/images/spatial-people.jpg';
export default function SpatialPeople() {
	return (
		<div className="flex items-center flex-col laptop:flex-row gap-10 w-full   ">
			<div className="laptop:basis-1/3  p-2">
				<h1 className="font-p-semibold text-h4 text-tc-10">
					Conference designed for individuals who are passionate aout spatial
					data.
				</h1>
			</div>
			<div className="flex justify-start laptop:justify-end  laptop:basis-2/3 laptop:self-center    p-2 tablet:p-4">
				<Image
					src={SpatialPeoplImage}
					placeholder="blur"
					className="rounded-3xl  "
					alt="An illustration of a globe supported by 3 people"
				/>
			</div>
		</div>
	);
}
