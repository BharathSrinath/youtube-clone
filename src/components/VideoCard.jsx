import React from 'react'
import {formatNumber} from '../utils/formatNumber_IND';

const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='my-5'>
        <img className='rounded-xl w-[90%]' src={thumbnails?.medium?.url} alt="video thumbnail"/>
        <div className='w-[90%]'>
          <p className='font-bold '>{title}</p>
          <p className=''>{channelTitle} | {formatNumber(statistics?.viewCount)} views</p>
        </div>
    </div>
  )
}

export default VideoCard;