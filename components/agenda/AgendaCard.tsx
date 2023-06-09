import { AgendaCategory, TAgendaCard } from '@/config/types';
import Tag from '../shared/Tag';
import Link from 'next/link';


type ExtendedAgendaCard = { selectedTimezone: string; agenda: TAgendaCard };
const AgendaCard = ({ selectedTimezone, agenda }: ExtendedAgendaCard) => {
	return (
		<div className=" col-span-1 odd:border-gradient rounded-3xl p-[0.1rem]">
			<Link href={`agenda/${agenda.id}`} >
			<div className="bg-sc-20  rounded-3xl space-y-2 p-3 laptop:p-6 cursor-pointer ">
				<p className="text-tc-10 text-body-sm tablet:text-body font-p-medium">
					{agenda.time}
				</p>
				<div className="flex space-y-4 justify-between tablet:items-center flex-col tablet:flex-row">
					<div className="tablet:basis-2/3">
						<p className="text-tc-0 text-body tablet:text-h4 font-p-semibold">
							{agenda.title}
						</p>
					</div>
					<div className="flex items-center basis-1/3 justify-between  gap-10">
						<div>
							{agenda.speakers?.map((speaker, id) => (
								<p
									key={`speaker-${id}`}
									className="text-tc-10 whitespace-nowrap text-body font-p-semibold"
								>
									{speaker.name}
								</p>
							))}
						</div>
						<Tag category={agenda.category} day={undefined}/>
					</div>
				</div>
			</div>
			</Link>
		</div>
	);
};

export default AgendaCard;