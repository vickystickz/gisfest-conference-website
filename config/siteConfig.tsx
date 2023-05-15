import logo from '@/public/assets/logos/logo-white.svg';
import heroImage from '@/public/assets/images/hero-image.jpeg';
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
