import React from "react";
import RestaurantCard from "./RestaurantCard";

export default {
  title: "Components/RestaurantCard",
  component: RestaurantCard,
};

export const RestaurantCards = () => (
  <RestaurantCard
    imageUrl="http://localhost:1337/uploads/376ac89fa1f046f79b2a8d0c3f8cbbd3.gif"
    headerCaption="Great Meal"
    description="WOW FINNALLY THAT SHIT ROCKS"
    id="1"
  ></RestaurantCard>
);
