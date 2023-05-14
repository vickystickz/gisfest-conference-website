import Agenda from '@/components/agenda/Agenda';
import Sponsors from '@/components/sponsors/Sponsors';

export default function Home() {
	return (
		<>
			<div className="wrapper">
				<section id="#sponsors">
					<Sponsors />
				</section>
				<section id="#agenda">
					<Agenda />
				</section>
			</div>
		</>
	);
}
