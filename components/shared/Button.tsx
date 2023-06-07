import ArrowUpIcon from '../icons/ArrowUpIcon';

type TButton = {
	text: string;
	route: string;
	showArrow: boolean;
	variant?: 'black' | 'white' | 'yellow';
	otherStyles?: string;
};

const Button = ({
	text,
	route,
	showArrow,
	variant = 'black',
	otherStyles,
}: TButton) => {
	return (
		<a
			href={route}
			className={`laptop:py-3 font-p-regular laptop:font-p-medium px-4 laptop:w-max w-full py-[14px] ${
				variant === 'black'
					? 'bg-sc-0 text-tc-0'
					: variant === 'yellow'
					? 'bg-yellow-20 text-sc-20'
					: 'bg-white text-sc-20'
			} whitespace-nowrap flex items-center justify-center gap-2 transition-all delay-150 ease-in-out rounded-lg hover:rounded-[32px] 
				${otherStyles}`}
		>
			<span>{text}</span>
			{showArrow && (
				<ArrowUpIcon width={24} height={24} color="inherit" strokeWidth={2} />
			)}
		</a>
	);
};

export default Button;
