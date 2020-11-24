import React from "react";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	uri: "http://localhost:1337/graphql"
});

const ApolloWrapper = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;