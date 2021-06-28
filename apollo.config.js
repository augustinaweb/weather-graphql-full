module.exports = {
	client: {
		service: {
			name: 'WeatherGQL',
			url: 'https://open-weather-map-graphql.herokuapp.com/'
		},
		includes: ['./src/queries/*.ts']
	}
};
