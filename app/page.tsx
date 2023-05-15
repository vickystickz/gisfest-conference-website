import SpatialPeople from '@/components/SpatialPeople';
import Agenda from '@/components/agenda/Agenda';
import Sponsors from '@/components/sponsors/Sponsors';
import Venue from '@/components/venue/Venue';

export default function Home() {
	return (
		<>
			<div className="wrapper grid gap-y-10 ">
				<section id="#sponsors ">
					<Sponsors />
				</section>
				<section id="#agenda">
					<Agenda />
				</section>
				<SpatialPeople />
				<section id="#venue">
					<Venue />
				</section>
			</div>
		</>
	);
}
