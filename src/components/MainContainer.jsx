import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar, openSidebar } from '../store/slices/SideBarSlice'
import { handleResize } from '../utils/handleResize'

const MainContainer = () => {

  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeListener = () => handleResize(isSideBarOpen, dispatch, openSidebar, closeSidebar);

    resizeListener();

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [dispatch, isSideBarOpen]);

  return (
    <div className={`m-1 p-1 ${isSideBarOpen ? 'w-5/6' : 'w-[99%] flex flex-col items-center'}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;