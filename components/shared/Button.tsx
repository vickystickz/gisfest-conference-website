import ArrowUpIcon from '../icons/ArrowUpIcon';

type TButton = {
	text: string;
	route: string;
	showArrow: boolean;
	bgColor?: string;
	textColor?: string;
	otherStyles?: string;
};

const Button = ({
	text,
	route,
	showArrow,
	textColor,
	bgColor,
	otherStyles,
}: TButton) => {
	return (
		<a
			href={route}
			className={`laptop:py-3  laptop:px-4 laptop:w-max w-full py-[14px] text-${textColor} whitespace-nowrap flex items-center justify-center gap-2 transition-all delay-150 ease-in-out rounded-lg hover:rounded-[32px]  ${otherStyles} ${bgColor}`}
		>
			<span className={`text-${textColor} `}>{text}</span>
			{showArrow && (
				<ArrowUpIcon
					width={24}
					height={24}
					color={`text-${textColor}`}
					strokeWidth={2}
				/>
			)}
		</a>
	);
};

export default Button;
