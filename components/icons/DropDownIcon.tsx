import { TSVGProps } from '@/config/types';

const DropDownIcon = ({
	width,
	height,
	fillColor = 'currentColor',
}: TSVGProps) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9.425 10C8.975 10 8.66266 10.2043 8.488 10.613C8.31266 11.021 8.38333 11.3833 8.7 11.7L11.3 14.3C11.4 14.4 11.5083 14.475 11.625 14.525C11.7417 14.575 11.8667 14.6 12 14.6C12.1333 14.6 12.2583 14.575 12.375 14.525C12.4917 14.475 12.6 14.4 12.7 14.3L15.3 11.7C15.6167 11.3833 15.6873 11.021 15.512 10.613C15.3373 10.2043 15.025 10 14.575 10H9.425Z"
			fill={fillColor}
		/>
	</svg>
);

export default DropDownIcon;
