import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useFetchVideos from "../hooks/useFetchVideos";

const VideoContainer = ({ info }) => {

 const videos = useFetchVideos();

  return (
    <div className="grid grid-cols-3">
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
