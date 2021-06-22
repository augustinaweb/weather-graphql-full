import { gql } from '@apollo/client';

export const queryWithVariable = gql`
	query CityByName($name: String!) {
		getCityByName(name: $name) {
			daily {
				dt
				sunrise
				sunset
				temp {
					day
					night
				}
				humidity
				wind_speed
				weather {
					description
					icon
				}
			}
		}
	}
`;
