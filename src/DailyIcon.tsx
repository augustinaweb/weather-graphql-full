import React from 'react';
import sunny from './icons/01.png';
import sclouds from './icons/02.png';
import mclouds from './icons/03.png';
import lclouds from './icons/04.png';
import rainy from './icons/09.png';
import drizzle from './icons/10.png';
import stormy from './icons/11.png';
import snowy from './icons/13.png';
import misty from './icons/50.png';
import sunriseIcon from './icons/sunrise.png';
import sunsetIcon from './icons/sunset.png';
import windIcon from './icons/wind.png';
import humidityIcon from './icons/humidity.png';
import { CityByName_getCityByName_daily as daily } from './queries/types/CityByName';

interface Props {
	item: daily;
	weekDay: string;
	date: Date;
}

export const DailyIcon: React.FC<Props> = ({ item, weekDay, date }: Props) => {
	const icons = {
		'01': sunny,
		'02': sclouds,
		'03': mclouds,
		'04': lclouds,
		'09': rainy,
		'10': drizzle,
		'11': stormy,
		'13': snowy,
		'50': misty
	};

	const index = item.weather[0].icon.slice(0, -1);
	const dateCalc = new Date(date).toLocaleDateString();
	const sunriseCalc = new Date(item.sunrise * 1000).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	const sunsetCalc = new Date(item.sunset * 1000).toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
	return (
		<div>
			<div className="daily-icon">
				<h3>{weekDay}</h3>
				<p>{dateCalc}</p>
				<div className="icon">
					<img src={icons[index]} alt="weather icon" />
				</div>
				<div className="description">
					<p>The skies promise</p>
					<p>{item.weather[0].description}</p>
				</div>
				<div className="temperature">
					<p>{Math.round(item.temp.day)} &deg;C</p>
					<p> / </p>
					<p>{Math.round(item.temp.night)} &deg;C</p>
				</div>
				<div className="data wind">
					<img src={windIcon} alt="wind_icon"></img>
					<p>{Math.round(item.wind_speed)} m/s</p>
				</div>
				<div className="data humidity">
					<img src={humidityIcon} alt="humidity_icon"></img>
					<p>{item.humidity}</p>
				</div>
				<div className="data sunrise">
					<img src={sunriseIcon} alt="sunrise_icon"></img>
					<p>{sunriseCalc}</p>
				</div>
				<div className="data sunset">
					<img src={sunsetIcon} alt="sunset_icon"></img>
					<p>{sunsetCalc}</p>
				</div>
			</div>
		</div>
	);
};
