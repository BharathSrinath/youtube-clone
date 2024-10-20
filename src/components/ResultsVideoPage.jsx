import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_SEARCH_BY_QUERY,
  YOUR_PROJECT_CREDENTIAL_API_KEY,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../store/slices/SideBarSlice";
import ResultsVideo from "./ResultsVideo";
import { handleResize } from "../utils/handleResize";

const ResultsVideoPage = () => {

  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const videosData = await fetch(
      YOUTUBE_SEARCH_BY_QUERY + searchQuery + YOUR_PROJECT_CREDENTIAL_API_KEY
    );
    const jsonVideosData = await videosData.json();
    setVideos(jsonVideosData.items);
  }

  useEffect(() => {
    handleResize(isSideBarOpen, dispatch, openSidebar, closeSidebar);
    fetchVideos();
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className="w-full sm:w-11/12 sm:mx-auto md:w-4/5 xl:w-[70%]">
      {videos.map((video , index) => {
        return (
          <ResultsVideo key={video.id.videoId || index} videoId={video.id.videoId}/>
        );
      })}
    </div>
  );
};

export default ResultsVideoPage;
