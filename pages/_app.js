import { ApolloProvider } from "@apollo/client";
import Page, { theme, Fonts } from "../components/Page";
import withData from "../lib/withData";
import { CartProvider } from "../lib/cartContext";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
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
