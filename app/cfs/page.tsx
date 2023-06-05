import CallToAction from '@/components/CTA';
import CallForSpeakersContent from '@/app/contents/cfs.mdx';
import type { Metadata } from 'next';
export default function CallForSpeakers() {
	return (
		<div className="flex flex-col gap-10">
			<CallForSpeakersContent />
			<CallToAction />
		</div>
	);
}

const pageTitle = 'Call for Speakers | GISfest 2023 Conference';
const pageDescription = 'Submit your sessions in GISfest...';

//todo - dynamically generate og url
export const metadata: Metadata = {
	title: pageTitle,
	openGraph: {
		title: pageTitle,
		description: pageDescription,
		url: 'https://www.gisfest.org/cfs',
	},

	twitter: {
		title: pageTitle,
		description: pageDescription,
	},
};
