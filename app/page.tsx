import Jumbotron from '@/components/jumbotron/Jumbotron';
import Sponsors from '@/components/sponsors/Sponsors';

export default function Home() {
	return (
		<>
			<Jumbotron/>
			<div className="wrapper">	
				<section id="#sponsors">
					<Sponsors />
				</section>
			</div>
		</>
	);
}
