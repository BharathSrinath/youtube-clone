import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
// import WatchVideoPage from './WatchVideoPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <SideBar />
      {/* <MainContainer />
      <WatchVideoPage /> */}
      <Outlet />
    </div>
  )
}

export default Body;