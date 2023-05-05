import ConferenceEdition from '@/components/ConferenceEdition';
import SEO from '@/components/SEO';
import GISfestIcon from '@/components/icons/GISfestIcon';
import { ConferenceEditions } from '@/config/editions';

export default function Home() {
	return (
		<>
			<SEO
				title="GISfest Conference"
				description="Geospatial Conference for the Spatial People in Africa"
				author="GISfest"
				ogimage={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/og-image.jpg`}
			/>

			<div className="flex p-10 w-full flex-col gap-20 items-center justify-center laptop:bg-fullscreenBgContour laptop:bg-right-bottom laptop:bg-no-repeat">
				<div className="p-6 rounded-full shadow-primary">
					<GISfestIcon />
				</div>
				{ConferenceEditions.map((edition, id) => (
					<ConferenceEdition
						location={edition.location}
						hashtag={edition.hashtag}
						active={edition.active}
						date={edition.date}
						key={`edition-${id}`}
						url={edition.url}
					/>
				))}
			</div>
		</>
	);
}
