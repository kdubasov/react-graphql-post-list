import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloConnect = new ApolloClient({
    uri: 'http://localhost:5172',
    cache: new InMemoryCache(),
});