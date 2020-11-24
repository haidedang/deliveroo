import React from "react";
import CustomLink from "../../lib/CustomLink";

const RestaurantCard = (props) => {
  return (
    <CustomLink
      as={`/restaurants/${props.id}`}
      href={`/restaurants/${props.id}`}
      prefetch={false}
    >
      <div className="bg-white shadow border rounded-lg overflow-hidden">
        {/* ----- CardHeader ------ */}

        <div className=" relative bg-red-500 pb-2/3">
          <img className=" absolute h-full w-full" src={props.imageUrl}></img>
        </div>

        {/* Card Body  */}

        <h4 className="mt-3 ml-2 mb-0 pb-0 font-semibold text-lg truncate leading-tight ">
          {props.headerCaption}
        </h4>
        <p className="ml-2 mt-1">{props.description}</p>
      </div>
    </CustomLink>
  );
};

export default RestaurantCard;
