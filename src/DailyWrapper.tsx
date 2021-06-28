import React from 'react';
import { DailyIcon } from './DailyIcon';
import './app.css';
import { CityByName_getCityByName_daily as daily } from './queries/types/CityByName';

interface Props {
	daily: readonly daily[] | undefined;
}

const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

export const DailyWrapper: React.FC<Props> = ({ daily }: Props) => {
	const current = new Date();
	const currentWeekday = current.getDay();
	const days = daily?.slice(0, 8);
	const today = new Date();

	return (
		<div className="daily-wrapper">
			{days?.map((item, i: number) => {
				const index = currentWeekday + i + 1;
				const tomorrow = new Date();
				tomorrow.setDate(today.getDate() + 1 + i);
				const weekDay =
					index <= 6 ? weekDays[index] : weekDays[index - 7];
				return (
					<DailyIcon
						key={`${weekDay}${i}`}
						item={item}
						weekDay={weekDay}
						date={tomorrow}
					/>
				);
			})}
		</div>
	);
};
