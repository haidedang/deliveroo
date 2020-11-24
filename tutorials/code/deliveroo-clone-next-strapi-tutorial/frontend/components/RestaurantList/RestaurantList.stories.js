
import { withApolloClient } from 'storybook-addon-apollo-client';
import RestaurantList from './index'
import { useQuery, gql } from '@apollo/client';
import { ApolloProvider } from "react-apollo";
import { graphql } from "react-apollo";
import ApolloClient, { InMemoryCache } from 'apollo-boost';



const userQuery = gql`
  query getRestaurants{
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

export default {
  title: 'Components/RestaurantList',
  decorators: [story => <ApolloProvider client={client} >{story()}</ApolloProvider>],
}

export const Restaurants = () => <RestaurantList search=""/>

