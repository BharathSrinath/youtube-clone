import React from "react";
import useFetchVideosById from "../hooks/useFetchVideosById";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber_IND";
import { formatTime } from "../utils/formatTime";

const ResultsVideo = ({ videoId }) => {
  // When you search, both channels and videos are displayed in the result

  const { video, channel } = useFetchVideosById(videoId);

  let isVideo = false;
  let isChannel = false;

  console.log(channel);

  if (video && channel) {
    isVideo = video.kind === "youtube#video";
    isChannel = channel.kind === "youtube#channel";
  }

  return (
    <div>
      {/* Rendering videos  */}
      {isVideo && (
        <>
          <Link
            className="flex w-11/12 h-[50vh] cursor-pointer p-4 m-2 "
            to={"/watch?v=" + video.id}
            key={video.id}
          >
            <img
              className="w-1/2 rounded-lg m-2"
              src={video?.snippet?.thumbnails?.high?.url}
              alt="video thumbnail"
            />
            <div className="w-1/2 h-1/4 m-2">
              <p className="font-bold">
                {video?.snippet?.title}
              </p>
              <p className="text-gray-500">
                {formatNumber(video?.statistics?.viewCount)} views{" "}
                <span className="font-extrabold">{" . "}</span>
                {formatTime(video?.snippet?.publishedAt)}
              </p>
              <p className="text-gray-500">
                {video?.snippet?.channelTitle}
              </p>
              <p className="text-gray-500">
                {video?.snippet?.description
                  ? video.snippet.description.slice(0, 100) + "..."
                  : ""}
              </p>
            </div>
          </Link>
        </>
      )}
      {isChannel && (
        <>
          {/* Rendering channels */}
          <div
            className="flex w-11/12 h-[25vh] cursor-pointer p-4 m-2"
            key={channel?.id}
          >
            <div className="w-1/2 mr-2 flex justify-center items-center">
            <img
              className="w-1/2 h-8/12 rounded-full"
              src={channel?.snippet?.thumbnails?.high?.url}
              alt="video thumbnail"
            />
            </div>
            <div className="w-1/2 h-1/4 m-2">
              <p className="font-bold">
                {channel?.snippet?.localized?.title}
              </p>
              <p className="text-gray-500">
                {channel?.snippet?.customUrl}
              </p>
              <p className="text-gray-500">
                {formatNumber(channel?.statistics?.subscriberCount)}
                {" subcribers"}
              </p>
              <p className="text-gray-500">
                {channel?.snippet?.description
                  ? channel.snippet.description.slice(0, 100) + "..."
                  : ""}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsVideo;
