import { TSVGProps } from '@/config/types';

const CloseIcon = ({
	width,
	height,
	strokeWidth,
	strokeColor = 'currentColor',
}: TSVGProps) => (
	<svg
		viewBox="0 0 14 14"
		width={width}
		height={height}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1.28125 1.28125L12.7187 12.7187"
			stroke="#E4E4E5"
			strokeWidth={strokeWidth}
		/>
		<path
			d="M12.7188 1.28125L1.28125 12.7187"
			stroke={strokeColor}
			strokeWidth={strokeWidth}
		/>
	</svg>
);

export default CloseIcon;
