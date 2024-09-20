import React from "react";
import useFetchVideosById from "../hooks/useFetchVideosById";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber_IND";
import { formatTime } from "../utils/formatTime";

const ResultsVideo = ({ videoId }) => {
  // When you search, both channels and videos are displayed in the result
  // We are ignoring the channels

  const { video } = useFetchVideosById(videoId);

  let isVideo = false;

  if (video) isVideo = video.kind === "youtube#video";

  return (
    <div>
      {/* Rendering videos  */}
      {isVideo && (
        <>
          <Link
            className="flex flex-col sm:flex-row md:h-[50vh] cursor-pointer p-2 m-2 "
            to={"/watch?v=" + video.id}
            key={video.id}
          >
            <img
              className="w-full sm:w-1/2 rounded-lg m-2"
              src={video?.snippet?.thumbnails?.high?.url}
              alt="video thumbnail"
            />
            <div className="w-full sm:w-1/2 h-1/4 m-2">
              <p className="font-bold">{video?.snippet?.title}</p>
              <p className="text-gray-500">
                {formatNumber(video?.statistics?.viewCount)} views{" "}
                <span className="font-extrabold">{" . "}</span>
                {formatTime(video?.snippet?.publishedAt)}
              </p>
              <p className="text-gray-500">{video?.snippet?.channelTitle}</p>
              <p className="hidden md:block text-gray-500">
                {video?.snippet?.description
                  ? video.snippet.description.slice(0, 100) + "..."
                  : ""}
              </p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default ResultsVideo;
