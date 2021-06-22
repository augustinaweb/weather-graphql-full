import React, { useState } from 'react';
import './app.css';
<<<<<<< HEAD
import { DailyWrapper } from './DailyIcon';
import { queryWithVariable } from './queries/getCityByName';
import { useQuery } from '@apollo/client';
//import { CityByName, CityByNameVariables } from './queries/types/CityByName';

export const App: React.FC = () => {
	const [city, setCity] = useState('Vilnius');
=======
import { DailyIcon } from './DailyIcon';
import { queryWithVariable } from './queries/getCityByName';
import { useQuery } from '@apollo/client';
import { CityByName, CityByNameVariables } from './queries/types/CityByName';

export const App: React.FC = () => {
	const [city, setCity] = useState('Vilnius');

	const { data, loading, error, refetch } = useQuery<
		CityByName,
		CityByNameVariables
	>(queryWithVariable, {
		variables: { ['name']: city }
		//variables: { ['name']: city, ['config']: { ['units']: 'metric' } }

		//to getCityByName.ts
		//query CityByName($name: String!, $config: Charachter) {
		//	getCityByName(name: $name, config: $config) {
	});
>>>>>>> ede293e1bc06dde63a633e32cd4eb23fa0d8ffcb

	const { data, loading, error, refetch } = useQuery<any>(
		//<		CityByName,
		//	CityByNameVariables>
		queryWithVariable,
		{
			variables: { ['name']: city }
		}
	);

	if (error) {
		return <div>Error: </div>;
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
					<DailyWrapper
						summary={data?.getCityByName?.weather?.summary}
						temperature={data?.getCityByName?.weather?.temperature}
						wind={data?.getCityByName?.weather?.wind}
					/>
				</div>
			</>
		);
	}
};
