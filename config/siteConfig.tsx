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

  // Speakers
  speakers: [
    {
      name: 'Cameron Williamson',
      role: 'Product Evanlegist',
      avatar: '/speakers/oluwatobi.jpg',
      company: 'Dealcode',
      sociallink: 'https://www.linkedin.com/in/oluwatobi-akinpelu-0b1b3b1b0/',
    },
    {
      name: 'Annette Black',
      role: 'GIS Analyst',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'Esri',
      sociallink: 'https://twitter.com/oluwaseunogunb1',
    },
    {
      name: 'Marvin McKinney',
      role: 'Researcher and GIS Expert',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'GISkonsult',
      sociallink: 'https://www.linkedin.com/in/oluwaseun-ogunbiyi-0b1b3b1b0/',
    },
    {
      name: 'Floyd Miles',
      role: 'GIS Expert',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'Sambus',
      sociallink: 'https://twitter.com/oluwaseunogunb1',
    },
    {
      name: 'Dianne Russell',
      role: 'GIS Developer',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'Trenewise',
      sociallink: 'https://www.linkedin.com/in/oluwaseun-ogunbiyi-0b1b3b1b0/',
    },
    {
      name: 'Jane Cooper',
      role: 'Geospatial Expert',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'Bolt',
      sociallink: 'https://twitter.com/oluwaseunogunb1',
      },
    {
      name: 'Courtney Henry',
      role: 'Data Quality Manger',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'HOTOSM',
      sociallink: 'https://www.linkedin.com/in/oluwaseun-ogunbiyi-0b1b3b1b0/',
    },
    {
      name: 'Cody Fisher',
      role: 'Product Evangelist',
      avatar: '/speakers/oluwaseun.jpg',
      company: 'AfriHAck',
      sociallink: 'https://twitter.com/oluwaseunogunb1',
    },
  ],


  // Agenda
  agenda: [
    {
      name: "Day 1",
      id: 1,
      day: "Friday",
      date: "10 Nov.2023",
      agenda: [
        {
          time: "10:00am",
          title: "Opening Session",
          speakers: [
            {
              name: "Cemeron Williamson",
            },
          ],
        },
        {
          category: AgendaCategory.Keynote,
          time: "00:00am",
          title: "Opening Session",
          speakers: [
            {
              name: "Ronald Richards",
            },
          ],
        },
        {
          category: AgendaCategory.workshop,
          time: "10:00am",
          title:
            "Creating community, empowering underrepresented geospatial professionals at Women in Geospatial",
          speakers: [
            {
              name: "Darrell Steward",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          time: "10:00am",
          title: "Networking ",
        },
      ],
    },
    {
      name: "Day 2",
      id: 2,
      day: "Saturday",
      date: "11 Nov.2023",
      agenda: [
        {
          time: "12:00am",
          title: "Opening Session",
          speakers: [
            {
              name: "Cemeron Williamson",
            },
          ],
        },
        {
          category: AgendaCategory.Keynote,
          time: "00:00am",
          title: "Opening Session",
          speakers: [
            {
              name: "Ronald Richards",
            },
          ],
        },
        {
          category: AgendaCategory.workshop,
          time: "10:00am",
          title:
            "Creating community, empowering underrepresented geospatial professionals at Women in Geospatial",
          speakers: [
            {
              name: "Darrell Steward",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          category: AgendaCategory.panelSession,
          time: "10:00am",
          title: "AI and GIS",
          speakers: [
            {
              name: "Darrell Steward",
            },
            {
              name: "Saannah Nguyen",
            },
            {
              name: "Blessie Cooper",
            },
          ],
        },
        {
          time: "10:00am",
          title: "Networking ",
        },
      ],
    },
  ],
	showAgenda: false,
	// Agenda
	agenda: [
		{
			name: 'Day 1',
			id: 1,
			day: 'Friday',
			date: '10 Nov.2023',
			agenda: [
				{
					time: '10:00am',
					title: 'Opening Session',
					speakers: [
						{
							name: 'Cemeron Williamson',
						},
					],
				},
				{
					category: AgendaCategory.Keynote,
					time: '00:00am',
					title: 'Opening Session',
					speakers: [
						{
							name: 'Ronald Richards',
						},
					],
				},
				{
					category: AgendaCategory.workshop,
					time: '10:00am',
					title:
						'Creating community, empowering underrepresented geospatial professionals at Women in Geospatial',
					speakers: [
						{
							name: 'Darrell Steward',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					time: '10:00am',
					title: 'Networking ',
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
					time: '12:00am',
					title: 'Opening Session',
					speakers: [
						{
							name: 'Cemeron Williamson',
						},
					],
				},
				{
					category: AgendaCategory.Keynote,
					time: '00:00am',
					title: 'Opening Session',
					speakers: [
						{
							name: 'Ronald Richards',
						},
					],
				},
				{
					category: AgendaCategory.workshop,
					time: '10:00am',
					title:
						'Creating community, empowering underrepresented geospatial professionals at Women in Geospatial',
					speakers: [
						{
							name: 'Darrell Steward',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					category: AgendaCategory.panelSession,
					time: '10:00am',
					title: 'AI and GIS',
					speakers: [
						{
							name: 'Darrell Steward',
						},
						{
							name: 'Saannah Nguyen',
						},
						{
							name: 'Blessie Cooper',
						},
					],
				},
				{
					time: '10:00am',
					title: 'Networking ',
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
					twitter: '@emmanueljolaiya',
					linkedIn: 'https://www.linkedin.com/in/emmanueljolaiya/',
					teamName: 'Design & Tech.',
				},
				{
					fullName: 'Victor Ademoyero',
					twitter: '@victorademoyero',
					linkedIn: 'https://www.linkedin.com/in/victorademoyero/',
					teamName: 'Design & Tech.',
				},
				{
					fullName: 'Michael Olanrewaju',
					twitter: '@michaelolanrewaju',
					linkedIn: 'https://www.linkedin.com/in/michaelolanrewaju/',
					teamName: 'Design & Tech.',
				},
				{
					fullName: 'Mercy Akintola',
					twitter: '@mercyakintola',
					linkedIn: 'https://www.linkedin.com/in/mercyakintola/',
					teamName: 'Logistics',
				},
				{
					fullName: 'Juwon Ishola',
					twitter: '@juwonishola',
					linkedIn: 'https://www.linkedin.com/in/juwonishola/',
					teamName: 'Media',
				},
				{
					fullName: 'Shehu Muhammed',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Media',
				},
				{
					fullName: 'Emeka Igwe',
					twitter: '@emekaigwe',
					linkedIn: 'https://www.linkedin.com/in/juwonishola/',
					teamName: 'Speakers Engagement',
				},
				{
					fullName: 'Omowonuola Akintola',
					twitter: '@omowonuolaakintola',
					linkedIn: 'https://www.linkedin.com/in/omowonuolaakintola/',
					teamName: 'Speakers Engagement',
				},
				{
					fullName: 'Oluwadamilola Salau',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Budget',
				},
			],
		},
		{
			category: TeamCategory.Volunteers,
			teamMembers: [
				{
					fullName: 'Shehu Muhammed',
					twitter: '@shehumuhammed',
					linkedIn: 'https://www.linkedin.com/in/shehumuhammed/',
					teamName: 'Media',
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
};
