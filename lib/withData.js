import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { development, production } from "../config";
import withApollo from "next-with-apollo";

const createClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NODE_ENV === "development" ? development : production,
  });
};

export default withApollo(createClient, { getDataFromTree });
