'use client';

import NotFoundIcon from '@/components/icons/NotFoundIcon';
import Button from '@/components/shared/Button';

export default function NotFound() {
	return (
		<div className="text-tc-10 w-full flex-col flex text-center items-center  gap-10">
			<NotFoundIcon className="w-[200px] h-[200px] laptop:w-[400px] laptop:h-[400px]" />
			<h2 className="text-tc-0   text-h5 font-p-regular laptop:text-h4 laptop:font-p-medium">
				Geospatial coordinates not found!
			</h2>
			<p className="text-tc-10 text-body laptop:text-h5 font-p-regular">
				Prepare for a course correction
			</p>
			<div>
				<Button
					text="Return Home"
					route="/"
					showArrow={false}
					variant="white"
				/>
			</div>
		</div>
	);
}
