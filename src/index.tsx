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
<<<<<<< HEAD
		uri: 'https://open-weather-map-graphql.herokuapp.com/'
=======
		uri: 'https://graphql-weather-api.herokuapp.com/'
>>>>>>> ede293e1bc06dde63a633e32cd4eb23fa0d8ffcb
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
