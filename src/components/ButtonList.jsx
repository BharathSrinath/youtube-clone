import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import leftSliderButton from '../assets/lesser-than-svgrepo-com.svg'
import rightSliderButton from '../assets/greater-than-svgrepo-com.svg'

const ButtonList = () => {
  const genres = [
    "All",
    "Music",
    "Movies",
    "Sports",
    "Fashion",
    "Education",
    "Podcasts",
    "News",
    "Technology",
    "Travel",
    "Fitness",
    "Food",
    "Gaming",
    "Comedy",
    "Health",
    "Lifestyle",
    "DIY",
    "Vlogs",
    "Animals",
    "Science",
    "Business",
    "History",
    "Animation",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? genres.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === genres.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-between w-[95%] mx-auto my-2 z-0">
      {currentIndex === 0 ? "" : <img src={leftSliderButton} alt="left click slider" onClick={handlePrev} className="w-4 h-4  rounded-full cursor-pointer m-2"></img>}
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
          {genres.map((genre) => (
            <Button key={uuidv4()} name={genre} />
          ))}
        </div>
      </div>
      {genres.length/7 <= currentIndex ? "" : <img src={rightSliderButton} alt="right click slider" onClick={handleNext} className="w-4 h-4 rounded-full cursor-pointer m-2"></img>}
    </div>
  );
};
// genres.length/7 <= currentIndex - This condition is a rough calculation. It will fail if the length or number of words in genres list is big or small. I
export default ButtonList;
