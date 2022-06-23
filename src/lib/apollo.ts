import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pj0o5v22wa01z493653liw/master',
    cache: new InMemoryCache()
})