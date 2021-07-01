import { ApolloProvider } from "@apollo/client";
import Page from "../components/Page";
import withData from "../lib/withData";
import { CartProvider } from "../lib/cartContext";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apollo}>
        <CartProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CartProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default withData(MyApp);
