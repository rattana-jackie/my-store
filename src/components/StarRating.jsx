import { useState } from "react";
import { FiveStar, FourStar, OneStar, TreeStar, TwoStar } from "./Stars";

const StarRating = ({ star }) => {
  if (star >= 1 && star < 2) return <OneStar />;
  if (star >= 2 && star < 3) return <TwoStar />;
  if (star >= 3 && star < 4) return <TreeStar />;
  if (star >= 4 && star < 5) return <FourStar />;
  if (star >= 5) return <FiveStar />;
  return <p>No rating yet</p>;
};

export default StarRating;
