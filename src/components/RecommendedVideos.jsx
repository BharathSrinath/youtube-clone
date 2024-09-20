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
        className="flex flex-col w-full m-2 p-2 lg:m-1 lg:p-2 xl:w-[90%] xl:flex-row xl:h-28 cursor-pointer py-2"
        to={"/watch?v=" + video.id}
        key={video.id}
      >
        <img
          className="xl:h-24 rounded-lg mr-2"
          src={thumbnails?.maxres?.url}
          alt="video thumbnail"
        />
        <div className="xl:grid xl:grid-flow-row ">
          <p className="font-bold hidden lg:block xl:row-span-8 overflow-hidden text-ellipsis">
            {title}
          </p>
          <p className="hidden xl:block text-gray-500 xl:row-span-2">
            {channelTitle}
          </p>
          <p className="hidden xl:block text-gray-500 xl:row-span-2">
            {formatNumber(statistics?.viewCount)} views{" "}
            <span className="font-extrabold">{" . "}</span>
            {formatTime(snippet.publishedAt)}
          </p>
        </div>
      </Link>
    );
  });

  return <div className="grid grid-cols-1 sm:grid-cols-2 sm:m-4 lg:block lg:m-0">{renderedVideos}</div>;
};

export default RecommendedVideos;
