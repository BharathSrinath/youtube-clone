import React from 'react'
import {formatNumber} from '../utils/formatNumber_IND';
import { formatTime } from '../utils/formatTime';

const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='flex flex-col items-center m-1 p-1'>
        <img className='rounded-xl w-[90%]' src={thumbnails?.medium?.url} alt="video thumbnail"/>
        <div className='w-[90%]'>
          <p className='font-bold '>{title}</p>
          <p className='text-gray-500'>{channelTitle}</p>
          <p className='text-gray-500'>{formatNumber(statistics?.viewCount)} views <span className='font-extrabold'>{" . "}</span>{formatTime(snippet.publishedAt)} </p>
        </div>
    </div>
  )
}

export default VideoCard;