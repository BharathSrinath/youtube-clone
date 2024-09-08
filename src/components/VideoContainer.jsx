import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API, YOUR_PROJECT_CREDENTIAL_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API + YOUR_PROJECT_CREDENTIAL_API_KEY);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };
  return (
    <div  className="grid grid-cols-3 mx-auto">
      {videos.map((videoInfo) => (
        <Link
          key={videoInfo.id}
          to={"/watch?v=" + videoInfo.id}
        >
          <VideoCard info={videoInfo} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
