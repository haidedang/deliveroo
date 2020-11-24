/* components/RestaurantList/index.js */
import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import RestaurantCard from "../Core/RestaurantCard";

const RestaurantList = (
  { data: { loading, error, restaurants }, search },
  req
) => {
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (restaurants && restaurants.length) {
    console.log(restaurants);
    //searchQuery
    const searchQuery = restaurants.filter((query) => {
      console.log("inside the function", query.name);
      console.log("search term ", search);
      return query.name.includes(search);
    });
    console.log(searchQuery);
    if (searchQuery.length != 0) {
      return (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {searchQuery.map((res) => (
              <RestaurantCard
                imageUrl={`http://localhost:1337${res.image.url}`}
                headerCaption={res.name}
                description={res.description}
                id="1"
              ></RestaurantCard>
            ))}
          </div>

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </div>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h1>Loading</h1>;
};

const query = gql`
  {
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
RestaurantList.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
  props: ({ data }) => ({
    data,
  }),
})(RestaurantList);
