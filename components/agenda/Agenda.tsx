'use client';
import AgendaCard from './AgendaCard';
import { AgendaCategory, TAgenda, TAgendaCard } from '@/config/types';
import SectionHeader from '../shared/SectionHeader';
import { useState } from 'react';

//todo-- going to config @vickystickz

const agenda: TAgenda[] = [
	{
		name: 'Day 1',
		id: 1,
		day: 'Friday',
		date: '10 Nov.2023',
		agenda: [
			{
				time: '10:00am',
				title: 'Opening Session',
				speakers: [
					{
						name: 'Cemeron Williamson',
					},
				],
			},
			{
				category: AgendaCategory.Keynote,
				time: '00:00am',
				title: 'Opening Session',
				speakers: [
					{
						name: 'Ronald Richards',
					},
				],
			},
			{
				category: AgendaCategory.workshop,
				time: '10:00am',
				title:
					'Creating community, empowering underrepresented geospatial professionals at Women in Geospatial',
				speakers: [
					{
						name: 'Darrell Steward',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				time: '10:00am',
				title: 'Networking ',
			},
		],
	},
	{
		name: 'Day 2',
		id: 2,
		day: 'Saturday',
		date: '11 Nov.2023',
		agenda: [
			{
				time: '12:00am',
				title: 'Opening Session',
				speakers: [
					{
						name: 'Cemeron Williamson',
					},
				],
			},
			{
				category: AgendaCategory.Keynote,
				time: '00:00am',
				title: 'Opening Session',
				speakers: [
					{
						name: 'Ronald Richards',
					},
				],
			},
			{
				category: AgendaCategory.workshop,
				time: '10:00am',
				title:
					'Creating community, empowering underrepresented geospatial professionals at Women in Geospatial',
				speakers: [
					{
						name: 'Darrell Steward',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				category: AgendaCategory.panelSession,
				time: '10:00am',
				title: 'AI and GIS',
				speakers: [
					{
						name: 'Darrell Steward',
					},
					{
						name: 'Saannah Nguyen',
					},
					{
						name: 'Blessie Cooper',
					},
				],
			},
			{
				time: '10:00am',
				title: 'Networking ',
			},
		],
	},
];

const Agenda = () => {
	const [activeDayId, setActiveDayId] = useState(1);
	const [selectedTimezone, setSelectedTimezone] = useState('');

	const handleDayClick = (id: number) => {
		setActiveDayId(id);
	};
	const currentDayObject = agenda.filter((agenda) => agenda.id === activeDayId);
	const { date, day, agenda: agendaArray } = currentDayObject[0];

	return (
		<div className="flex flex-col gap-10 w-full">
			<SectionHeader title="Agenda" />
			<div className="flex gap-6 tablet:gap-10  flex-col-reverse laptop:flex-row p-2 justify-between items-center top-16 backdrop-blur-2xl">
				{/* Web  */}
				<div className="flex w-full justify-between">
					<div className="flex items-center space-x-2  tablet:space-x-10 font-p-semibold">
						<h1 className="text-tc-0 text-h4 tablet:text-h2">{day}</h1>
						<span className="text-tc-10 text-body-sm tablet:text-body">
							{date}
						</span>
					</div>

					<div className="hidden laptop:flex ">
						<DaySwitcher
							handleDayClick={handleDayClick}
							activeDayId={activeDayId}
						/>
					</div>
					<div className="flex flex-col  text-body-xm tablet:text-body tablet:flex-row tablet:items-center tablet:space-x-10">
						<p className="text-tc-10  self-end  tablet:self-center">
							Showing time:
						</p>
						<div>
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
