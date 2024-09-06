import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isSideBarOpen =  useSelector((store) => store.sideBar.isSideBarOpen);
  
  if(!isSideBarOpen) return null;

  return (
    <div className="col-span-1 m-2 p-2">
      <ul id="sideBarHeader">
        <Link to="/"><li className="p-1">Home</li></Link>
        <li className="p-1">Shorts</li>
        <li className="p-1">Subscriptions</li>
        <hr className="w-2/3"/>
      </ul>
      <ul>
        <h2 className="p-1 font-bold">You</h2>
        <div>
          <li className="p-1">Your channel</li>
          <li className="p-1">History</li>
          <li className="p-1">Playlists</li>
          <li className="p-1">Your videos</li>
          <li className="p-1">Watch Later</li>
          <li className="p-1">Liked videos</li>
          <li className="p-1">Your clips</li>
        </div>
        <hr className="w-2/3"/>
      </ul>
      <ul>
        <h2 className="p-1 font-bold">Subscriptions</h2>
        <hr className="w-2/3"/>
      </ul>
      <ul>
        <h2 className="p-1 font-bold">Explore</h2>
        <div>
          <li className="p-1">Trending</li>
          <li className="p-1">Shopping</li>
          <li className="p-1">Music</li>
          <li className="p-1">Films</li>
          <li className="p-1">Live</li>
          <li className="p-1">Gaming</li>
          <li className="p-1">News</li>
          <li className="p-1">Sport</li>
          <li className="p-1">Courses</li>
          <li className="p-1">Fashion& beauty</li>
          <li className="p-1">Podcasts</li>
          <hr className="w-2/3"/>
        </div>
      </ul>
      <ul>
        <p className="p-1 font-bold">More from YouTube</p>
        <div>
          <li className="p-1">YouTube Premium</li>
          <li className="p-1">YouTube Studio</li>
          <li className="p-1">YouTube Music</li>
          <li className="p-1">YouTube Kids</li>
          <hr className="w-2/3"/>
        </div>
      </ul>
      <ul>
        <li className="p-1">Settings</li>
        <li className="p-1">Report history</li>
        <li className="p-1">Help</li>
        <li className="p-1">Send feedback</li>
        <hr className="w-2/3"/>
      </ul>
      <div id="sideBarFooter"></div>
    </div>
  );
};

export default SideBar;
