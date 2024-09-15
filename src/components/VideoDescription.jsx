import React, { useState } from "react";
import { formatNumber } from "../utils/formatNumber_IND";
import { formatTime } from "../utils/formatTime";

const VideoDescription = ({ video }) => {
  const description = video?.snippet?.localized?.description || "";

  const [showFullDescription, setShowFullDescription] = useState(false);

  const CHARACTER_LIMIT = 100;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="whitespace-pre-wrap bg-gray-100 rounded-md p-2">
      {/* whitespace-pre-wrap allows you to preserve the original spacing, tabs, and line breaks while still wrapping text to fit within the container. */}
      <div className="grid grid-flow-col max-w-48 font-bold">
        <p className="">
          {formatNumber(video?.statistics?.viewCount) + " views"}
        </p>
        <p>{formatTime(video?.snippet?.publishedAt)}</p>
      </div>
      <div>
        <p>
          {showFullDescription ? description
            : description.slice(0, CHARACTER_LIMIT) +
              (description.length > CHARACTER_LIMIT ? "..." : "")}
        </p>
        {description.length > CHARACTER_LIMIT && (
          <button onClick={toggleDescription} className="font-bold text-sm">
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoDescription;
