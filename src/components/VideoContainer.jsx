import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useFetchVideos from "../hooks/useFetchVideos";

const VideoContainer = ({ info }) => {

 const videos = useFetchVideos();

  return (
    <div className="w-[95%] md:grid md:w-full md:grid-cols-2 lg:grid-cols-3 lg:w-full">
      {videos.map((videoInfo) => {
        return (
          <Link key={videoInfo.id} to={"/watch?v=" + videoInfo.id}>
            <VideoCard info={videoInfo} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
