import React, { useState } from 'react';
import './app.css';
import { DailyWrapper } from './DailyWrapper';
import { queryWithVariable } from './queries/getCityByName';
import { useQuery } from '@apollo/client';
import { CityByName, CityByNameVariables } from './queries/types/CityByName';
import { Unit } from '../types/globalTypes';

export const App: React.FC = () => {
	const [city, setCity] = useState('Vilnius');

	const { data, loading, error, refetch } = useQuery<
		CityByName,
		CityByNameVariables
	>(queryWithVariable, {
		variables: { ['name']: city }
	});

	if (error) {
		return <div>{`Error: ${error}`}</div>;
	} else if (loading) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className="app">
					<h1>Another lovely day in </h1>
					{console.log(data)}
					<input
						onBlur={(e) => setCity(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setCity((e.target as HTMLInputElement).value);
								refetch();
							}
						}}
						placeholder={city}
						className="city-name"
					></input>
					<DailyWrapper daily={data?.getCityByName?.daily} />
				</div>
			</>
		);
	}
};
