import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home from "../assets/home-svgrepo-com.svg";
import shorts from "../assets/shorts-svgrepo-com.svg";
import subscriptions from "../assets/subscriptions-svgrepo-com.svg";
import yourChannel from "../assets/channel-svgrepo-com.svg";
import history from "../assets/history-svgrepo-com.svg";
import playlists from "../assets/playlist-svgrepo-com.svg";
import yourVideos from "../assets/yourvideos-svgrepo-com.svg";
import watchLater from "../assets/watchlater-svgrepo-com.svg";
import likedVideos from "../assets/like-svgrepo-com.svg";
import yourClips from "../assets/cut-svgrepo-com.svg";
import trending from "../assets/trending-svgrepo-com.svg";
import shopping from "../assets/shopping-bag-svgrepo-com.svg";
import music from "../assets/music-note-svgrepo-com.svg";
import films from "../assets/film-svgrepo-com.svg";
import live from "../assets/live-svgrepo-com.svg";
import gaming from "../assets/gaming-svgrepo-com.svg";
import news from "../assets/news-svgrepo-com.svg";
import sport from "../assets/sport-svgrepo-com.svg";
import courses from "../assets/light-svgrepo-com.svg";
import fashion from "../assets/fashion-svgrepo-com.svg";
import podcasts from "../assets/podcast-2-svgrepo-com.svg";
import youtubePremium from "../assets/youtube-premium-svgrepo-com.svg";
import youtubeStudio from "../assets/youtube-studio-svgrepo-com.svg";
import youtubeMusic from "../assets/youtube-music-svgrepo-com.svg";
import youtubeKids from "../assets/youtube-kids-svgrepo-com.svg";
import settings from "../assets/settings-cog-svgrepo-com.svg";
import reportHistory from "../assets/report-history-svgrepo-com.svg";
import help from "../assets/help-svgrepo-com.svg";
import sendFeedback from "../assets/feedback-svgrepo-com.svg";

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);

  if (!isSideBarOpen) return null;

  return (
    <div className="m-4">
      <ul className="p-2">
        <div className="flex p-1 items-center">
          <img className="w-6 h-6 mr-1" src={home} alt="home logo" />
          <Link to="/">
            <li className="p-1 mr-1">Home</li>
          </Link>
        </div>
        <div className="flex p-1 items-center">
          <img className="w-6 h-6 mr-1" src={shorts} alt="shorts logo" />
          <li className="p-1 mr-1"> Shorts</li>
        </div>
        <div className="flex p-1 items-center">
          <img
            className="w-6 h-6 mr-1"
            src={subscriptions}
            alt="subscriptions logo"
          />
          <li className="p-1 mr-1"> Subscriptions</li>
        </div>
        <hr className="w-[90%]" />
      </ul>
      <ul className="p-2">
        <h2 className="p-1 font-bold">You</h2>
        <div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={yourChannel}
              alt="your channel logo"
            />
            <li className="p-1 mr-1"> Your channel</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={history} alt="history logo" />
            <li className="p-1 mr-1"> History</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={playlists} alt="playlists logo" />
            <li className="p-1 mr-1">Playlists</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={yourVideos} alt="your videos logo" />
            <li className="p-1 mr-1"> Your videos</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={watchLater} alt="watch later logo" />
            <li className="p-1 mr-1"> Watch Later</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={likedVideos} alt="liked video logo" />
            <li className="p-1 mr-1"> Liked videos</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={yourClips}
              alt="your clips logo"
            />{" "}
            <li className="p-1 mr-1">Your clips</li>
          </div>
        </div>
        <hr className="w-[90%]" />
      </ul>
      <ul className="p-2">
        <h2 className="p-1 font-bold">Explore</h2>
        <div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={trending} alt="trending logo" />
            <li className="p-1 mr-1"> Trending</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={shopping} alt="shopping logo" />
            <li className="p-1 mr-1">Shopping</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={music} alt="music logo" />
            <li className="p-1 mr-1"> Music</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={films} alt="films logo" />
            <li className="p-1 mr-1"> Films</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={live} alt="live logo" />
            <li className="p-1 mr-1"> Live</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={gaming} alt="gaming logo" />
            <li className="p-1 mr-1"> Gaming</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={news} alt="news logo" />
            <li className="p-1 mr-1"> News</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={sport} alt="sports logo" />
            <li className="p-1 mr-1"> Sport</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={courses} alt="courses logo" />{" "}
            <li className="p-1 mr-1">Courses</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={fashion}
              alt="fashion and beauty logo"
            />
            <li className="p-1 mr-1"> Fashion& beauty</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={podcasts} alt="podcasts logo" />{" "}
            <li className="p-1 mr-1">Podcasts</li>
          </div>
          <hr className="w-[90%]" />
        </div>
      </ul>
      <ul className="p-2">
        <p className="p-1 font-bold">More from YouTube</p>
        <div>
          <div className="flex p-1 items-center">
            {" "}
            <img
              className="w-6 h-6 mr-1"
              src={youtubePremium}
              alt="youtube premium logo"
            />
            <li className="p-1 mr-1"> YouTube Premium</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={youtubeStudio}
              alt="youtube studio logo"
            />
            <li className="p-1 mr-1"> YouTube Studio</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={youtubeMusic}
              alt="youtube music logo"
            />
            <li className="p-1 mr-1"> YouTube Music</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={youtubeKids}
              alt="youtube kids logo"
            />
            <li className="p-1 mr-1"> YouTube Kids</li>
          </div>
          <hr className="w-[90%]" />
        </div>
      </ul>
      <ul className="p-2">
        <div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={settings} alt="settings logo" />
            <li className="p-1 mr-1">Settings</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={reportHistory}
              alt="report history logo"
            />
            <li className="p-1 mr-1"> Report history</li>
          </div>
          <div className="flex p-1 items-center">
            <img className="w-6 h-6 mr-1" src={help} alt="help logo" />
            <li className="p-1 mr-1"> Help</li>
          </div>
          <div className="flex p-1 items-center">
            <img
              className="w-6 h-6 mr-1"
              src={sendFeedback}
              alt="send feedback logo"
            />
            <li className="p-1 mr-1"> Send feedback</li>
          </div>
          <hr className="w-[90%]" />
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
