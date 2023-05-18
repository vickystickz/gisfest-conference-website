import About from '@/components/about/About';
import ConferenceType from '@/components/conferenceType/ConferenceType';
import FAQ from '@/components/faq/FAQ';
import Jumbotron from '@/components/jumbotron/Jumbotron';
import MarqueeText from '@/components/marquee/MarqueeText';
import Sponsors from '@/components/sponsors/Sponsors';
import TakeAway from '@/components/takeAway/TakeAway';
export default function Home() {
	return (
		<>
			<Jumbotron/>
			<div className="wrapper relative">
				<section id="#conferenceType">
					<ConferenceType/>
				</section>
				<section id="#about" >
					<About />	
				</section>
				<section id='#takeaway'>
					<TakeAway />
				</section>	
				<section id='#faq'>
					<FAQ />
				</section>
			</div>
			<MarqueeText />
			<div className="wrapper">
				<section id="#sponsors">
					<Sponsors />
				</section>
			</div>
		</>
	);
}
