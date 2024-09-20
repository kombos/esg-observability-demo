import React from "react";
import { BsFillStarFill } from "react-icons/bs";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="stars">
      {React.Children.toArray(
        [...Array(5)].map((_, index) => (
          <span className={index < rating ? "active" : ""}>
            <BsFillStarFill />
          </span>
        )),
      )}
    </div>
  );
};
