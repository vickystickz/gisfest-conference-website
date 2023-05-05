import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-montserrat',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${montserrat.variable} font-sans`}>
			<body>{children}</body>
		</html>
	);
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Africa GISfestival Conference ',
	description: 'Geospatial Conference for the Spatial People',
	authors: { name: 'GISfest', url: 'https://www.gisfest.org' },
	applicationName: 'GISfest Conference Website',
	keywords: ['GISfest', 'Conference', 'Geospatial'],
	generator: 'Next.js',
	creator: 'GISfest Tech Team',
	metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_FRONTEND_URL}`),
	openGraph: {
		title: 'Africa GISfestival Conference ',
		description: 'Geospatial Conference for the Spatial People',
		url: 'https://www.gisfest.org',
		siteName: 'GISfest Conference Website',
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Africa GISfestival Conference',
		description: 'Geospatial Conference for the Spatial People',
		creator: '@gis_fest',
	},
};
