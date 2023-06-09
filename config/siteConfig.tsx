import logo from '@/public/assets/logos/logo-white.svg';
import heroImage from '@/public/assets/images/hero-image.jpeg';
import spatialLove from '@/public/assets/icons/Love-shape.svg';
import VenueImageOne from '@/public/assets/images/venue/image1.png';
import VenueImageThree from '@/public/assets/images/venue/image3.png';
import VenueImageTwo from '@/public/assets/images/venue/image2.png';
import {
	AgendaCategory,
	SponsorCategory,
	TeamCategory,
	TSiteConfiguration,
} from '@/config/types';
import LogoWhite from '@/public/assets/logos/logo-white.svg';

const sponsorshipDeck =
	'https://drive.google.com/file/d/1pIW3-Bf6lW0HXjwWxMalfQq5otFXKekc/view';
const speakerDeck = '/cfs';
const speakerCTA = 'Join our Speakers';
export const siteConfiguration: TSiteConfiguration = {
	/********  homePage  ***********/

	//Header
	header: {
		conferenceLogo: {
			route: '/',
			logo: logo,
		},
		navigationLinks: [
			{
				text: 'About',
				route: 'about',
				isActive: true,
			},
			{
				text: 'Sponsors',
				route: 'sponsors',
				isActive: true,
			},
			{
				text: 'Speakers',
				route: 'speakers',
				isActive: false,
			},
			{
				text: 'Agenda',
				route: 'agenda',
				isActive: false,
			},
		],
		navigationButtons: [
			{
				text: 'Sponsor GISfest2023',
				route: '#sponsors',
				isActive: true,
			},
			{
				text: 'Buy Ticket',
				route: '/tickets',
				isActive: false,
			},
		],
	},

	//Conference Type

	conferenceType: {
		title: 'Geospatial Conference for Spatial People',
		question:
			'Are you curious about the possibilities of geospatial technology? Then join us at GISfest2023!',
		picture: spatialLove,
	},
	// Jumbotron

	jumbotron: {
		heroImage: heroImage,
		conference: {
			year: '2023',
			edition: '2nd Edititon',
			title: 'Geospatial innovation and the future of Africa',
			date: '10 - 11th Nov. 2023',
			location: 'Lagos, Nigeria',
			description:
				"Join us for a two-day event that's dedicated to exploring the limitless potential of geospatial technology.",
		},
		heroButtons: [
			{
				text: 'Grab a Ticket',
				route: '/ticket',
				isActive: false,
			},
			{
				text: 'Sponsor GISfest2023',
				route: '#sponsors',
				isActive: true,
			},
		],
	},

	// About

	about: {
		description: [
			'GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and its applications in numerous industries.',
			'This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation.',
		],
	},

	//Take away for GISfest 2023
	takeAwayAutoScrollDelay: 5000,
	takeAway: [
		{
			title: 'Learn',
			description:
				"Learn from industry experts at GISfest2023. Workshops, presentations, and panel discussions cover the latest tools, techniques, and trends in geospatial technology. Whether you're a pro or a beginner, there's something for you. Join us and stay ahead of the curve!",
		},
		{
			title: 'Discover',
			description:
				"Explore the potential of geospatial technology and discover the latest advancements at GISfest. You'll learn about new tools and techniques that can help you work more efficiently and effectively. Join us to discover the power of geospatial technology and how it can benefit you.",
		},
		{
			title: 'Network',
			description:
				"GISfest is the perfect place to network with like-minded individuals from across Africa. Connect with geospatial enthusiasts and professional who share your passion for this exciting field. You'll have the chance to build relationships, exchange ideas, and make valuable contacts that can help you take your career to the next level.",
		},
	],

	// FAQ

	faq: [
		{
			question: 'Who can attend',
			answer:
				'Geospatial enthusiasts, students, engineers, analysts, technicians, developers, managers, and anyone who uses geospatial data and/or technology',
		},
		{
			question: 'What to Expect',
			answer:
				'Discover the latest tools and techniques, learn about real-world applications in a variety of industries, and connect with like-minded individuals from all over Africa.',
		},
		{
			question: 'Who can attend',
			answer:
				'Be part of the conversation on the future of geospatial technology and discover how it can revolutionize the way we work, live, and interact with the world around us.',
		},
	],
	// Marquee Text

	marqueeText: '   Largest Geospatial gathering in Africa. GISfest2023.  ',

	// Sponsors
	sponsorshipDeckURL: sponsorshipDeck,
	sponsors: [
		{
			category: SponsorCategory.Diamond,
			logo: LogoWhite,
			companyName: 'Mapbox',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Platinum,
			logo: LogoWhite,
			companyName: 'Spatialnode',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Silver,
			logo: LogoWhite,
			companyName: 'Esri',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Silver,
			logo: LogoWhite,
			companyName: 'Esri',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Silver,
			logo: LogoWhite,
			companyName: 'Esri',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Silver,
			logo: LogoWhite,
			companyName: 'Esri',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Silver,
			logo: LogoWhite,
			companyName: 'Esri',
			confirmed: false,
			website: 'https://x.com',
		},
		{
			category: SponsorCategory.Silver,
			logo: LogoWhite,
			companyName: 'Esri',
			confirmed: false,
			website: 'https://x.com',
		},
	],

	showAgenda: true,
	// Agenda
	agenda: [
		{
			name: 'Day 1',
			id: 1,
			day: 'Friday',
			date: '10 Nov.2023',
			agenda: [
				{
					id: 101,
					time: '10:00am',
					category: AgendaCategory.workshop,
					title: 'Creating community, empowering underrepresented geospatial professionals at Women in Geospatial',
					abstract: "Lorem ipsum dolor sit amet consectetur. Porttitor pellentesque a ac tortor amet pretium. Gravida amet felis enim sapien cras sed lacinia. Morbi ac volutpat neque viverra urna. Ac nisl curabitur eu suspendisse elit. Non at sollicitudin malesuada ut proin. In quis enim ipsum nulla nibh et sed ultrices. Fusce augue in molestie blandit commodo volutpat netus. Nam eget pulvinar mattis nulla arcu ut. Cursus proin purus sed pretium. Maecenas diam mi euismod odio vestibulum iaculis non mattis. Ac sit netus eget pellentesque in vivamus at feugiat. Pellentesque id ut dapibus viverra adipiscing venenatis mattis. Ullamcorper tellus pellentesque porttitor pellentesque maecenas enim. Sodales facilisi et venenatis sagittis pharetra convallis.",
					speakers: [
						{
							name: 'Cameron Williamson',
							role: 'Product Evanlegist',
							avatar: '/assets/images/defaultSpeaker.svg',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
					],
				},
				{
					id: 102,
					category: AgendaCategory.Keynote,
					time: '00:00am',
					title: 'Opening Session',
					abstract: "Lorem ipsum dolor sit amet consectetur. Porttitor pellentesque a ac tortor amet pretium. Gravida amet felis enim sapien cras sed lacinia. Morbi ac volutpat neque viverra urna. Ac nisl curabitur eu suspendisse elit. Non at sollicitudin malesuada ut proin. In quis enim ipsum nulla nibh et sed ultrices. Fusce augue in molestie blandit commodo volutpat netus. Nam eget pulvinar mattis nulla arcu ut. Cursus proin purus sed pretium. Maecenas diam mi euismod odio vestibulum iaculis non mattis. Ac sit netus eget pellentesque in vivamus at feugiat. Pellentesque id ut dapibus viverra adipiscing venenatis mattis. Ullamcorper tellus pellentesque porttitor pellentesque maecenas enim. Sodales facilisi et venenatis sagittis pharetra convallis.",
					speakers: [
						{
							name: 'GISfest2023 Team',
							role: 'Organizers',
							avatar: '/assets/images/defaultSpeaker.svg',
							company: 'GISfest2023',
							sociallink: '',
						},
					],
				},
				{
					id: 103,
					category: AgendaCategory.workshop,
					time: '10:00am',
					title:'Web GIS: An Introduction to ArcGIS Online and ArcGIS Enterprise',
					abstract: "Lorem ipsum dolor sit amet consectetur. Porttitor pellentesque a ac tortor amet pretium. Gravida amet felis enim sapien cras sed lacinia. Morbi ac volutpat neque viverra urna. Ac nisl curabitur eu suspendisse elit. Non at sollicitudin malesuada ut proin. In quis enim ipsum nulla nibh et sed ultrices. Fusce augue in molestie blandit commodo volutpat netus. Nam eget pulvinar mattis nulla arcu ut. Cursus proin purus sed pretium. Maecenas diam mi euismod odio vestibulum iaculis non mattis. Ac sit netus eget pellentesque in vivamus at feugiat. Pellentesque id ut dapibus viverra adipiscing venenatis mattis. Ullamcorper tellus pellentesque porttitor pellentesque maecenas enim. Sodales facilisi et venenatis sagittis pharetra convallis.",
					speakers: [
						{
							name: 'Darrell Steward',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
					],
				},
				{
					id: 104,
					category: AgendaCategory.workshop,
					time: '10:00am',
					title: 'Participatory mapping',
					abstract: "Lorem ipsum dolor sit amet consectetur. Porttitor pellentesque a ac tortor amet pretium. Gravida amet felis enim sapien cras sed lacinia. Morbi ac volutpat neque viverra urna. Ac nisl curabitur eu suspendisse elit. Non at sollicitudin malesuada ut proin. In quis enim ipsum nulla nibh et sed ultrices. Fusce augue in molestie blandit commodo volutpat netus. Nam eget pulvinar mattis nulla arcu ut. Cursus proin purus sed pretium. Maecenas diam mi euismod odio vestibulum iaculis non mattis. Ac sit netus eget pellentesque in vivamus at feugiat. Pellentesque id ut dapibus viverra adipiscing venenatis mattis. Ullamcorper tellus pellentesque porttitor pellentesque maecenas enim. Sodales facilisi et venenatis sagittis pharetra convallis.",
					speakers: [
						{
							name: 'Darrell Steward',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
						{
							name: 'Saannah Nguyen',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
						{
							name: 'Blessie Cooper',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
					],
				},
				{
					id: 105,
					time: '10:00am',
					title: 'Networking ',
					category: AgendaCategory.network,
					
				},
			],
		},
		{
			name: 'Day 2',
			id: 2,
			day: 'Saturday',
			date: '11 Nov.2023',
			agenda: [
				{
					id: 201,
					category: AgendaCategory.panelSession,
					time: '12:00am',
					title: 'Geospatial AI',
					abstract: "Lorem ipsum dolor sit amet consectetur. Porttitor pellentesque a ac tortor amet pretium. Gravida amet felis enim sapien cras sed lacinia. Morbi ac volutpat neque viverra urna. Ac nisl curabitur eu suspendisse elit. Non at sollicitudin malesuada ut proin. In quis enim ipsum nulla nibh et sed ultrices. Fusce augue in molestie blandit commodo volutpat netus. Nam eget pulvinar mattis nulla arcu ut. Cursus proin purus sed pretium. Maecenas diam mi euismod odio vestibulum iaculis non mattis. Ac sit netus eget pellentesque in vivamus at feugiat. Pellentesque id ut dapibus viverra adipiscing venenatis mattis. Ullamcorper tellus pellentesque porttitor pellentesque maecenas enim. Sodales facilisi et venenatis sagittis pharetra convallis.",
					speakers: [
						{
							name: 'Cemeron Williamson',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
					],
				},
				{
					id: 202,
					category: AgendaCategory.workshop,
					time: '10:00am',
					title:
						'Empowering underrepresented geospatial professionals at Women in Geospatial',
					speakers: [
						{
							name: 'Darrell Steward',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
					],
				},
				{
					id: 203,
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					abstract: "Lorem ipsum dolor sit amet consectetur. Porttitor pellentesque a ac tortor amet pretium. Gravida amet felis enim sapien cras sed lacinia. Morbi ac volutpat neque viverra urna. Ac nisl curabitur eu suspendisse elit. Non at sollicitudin malesuada ut proin. In quis enim ipsum nulla nibh et sed ultrices. Fusce augue in molestie blandit commodo volutpat netus. Nam eget pulvinar mattis nulla arcu ut. Cursus proin purus sed pretium. Maecenas diam mi euismod odio vestibulum iaculis non mattis. Ac sit netus eget pellentesque in vivamus at feugiat. Pellentesque id ut dapibus viverra adipiscing venenatis mattis. Ullamcorper tellus pellentesque porttitor pellentesque maecenas enim. Sodales facilisi et venenatis sagittis pharetra convallis.",
					speakers: [
						{
							name: 'Darrell Steward',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
						{
							name: 'Saannah Nguyen',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
						{
							name: 'Blessie Cooper',
							role: 'Product Evanlegist',
							avatar: '',
							company: 'Dealcode',
							sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
						},
					],
				},
				{
					id: 204,
					category: AgendaCategory.network,
					time: '10:00am',
					title: 'Networking',
				},
			],
		},
	],

	// Venue

	venueImages: [
		{ path: VenueImageOne, alt: 'Image One' },
		{ path: VenueImageTwo, alt: 'Image One' },
		{ path: VenueImageThree, alt: 'Image One' },
	],

	/********  Teams Page  ***********/
	teamDescription: [
		'GISfest is brought to you by a team of passionate people who are dedicated to promoting geospatial innovation and making a positive impact in our community. As an NGO, we foster a culture of learning and discovery around geospatial technology.',
		'Our goal is to provide a platform for individuals to learn and grow, and to make meaningful contributions to the community through the power of geospatial technology. Together, we believe we can unlock the potential of geospatial technology and create a better future for all.',
	],

	teams: [
		{
			category: TeamCategory.Organizing,
			teamMembers: [
				{
					fullName: 'Emmanuel jolaiya',
					twitter: '@jeafreezy',
					linkedIn: 'https://www.twitter.com/jeafreezy',
					teamName: 'Design & Tech.(Lead)',
					avatar: '/assets/images/team/emmanuel_jolaiya.jpg',
				},
				{
					fullName: 'Victor Ademoyero',
					twitter: '@victorademoyero',
					linkedIn: 'https://www.linkedin.com/in/victorademoyero/',
					teamName: 'Design & Tech.',
					avatar: '/assets/images/team/victor-ademoyero.jpg',
				},
				{
					fullName: 'Michael Olanrewaju',
					twitter: '@michaelolanrewaju',
					linkedIn: 'https://www.linkedin.com/in/michaelolanrewaju/',
					teamName: 'Design & Tech.',
					avatar: '/assets/images/team/michael_olanrewaju.jpg',
				},
				{
					fullName: 'Mercy Akintola',
					twitter: '@mercyakintola',
					linkedIn: 'https://www.linkedin.com/in/mercyakintola/',
					teamName: 'Logistics (Lead)',
					avatar: '/assets/images/team/mercy-akintola.jpg',
				},
				{
					fullName: 'Juwon Ishola',
					twitter: '@juwonishola',
					linkedIn: 'https://www.linkedin.com/in/juwonishola/',
					teamName: 'Media',
					avatar: '/assets/images/team/juwon-ishola.jpg',
				},
				{
					fullName: 'Shehu Muhammed',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Media',
					avatar: '/assets/images/team/shehu-muhammed.jpg',
				},
				{
					fullName: 'Emeka Igwe',
					twitter: '@emekaigwe',
					linkedIn: 'https://www.linkedin.com/in/juwonishola/',
					teamName: 'Speakers Engagement',
					avatar: '/assets/images/team/emeka-igwe.jpg',
				},
				{
					fullName: 'Omowonuola Akintola',
					twitter: '@omowonuolaakintola',
					linkedIn: 'https://www.linkedin.com/in/omowonuolaakintola/',
					teamName: 'Sponsorship',
					avatar: '/assets/images/team/omowonuola_akintola.jpg',
				},
				{
					fullName: 'Oluwadamilola Salau',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Budget',
					avatar: '/assets/images/team/oluwadamilola-salau.jpg',
				},
			],
		},
		{
			category: TeamCategory.Volunteers,
			teamMembers: [
				{
					fullName: 'Courtney Henry',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Media',
					avatar: '/assets/images/speakers/courtney.png',
				},
				{
					fullName: 'Annette Black',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Design & Tech.',
					avatar: '/assets/images/speakers/annette.png',
				},
				{
					fullName: 'Marvin McKinney',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Budget',
					avatar: '/assets/images/speakers/marvin.png',
				},
				{
					fullName: 'Floyd Miles',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Logistics',
					avatar: '/assets/images/speakers/floyd.png',
				},
			],
		},
	],

	callToAction: {
		largeText: 'Ready to make history together?',	
		ctaText: 'Become a Sponsor!',
		button: {
			text: 'Sponsorship Deck',
			route: sponsorshipDeck,
			showArrow: true,
		},
	},

	speakerDeckURL: speakerDeck,
	speakerCTA: speakerCTA,
	defaultSpeakerInfo: [
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
		{
			name: '',
			role: 'Coming Soon!',
			avatar: '/assets/images/defaultSpeaker.svg',
			company: '',
			sociallink: '',
		},
	],
	speakers: [
		{
			name: 'Cameron Williamson',
			role: 'Product Evanlegist',
			avatar: '',
			company: 'Dealcode',
			sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
		},
	],

	callForSpeakers: {
		timeline: {
			callOpen: '23 May 2023',
			callClose: '25 September, 2023',
		},
		sessionSubmissionButton: {
			text: 'Submit a session',
			route: '',
		},
	},
};
