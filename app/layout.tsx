import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/shared/Header';

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
		<html
			lang="en"
			className={`${montserrat.variable} bg-sc-0 font-sans scroll-smooth`}
		>
			<body>
				<Header />
				<main className="wrapper">{children}</main>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: 'GISfestival 2023 Conference ',
	description: 'Geospatial Conference for the Spatial People',
	authors: { name: 'GISfest', url: 'https://www.gisfest.org' },
	applicationName: 'GISfest Conference Website',
	keywords: ['GISfest', 'Conference', 'Geospatial'],
	generator: 'Next.js',
	creator: 'GISfest Tech Team',
	metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_FRONTEND_URL}`),
	openGraph: {
		title: 'GISfestival 2023 Conference ',
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
		title: 'GISfestival 2023 Conference',
		description: 'Geospatial Conference for the Spatial People',
		creator: '@gis_fest',
	},
};
