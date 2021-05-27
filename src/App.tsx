import React, { useEffect, useState } from "react";
import "./app.css";
import { DailyWrapper } from "./DailyWrapper";
import { DailyIcon } from "./DailyIcon";
import { getWeatherForCity, queryWithVariable } from "./queries/getCityByName";
import { ApolloError, useQuery } from "@apollo/client";
import { CityByName } from "./queries/types/CityByName";

export const App: React.FC = () => {
	const [city, setCity] = useState("Vilnius");
	const [errors, setErrors] = useState<ApolloError | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const [weatherData, setWeatherData] =
		useState<CityByName | undefined>(undefined);
	const { data, loading, error, refetch } = useQuery<CityByName>(
		getWeatherForCity(city)
	);

	//const { data, loading, error, refetch } = useQuery<CityByName>(
	//	queryWithVariable,
	//	{
	//		variables: { ["city"]: city }
	//	}
	//);
	console.log({ data, loading, error });

	useEffect(() => {
		setErrors(error);
		setIsLoading(!loading);
		setWeatherData(data);
	}, [city]);

	//  https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/

	if (errors) {
		return <div>Error: </div>;
	} else if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className="app">
					{console.log({ errors, isLoading, data })}
					<h1>Another lovely day in </h1>
					<input
						onBlur={(e) => setCity(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								setCity((e.target as HTMLInputElement).value);
								refetch();
							}
						}}
						placeholder={city}
						className="city-name"
					></input>
					<DailyIcon
						summary={data?.getCityByName?.weather?.summary}
						temperature={data?.getCityByName?.weather?.temperature}
						wind={data?.getCityByName?.weather?.wind}
					/>

					{/*<DailyWrapper daily={weatherData} />*/}
				</div>
			</>
		);
	}
};
