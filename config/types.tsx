import { StaticImageData } from 'next/image';
import { SVGProps } from 'react';
export type TConferenceEdition = {
	hashtag: string;
	location: string;
	date: string;
	active: boolean;
	url: string;
};

type TCallToAction = {
	largeText: string;
	ctaText: string;
	button: {
		text: string;
		route: string;
		showArrow: boolean;
	};
};

type TCallForSpeakers = {
	timeline: {
		callOpen: string;
		callClose: string;
	};
	sessionSubmissionButton: {
		text: string;
		route: string;
	};
};
export type TSiteConfiguration = {
	header: THeader['header'];
	conferenceType: TConferenceType;
	jumbotron: TJumbotron;
	about: TAbout;
	takeAway: TtakeAwayInfo[];
	takeAwayAutoScrollDelay: number;
	faq: TFaqInfo[];
	marqueeText: string;
	sponsors: TSponsorCard['sponsor'][];
	sponsorshipDeckURL: string;
	agenda: TAgenda[];
	venueImages: veneueImage[];
	teams: Tteams[];
	teamDescription: string[];
	callToAction: TCallToAction;
	showAgenda: boolean;
	defaultSpeakerInfo: TConferenceSpeaker['speaker'][];
	speakers: TConferenceSpeaker['speaker'][];
	speakerDeckURL: string;
	speakerCTA: string;
	callForSpeakers: TCallForSpeakers;
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

export type TConferenceType = {
	title: string;
	question: string;
	picture: string;
};

export type TAbout = {
	description: Array<string>;
};

export type TFaqInfo = {
	question: string;
	answer: string;
};

export type TtakeAwayInfo = {
	title: string;
	description: string;
};

export type TSponsorCard = {
	sponsor: {
		category: string;
		logo: string;
		companyName: string;
		confirmed: boolean;
		website: string;
	};
};

export enum AgendaCategory {
	workshop = 'Workshop',
	panelSession = 'Panel Session',
	Keynote = 'Keynote',
	network = 'Network',
}
export enum TeamCategory {
	Organizing = 'Organizing',
	Volunteers = 'Volunteers',
}

export type TAgendaCard = {
	category?: AgendaCategory;
	id: number;
	time: string;
	title: string;
	abstract?: string;
	speakers?: {
		name: string;
	    role: string;
		avatar: string,
		company: string,
		sociallink: string,
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
};

export type veneueImage = {
	path: StaticImageData;
	alt: string;
};

export type conferenceLogo = {
	route: string;
	logo: StaticImageData;
};

export type THeader = {
	header: {
		conferenceLogo: conferenceLogo;
		navigationLinks: navigationLinks[];
		navigationButtons: navigationLinks[];
	};
};

export type Tteams = {
	category: string;
	teamMembers: teamMembers[];
};

export type teamMembers = {
	fullName: string;
	twitter: string;
	linkedIn: string;
	teamName: string;
	avatar: string;
};

export type conference = {
	year: string;
	edition: string;
	title: string;
	date: string;
	location: string;
	description: string;
};

export type TJumbotron = {
	heroImage: StaticImageData;
	conference: conference;
	heroButtons: navigationLinks[];
};

export type TConferenceSpeaker = {
	speaker: {
		name: string;
		role: string;
		avatar: string;
		company: string;
		sociallink: string;
	};
};

export type tag = {
	title: string;
	style: string;
}
