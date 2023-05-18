import logo from '@/public/assets/logos/logo-white.svg';
import heroImage from '@/public/assets/images/hero-image.jpeg';
import spatialLove from '@/public/assets/icons/Love-shape.svg';
import { SponsorCategory } from '@/config/types';
import LogoWhite from '@/public/assets/logos/logo-white.svg';

export const siteConfiguration = {
    //Header
    header: {
        conferenceLogo: {
            route:'/',
            logo:logo
        },
        navigationLinks: [
                {
                    text: 'About',
                    route: '#about',
                    isActive: true,
                },
                {
                    text: 'Sponsors',
                    route: '#sponsors',
                    isActive: true,
                },
                {
                    text: 'Speakers',
                    route: '#speakers',
                    isActive: true,
                },
                {
                    text: 'Agenda',
                    route: '#agenda',
                    isActive: true,
                },
        ],
             navigationButtons: [
                {
                    text: 'Sponsor GISfest2023',
                    route: '/sponsors',
                    isActive: true
                },
                {
                    text: 'Buy Ticket',
                    route: '/tickets',
                    isActive: true
                }
             ]
        
    },

    //Conference Type

    conferenceType: {
        title: "Geospatial Conference for Spatial People",
        question: "Are you curious about the possibilities of geospatial technology? Then join us at GISfest2023!",
        picture: spatialLove
    },
    // Jumbotron

    jumbotron: {
        heroImage: heroImage,
        conference: {
            year: "2023",
            edition: "2nd Edititon",
            title: "Geospatial innovation and the future of Africa",
            date: "10 - 11th Nov. 2023",
            location: "Lagos, Nigeria",
            description: "Join us for a two-day event that's dedicated to exploring the limitless potential of geospatial technology."
        },
        heroButtons:[
            {
                text: 'Grab a Ticket',
                route: '/ticket',
                isActive: true
            },
            {
                text: 'Sponsor GISfest2023',
                route: '#sponsors',
                isActive: true
            }
        ]
    },

    // About

    about: {
        description: [
            "GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and its applications in numerous industries.",
            "This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation."
        ]
    },

    //Take away for GISfest 2023
    takeAway: [
        {
            title: "Learn",
            decription: "Learn from industry experts at GISfest2023. Workshops, presentations, and panel discussions cover the latest tools, techniques, and trends in geospatial technology. Whether you're a pro or a beginner, there's something for you. Join us and stay ahead of the curve!"
        },
        {
            title: "Discover",
            decription: "Explore the potential of geospatial technology and discover the latest advancements at GISfest. You'll learn about new tools and techniques that can help you work more efficiently and effectively. Join us to discover the power of geospatial technology and how it can benefit you."
        },
        {
            title: "Network",
            decription: "GISfest is the perfect place to network with like-minded individuals from across Africa. Connect with geospatial enthusiasts and professional who share your passion for this exciting field. You'll have the chance to build relationships, exchange ideas, and make valuable contacts that can help you take your career to the next level."
        }
    ],

    // FAQ

    faq: [
        {
            question: "Who can attend",
            answer: "Geospatial enthusiasts, students, engineers, analysts, technicians, developers, managers, and anyone who uses geospatial data and/or technology"
        },
        {
            question: "What to Expect",
            answer: "Discover the latest tools and techniques, learn about real-world applications in a variety of industries, and connect with like-minded individuals from all over Africa."
        },
        {
            question: "Who can attend",
            answer: "Be part of the conversation on the future of geospatial technology and discover how it can revolutionize the way we work, live, and interact with the world around us."
        }

    ],
    // Marquee Text

    marqueeText: "   Largest Geospatial gathering in Africa. GISfest2023.  ",

    // Sponsors
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
    ]
}
