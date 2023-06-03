import Image from 'next/image';
import SpatialPeopleImage from '@/public/assets/images/spatial-people.svg';
export default function SpatialPeople() {
	return (
		<div className="flex items-center font-clashDisplay flex-col laptop:flex-row gap-10 w-full">
			<div className="laptop:basis-2/3  py-2">
				<h1 className="font-p-semibold laptop:max-w-[475px] laptop:text-[40px] text-h5 text-tc-10">
					Conference designed for individuals who are passionate about spatial
					data.
				</h1>
			</div>
			<div className="flex justify-start flex-1 laptop:justify-end laptop:basis-2/3 laptop:self-center p-2 tablet:p-4">
				<Image
					src={SpatialPeopleImage}
					className="rounded-3xl laptop:h-[426px] laptop:w-[567px] h-[237x] w-[324px]"
					alt="An illustration of a globe supported by 3 people"
				/>
			</div>
		</div>
	);
}
