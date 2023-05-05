import { SVGProps } from 'react';
export type TConferenceEdition = {
	hashtag: string;
	location: string;
	date: string;
	active: boolean;
	url: string;
};

export interface TSVGProps extends SVGProps<SVGSVGElement> {
	width: string | number;
	height: string | number;
	fillColor?: string;
	strokeColor?: string;
	strokeWidth?: string | number;
}
