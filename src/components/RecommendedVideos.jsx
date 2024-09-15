import React from "react";
import { formatNumber } from "../utils/formatNumber_IND";
import { formatTime } from "../utils/formatTime";
import useFetchVideos from "../hooks/useFetchVideos";
import { Link } from "react-router-dom";

const RecommendedVideos = () => {
  const videos = useFetchVideos();

  const renderedVideos = videos.map((video) => {
    const { snippet, statistics } = video;
    const { channelTitle, title, thumbnails } = snippet;

    return (
      <Link
        className="flex w-full h-28 cursor-pointer py-2"
        to={"/watch?v=" + video.id}
        key={video.id}
      >
        <img
          className="h-24 rounded-lg mr-2"
          src={thumbnails?.maxres?.url}
          alt="video thumbnail"
        />
        <div className="grid grid-flow-row">
          <p className="font-bold row-span-8 overflow-hidden">{title}</p>
          <p className="text-gray-500 row-span-2">{channelTitle}</p>
          <p className="text-gray-500 row-span-2">
            {formatNumber(statistics?.viewCount)} views{" "}
            <span className="font-extrabold">{" . "}</span>
            {formatTime(snippet.publishedAt)}
          </p>
        </div>
      </Link>
    );
  });

  return <div>{renderedVideos}</div>;
};

export default RecommendedVideos;
