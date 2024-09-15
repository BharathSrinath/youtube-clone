import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);

  return (
    <div className={`m-1 p-1 ${isSideBarOpen ? 'w-5/6' : 'w-[99%]'}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;