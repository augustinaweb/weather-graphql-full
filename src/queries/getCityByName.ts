import { gql } from "@apollo/client";

export const getWeatherForCity = (city: string) => {
	const query = gql`
		query CityByName {
			getCityByName(name: "${city}") {
				weather {
					summary {
						description
						title
						icon
					}
					temperature {
						actual
					}
					wind {
						speed
					}
				}
			}
		}
	`;
	return query;
};

export const queryWithVariable = gql`
	query CityByName($city: string!) {
		getCityByName(city: $city) {
			weather {
				summary {
					description
					title
					icon
				}
				temperature {
					actual
				}
				wind {
					speed
				}
			}
		}
	}
`;
