"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8001/graphql",
  cache: new InMemoryCache(),
});

export default client;

