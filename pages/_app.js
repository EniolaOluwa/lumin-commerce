import { ApolloProvider } from "@apollo/client";
import Page from "../components/Page";
import withData from "../lib/withData";
import { CartProvider } from "../lib/cartContext";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartProvider>
    </ApolloProvider>
  );
}

export default withData(MyApp);
