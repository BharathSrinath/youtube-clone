import React from "react";
import SideBar from "./SideBar";
import Head from "./Head";
// import MainContainer from './MainContainer'
// import WatchVideoPage from './WatchVideoPage'
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Head />
      <div className="flex flex-grow">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
