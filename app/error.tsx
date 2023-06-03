'use client';

import ServerErrorIcon from '@/components/icons/ServerErrorIcon';
import Button from '@/components/shared/Button';

export default function Error() {
	return (
		<div className="text-tc-10 w-full flex-col flex text-center items-center  gap-10">
			<ServerErrorIcon className="w-[200px] h-[200px] laptop:w-[400px] laptop:h-[400px]" />
			<h2 className="text-tc-0   text-h5 font-p-regular laptop:text-h4 laptop:font-p-medium">
				Internal server error!
			</h2>
			<p className="text-tc-10 text-body laptop:text-h5 font-p-regular">
				Don{`'`}t worry; our team is on their way to resolve it.
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
