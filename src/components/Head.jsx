import React from "react";
import hamburgerIcon from "../assets/hamburger-menu-svgrepo-com.svg";
import searchIcon from "../assets/search-svgrepo-com.svg";
import userIcon from "../assets/user-circle-svgrepo-com.svg";
import youtubeIcon from "../assets/youtube-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slices/SideBarSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleSideBarHandler = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className="grid grid-flow-col my-2 p-2">
      <div className="flex col-span-1 items-center">
        <img className="h-6 cursor-pointer" src={hamburgerIcon} alt="sidebar menu icon" onClick={() => toggleSideBarHandler()}/>
        <img className="h-6 w-36" src={youtubeIcon} alt="" />
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="rounded-l-full border border-gray-300 w-2/3 p-2 pl-4 text-lg"
        />
        <button className="rounded-r-full border border-gray-300 border-l-0 p-2 bg-gray-100">
          <img className="h-6 " src={searchIcon} alt="search icon" />
        </button>
      </div>
      <img src={userIcon} alt="user icon" className="justify-self-end h-10 col-span-1" />
    </div>
  );
};

export default Head;
