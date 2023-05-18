import { type } from 'os';
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

export enum SponsorCategory {
	Platinum = 'Platinum',
	Diamond = 'Diamond',
	Silver = 'Silver',
}

export type TSponsorCard = {
	sponsor: {
		category: SponsorCategory;
		logo: string;
		companyName: string;
		confirmed: boolean;
		website: string;
	};
};


export enum AgendaCategory {
	workshop = 'workshop',
	panelSession = 'Panel Session',
	Keynote = 'Keynote',
}

export type TAgendaCard = {
	category?: AgendaCategory;
	time: string;

	title: string;
	speakers?: {
		name: string;
	}[];
};

export type TAgenda = {
	name: string;
	id: number;
	day: string;
	date: string;
	agenda: TAgendaCard[];
};

export type navigationLinks = {
	text: string;
	route: string;
	isActive: boolean;
}

export type conferenceLogo = {
	route: string,
	logo: string
}


export type THeader = {
	header: {
		conferenceLogo: conferenceLogo;
		navigationLinks: navigationLinks[];
		navigationButtons: navigationLinks[];
	}
}

export type conference = {
	year: string,
	edition: string,
	title: string,
	date: string,
	location: string,
	description: string
}


export type TJumbotron = {
	heroIMage: string,
	conference: conference,
	heroButtons: navigationLinks[]

}

