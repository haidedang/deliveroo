/* /pages/_app.js */

import Layout from "../components/Layout";
import AppProvider from "../components/Context/AppProvider";
import App, { Container } from "next/app";
import React from "react";
import withApollo from "next-with-apollo";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import "../styles/index.css";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo, isAuthenticated, ctx } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <AppProvider>
          <Layout isAuthenticated={isAuthenticated} {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
        <style jsx global>
          {`
            a {
              color: white !important;
            }
            a:link {
              text-decoration: none !important;
              color: white !important;
            }
            a:hover {
              color: white;
            }
            .card {
              display: inline-block !important;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </ApolloProvider>
    );
  }
}
//export default withData(MyApp);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(MyApp);
