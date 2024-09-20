import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatNumber } from "../utils/formatNumber_IND";
import likeIcon from "../assets/like-svgrepo-com.svg";
import dislikeIcon from "../assets/dislike-svgrepo-com.svg";
import dropdown from "../assets/three-dots-line-svgrepo-com.svg";
import shareIcon from "../assets/share-svgrepo-com.svg";
import Comments from "./Comments";
import RecommendedVideos from "./RecommendedVideos";
import VideoDescription from "./VideoDescription";
import useFetchVideosById from "../hooks/useFetchVideosById";
import { closeSidebar } from "../store/slices/SideBarSlice";

const WatchVideoPage = () => {

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const {video, channel} = useFetchVideosById(videoId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  })

  return video && channel && (
    <div className="w-11/12 mx-auto mt-3 flex ">
      <div className="xl:w-3/5 lg:w-[70%]">
        <iframe
          // src={`https://www.youtube.com/embed/${videoId}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          // autoplay was doesnt work in most modern browsers unless the video is set to mute. But the way can be used to make the video play.
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl w-full aspect-video"
        ></iframe>
        <div className="my-1">
          {video && channel && (
            <div>
              <p className=" p-2 font-bold text-lg ">{video?.snippet?.title}</p>
              <div className="hidden sm:grid sm:grid-cols-12 sm:items-center">
                <div className="flex justify-start col-span-3">
                  <img
                    className="w-12 h-12 rounded-full mr-2"
                    src={channel?.snippet?.thumbnails?.default?.url}
                    alt="channel logo"
                  />
                  <div>
                    <p className="overflow-hidden whitespace-nowrap text-ellipsis max-w-28 font-bold">
                      {video?.snippet?.channelTitle}
                    </p>
                    <p className="text-sm text-gray-600">
                      {formatNumber(channel?.statistics?.subscriberCount)}{" "}
                      subscribers
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center col-span-3">
                  <button className="h-8 p-4 font-bold bg-neutral-900 text-white rounded-l-full rounded-r-full flex justify-center items-center">
                    Subscribe
                  </button>
                </div>
                <div className="flex bg-gray-200 rounded-full p-2 m-2 justify-around col-span-3">
                  <button className="flex">
                    <img
                      className="w-6 h-6 mr-1"
                      src={likeIcon}
                      alt="like button"
                    />
                    <p>{formatNumber(video.statistics.likeCount)}</p>
                  </button>
                  <button>
                    <img
                      className="w-6 h-6"
                      src={dislikeIcon}
                      alt="dislike buttom"
                    />
                  </button>
                </div>
                <div className="flex bg-gray-200 rounded-full p-2 m-2 col-span-2">
                  <button className="bg-gray-200 flex">
                    <img
                      className="w-6 h-6 mr-2"
                      src={shareIcon}
                      alt="share button"
                    />
                    <p className="font-medium">Share</p>
                  </button>
                </div>
                <div className="flex bg-gray-200 rounded-full p-2 m-2 justify-center items-center col-span-1">
                  <button className="bg-gray-200">
                    <img
                      className="w-6 h-6"
                      src={dropdown}
                      alt="dropdown button"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {video && <VideoDescription video={video} />}
        <div className="lg:hidden ">
          <RecommendedVideos />
        </div>
        {video && <Comments video={video} />}
      </div>
      <div className="hidden lg:block xl:w-2/5 lg:w-[30%] mx-4">
        <RecommendedVideos />
      </div>
    </div>
  )
};

export default WatchVideoPage;
