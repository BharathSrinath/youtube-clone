import { useState, useEffect, useCallback } from "react";
import {
  YOUTUBE_CHANNEL_BY_ID_API,
  YOUTUBE_VIDEO_BY_ID_API,
  YOUR_PROJECT_CREDENTIAL_API_KEY,
} from "../utils/constants";

const useFetchVideosById = (videoId) => {

    const [video, setVideo] = useState(null);
    const [channel, setChannel] = useState(null);
  
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
    }, [videoId]);
  
    useEffect(() => {
      if(videoId){
        fetchVideo();
      }
      // eslint-disable-next-line
    }, [fetchVideo]);

  return {video, channel};
  
};

export default useFetchVideosById;
