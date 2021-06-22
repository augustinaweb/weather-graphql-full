module.exports = {
	client: {
		service: {
			name: 'WeatherGQL',
			uri: 'https://open-weather-map-graphql.herokuapp.com/'
		},
		includes: ['./src/queries/*.ts']
	}
};
