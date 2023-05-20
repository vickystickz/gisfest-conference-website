'use client';
import AgendaCard from './AgendaCard';
import { siteConfiguration } from '@/config/siteConfig';
import SectionHeader from '../shared/SectionHeader';
import { useState } from 'react';


const Agenda = () => {
	const { agenda } = siteConfiguration;
	const [activeDayId, setActiveDayId] = useState(1);
	const [selectedTimezone, setSelectedTimezone] = useState('');

	const handleDayClick = (id: number) => {
		setActiveDayId(id);
	};
	const currentDayObject = agenda.filter((agenda) => agenda.id === activeDayId);
	const { date, day, agenda: agendaArray } = currentDayObject[0];

	return (
		<div className="flex flex-col gap-10 w-full">
			<SectionHeader title="Agenda" layout='text-center' />
			<div className="flex gap-6 tablet:gap-10  flex-col-reverse laptop:flex-row p-2 justify-between items-center laptop:top-24 tablet:top-[66px] top-[68px] rounded-b-xl  left-0 right-0 sticky  w-full backdrop-blur-2xl">
				{/* Web  */}
				<div className="flex w-full flex-row">
					<div className=" flex-1 flex items-center space-x-2  tablet:space-x-2 font-p-semibold">
						<h1 className="text-tc-0 text-h4 tablet:text-h2 laptop:w-[250px]">{day}</h1>
						<span className="text-tc-10 text-body-sm tablet:text-body flex-grow">
							{date}
						</span>
					</div>

					<div className=" flex-1 hidden laptop:flex laptop:justify-center transition-all delay-150 ease-in-out ">
						<DaySwitcher
							handleDayClick={handleDayClick}
							activeDayId={activeDayId}
						/>
					</div>
					<div className=" flex-1 laptop:justify-end flex flex-col tablet:items-center  text-body-xm tablet:text-body ">
						<p className="text-tc-10 flex justify-end tablet:flex-1 w-full">
							Showing time:
						</p>
						<div className='flex justify-end w-full flex-1'>
							<select className="p-2 text-tc-10 border-tc-20 border rounded-lg bg-transparent">
								<option>(GMT+10:00)</option>
								<option>(GMT+10:00)</option>
								<option>(GMT+10:00)</option>
								<option>(GMT+10:00)</option>
							</select>
						</div>
					</div>
				</div>
				{/* Mobile  */}
				<div className="laptop:hidden">
					<DaySwitcher
						handleDayClick={handleDayClick}
						activeDayId={activeDayId}
					/>
				</div>
			</div>
			<div className="gap-6 grid grid-cols-1 ">
				{agendaArray.map((agenda, id) => (
					<AgendaCard
						key={`agenda-${id}`}
						agenda={agenda}
						selectedTimezone={selectedTimezone}
					/>
				))}
			</div>
		</div>
	);
};

export default Agenda;


type TDaySwitcher = {
	activeDayId: number;
	handleDayClick: (id: number) => void;
};
const DaySwitcher = ({ activeDayId, handleDayClick }: TDaySwitcher) => {
	const { agenda } = siteConfiguration;
	return (
		<div className="border bg-sc-10 border-sc-30 tag-padding space-x-10 rounded-full flex items-center">
			{agenda.map((day, id) => (
				<div
					className={`${
						id + 1 === activeDayId
							? ' border-tc-10 border text-tc-0'
							: 'text-tc-20'
					} tag-padding  cursor-pointer  bg-sc-20 text-body-sm tablet:text-body font-p-medium rounded-full `}
					key={`day-${id}`}
					onClick={() => handleDayClick(id + 1)}
				>
					{day.name}
				</div>
			))}
		</div>
	);
};
