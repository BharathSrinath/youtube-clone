import React from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const ButtonList = () => {
  const genre = [
    "All",
    "Music",
    "Movies",
    "Sports",
    "Fashion",
    "Education",
    "Coding",
    "Podcasts",
    "News",
    "Technology",
    "Travel",
    "Fitness",
    "Food",
  ];

  return (
    <div className="flex">
      {genre.map((item) => (
        <Button key={uuidv4()} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
