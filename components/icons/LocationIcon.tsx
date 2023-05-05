import { TSVGProps } from '@/config/types';

const LocationIcon = ({
	width,
	height,
	strokeWidth,
	strokeColor = 'currentColor',
}: TSVGProps) => (
	<svg
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 15 16"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.25 8C14.25 11.7279 11.2279 14.75 7.5 14.75C3.77208 14.75 0.75 11.7279 0.75 8C0.75 4.27208 3.77208 1.25 7.5 1.25C11.2279 1.25 14.25 4.27208 14.25 8Z"
			stroke={strokeColor}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.52738 8.19222C4.08087 8.01858 3.85761 7.93176 3.79243 7.80665C3.73593 7.69821 3.73585 7.56902 3.79223 7.4605C3.85726 7.33532 4.08041 7.24824 4.52672 7.07407L9.31753 5.20449C9.72041 5.04726 9.92186 4.96865 10.0506 5.01165C10.1624 5.049 10.2501 5.13672 10.2874 5.24851C10.3304 5.37723 10.2518 5.57867 10.0946 5.98156L8.22502 10.7724C8.05085 11.2187 7.96376 11.4418 7.83858 11.5069C7.73007 11.5632 7.60088 11.5632 7.49243 11.5067C7.36733 11.4415 7.28051 11.2182 7.10687 10.7717L6.4803 9.16053C6.44505 9.06989 6.42742 9.02457 6.4002 8.98641C6.37608 8.95259 6.3465 8.92301 6.31268 8.89888C6.27452 8.87166 6.2292 8.85404 6.13856 8.81879L4.52738 8.19222Z"
			stroke={strokeColor}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default LocationIcon;
