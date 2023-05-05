import { TSVGProps } from '@/config/types';

const MenuIcon = ({
	width,
	height,
	strokeWidth,
	strokeColor = 'currentColor',
}: TSVGProps) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.25112 15H19M3.875 9H19"
			stroke={strokeColor}
			strokeWidth={strokeWidth}
			strokeLinecap="square"
			strokeLinejoin="round"
		/>
	</svg>
);

export default MenuIcon;
