import { useState, useEffect } from "react";
import {
  YOUTUBE_POPULAR_VIDEOS_API,
  YOUR_PROJECT_CREDENTIAL_API_KEY,
} from "../utils/constants";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(
      YOUTUBE_POPULAR_VIDEOS_API + YOUR_PROJECT_CREDENTIAL_API_KEY
    );
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return videos;
  
};

export default useFetchVideos;
