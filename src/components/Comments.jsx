import React, { useEffect, useState } from "react";
import {
  YOUTUBE_COMMENTS_BY_VIDEO_ID,
  YOUR_PROJECT_CREDENTIAL_API_KEY,
} from "../utils/constants";
import { formatTime } from "../utils/formatTime";
import likeIcon from "../assets/like-svgrepo-com.svg";
import dislikeIcon from "../assets/dislike-svgrepo-com.svg";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, []);

  const fetchComments = async () => {
    const commentsData = await fetch(
      YOUTUBE_COMMENTS_BY_VIDEO_ID + videoId + YOUR_PROJECT_CREDENTIAL_API_KEY
    );
    const jsonCommentsData = await commentsData?.json();
    setComments(jsonCommentsData?.items);
    console.log(jsonCommentsData);
  };

 return (
    <div className="mt-5 w-5/6">
        <p className="font-bold text-xl">{comments.length}{" Comments"}</p>
        {comments.map((comment) => {
            return (
                <div className="flex p-3" key={comment.id}>
                    <div className="mr-3">
                        <img className="rounded-full" src={comment?.snippet?.topLevelComment?.snippet
                                ?.authorProfileImageUrl} alt="author profile"/>
                    </div>    
                    <div>      
                        <div className="flex">
                            <p className="font-bold mr-2">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                            <p className="text-sm text-gray-500 self-center">{formatTime(comment?.snippet?.topLevelComment?.snippet?.publishedAt)}</p>
                        </div>
                        <div>
                            <p>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>    
                        </div>    
                        <div className="flex mt-2">
                            <p className="flex mr-5"><img className="w-6 h-6" src={likeIcon} alt="like icon" />{comment?.snippet?.topLevelComment?.snippet?.likeCount? comment?.snippet?.topLevelComment?.snippet?.likeCount : ""}</p>
                            <p><img className="w-6 h-6" src={dislikeIcon} alt="dislike icon" /></p>
                        </div>
                    </div>
                </div>
             )
        })}
    </div>
 )
};

export default Comments;
