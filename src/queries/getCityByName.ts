import { gql } from '@apollo/client';

export const queryWithVariable = gql`
	query CityByName($name: String!) {
		getCityByName(name: $name) {
<<<<<<< HEAD
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
=======
			weather {
				summary {
>>>>>>> ede293e1bc06dde63a633e32cd4eb23fa0d8ffcb
					description
					icon
				}
			}
		}
	}
`;
