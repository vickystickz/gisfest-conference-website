import { TSVGProps } from '@/config/types';

const ArrowUpIcon = ({
	width,
	height,
	strokeWidth,
	strokeColor = 'currentColor',
}: TSVGProps) => (
	<svg
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17 7L7 17M17 7H8M17 7V16"
			stroke={strokeColor}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default ArrowUpIcon;
