import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/slices/SideBarSlice";
import { useSearchParams } from "react-router-dom";
import {
  YOUR_PROJECT_CREDENTIAL_API_KEY,
  YOUTUBE_VIDEO_BY_ID_API,
  YOUTUBE_CHANNEL_BY_ID_API,
} from "../utils/constants";
import { formatNumber } from "../utils/formatNumber_IND";
import likeIcon from "../assets/like-svgrepo-com.svg";
import dislikeIcon from "../assets/dislike-svgrepo-com.svg";
import dropdown from "../assets/three-dots-line-svgrepo-com.svg";
import shareIcon from "../assets/share-svgrepo-com.svg";

const WatchVideoPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams;
  // We are just trying to read searchParams. So we do not need a setter function here.
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState(null);

  const dispatch = useDispatch();

  const fetchVideo = useCallback(async () => {
    const videoData = await fetch(
      YOUTUBE_VIDEO_BY_ID_API + videoId + YOUR_PROJECT_CREDENTIAL_API_KEY
    );
    const jsonVideoData = await videoData.json();

    const channelId = jsonVideoData?.items[0]?.snippet?.channelId;
    const channelData = await fetch(
      YOUTUBE_CHANNEL_BY_ID_API + channelId + YOUR_PROJECT_CREDENTIAL_API_KEY
    );
    const jsonChannelData = await channelData?.json();

    setVideo(jsonVideoData?.items[0]);
    setChannel(jsonChannelData?.items[0]);

    console.log(jsonVideoData);
  }, [videoId]);

  useEffect(() => {
    dispatch(closeSidebar());
    fetchVideo();
  }, [dispatch, fetchVideo]);

  return (
    <div className="w-4/5 mx-auto mt-3">
      <div className="w-[70%]">
        <iframe
          width="675"
          height="400"
          // src={`https://www.youtube.com/embed/${videoId}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          // autoplay was doesnt work in most modern browsers unless the video is set to mute. But the way can be used to make the video play.
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
        <div className="w-[90%] mt-1">
          {video && channel && (
            <div>
              <p className=" p-2 font-bold text-lg">{video?.snippet?.title}</p>
              <div className="grid grid-cols-[30%_18%_25%_17%_10%] items-center">
                <div className="flex justify-start">
                  <img
                    className="w-12 h-12 rounded-full mr-2"
                    src={channel?.snippet?.thumbnails?.default?.url}
                    alt="channel logo"
                  />
                  <div>
                    <p className="font-bold">{video?.snippet?.channelTitle}</p>
                    <p className="text-sm text-gray-600">
                      {formatNumber(channel?.statistics?.subscriberCount)}{" "}
                      subscribers
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className="h-8 p-4 font-bold bg-neutral-900 text-white rounded-l-full rounded-r-full flex justify-center items-center">
                    Subscribe
                  </button>
                </div>
                <div className="flex bg-gray-200 rounded-full p-2 m-2 justify-around">
                  <button className="flex">
                    <img className="w-6 h-6 mr-1" src={likeIcon} alt="like button" />
                    <p>{video.statistics.likeCount}</p>
                  </button>
                  <button>
                    <img
                      className="w-6 h-6"
                      src={dislikeIcon}
                      alt="dislike buttom"
                    />
                  </button>
                </div>
                <div className="flex bg-gray-200 rounded-full p-2 m-2">
                  <button className="bg-gray-200 flex">
                    <img
                      className="w-6 h-6 mr-2"
                      src={shareIcon}
                      alt="share button"
                    />
                    <p className="font-medium">Share</p>
                  </button>
                </div>
                <div className="flex bg-gray-200 rounded-full p-2 m-2 justify-center items-center">
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
      </div>
      <div></div>
    </div>
  );
};

export default WatchVideoPage;
