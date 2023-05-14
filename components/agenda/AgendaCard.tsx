import { AgendaCategory, TAgendaCard } from '@/config/types';

type ExtendedAgendaCard = { selectedTimezone: string; agenda: TAgendaCard };
const AgendaCard = ({ selectedTimezone, agenda }: ExtendedAgendaCard) => {
	return (
		<div className="odd:border-gradient rounded-3xl p-[0.1rem]">
			<div className="bg-sc-20 w-full rounded-3xl space-y-2 p-8 cursor-pointer ">
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
									className="text-tc-10 text-body font-p-semibold"
								>
									{speaker.name}
								</p>
							))}
						</div>
						<p
							className={` p-2 ${getAgendaCategoryStyle(
								agenda?.category
							)} self-end rounded-xl text-body-sm text-sc-10 font-p-medium tag-padding`}
						>
							{agenda.category}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AgendaCard;

function getAgendaCategoryStyle(category?: AgendaCategory) {
	if (category === AgendaCategory.workshop) {
		return 'bg-yellow-20';
	} else if (category === AgendaCategory.Keynote) {
		return 'bg-red-20';
	} else if (category === AgendaCategory.panelSession) {
		return 'bg-green-20';
	}
}
