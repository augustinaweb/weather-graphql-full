import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://open-weather-map-graphql.herokuapp.com/'
	}),
	cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
);
