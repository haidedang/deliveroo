import "../styles/index.css";

/* const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

let pageProps = {};

const GlobalWrapper = (storyFn) => (
  <ApolloProvider client={client}>
    <Container>
      <AppProvider>
        <Layout isAuthenticated={true} {...pageProps}>
          {storyFn()}
        </Layout>
      </AppProvider>
    </Container>
  </ApolloProvider>
);

addDecorator(GlobalWrapper); */

/* addDecorator((storyFn) => (
  <RouterContext.Provider
    value={{
      pathname: "/",
      basePath: "",
      push: (url, as) => {
        if (as) linkTo("Routes", as !== "/" ? startCase(as) : "Index")();
        return Promise.resolve(true);
      },
      replace: (url, as) => {
        if (as) linkTo("Routes", as !== "/" ? startCase(as) : "Index")();
        return Promise.resolve(true);
      },
      reload: () => {},
      prefetch: () => {},
    }}
  >
    {storyFn()}
  </RouterContext.Provider>
));
 */

/* import React from 'react'
import {addDecorator, configure} from '@storybook/react'; 
import ApolloWrapper from "../lib/provider"


configure(require.context("../components", true, /\.stories\.js$/), module );

const GlobalWrapper = storyFn => (
  <ApolloWrapper>
    {storyFn()}
  </ApolloWrapper>

)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}

addDecorator(GlobalWrapper) */
