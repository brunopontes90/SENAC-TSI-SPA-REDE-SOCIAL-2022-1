import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://tops-doberman-55.hasura.app/v1/graphql",
    headers: { 'x-hasura-admin-secret' : 'vfSGvhIoqBYKc1cWToVhF5SLBO1Z7zohEB7DT1KDd7yIfsSKgOqfoaWQ5LlgOIBS' },
    cache: new InMemoryCache()
});

export default client;