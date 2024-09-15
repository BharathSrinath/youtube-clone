import React, { useEffect, useState } from "react";
import {
  YOUTUBE_COMMENTS_BY_VIDEO_ID,
  YOUR_PROJECT_CREDENTIAL_API_KEY,
} from "../utils/constants";
import { formatTime } from "../utils/formatTime";
import { formatNumber } from "../utils/formatNumber_IND";
import likeIcon from "../assets/like-svgrepo-com.svg";
import dislikeIcon from "../assets/dislike-svgrepo-com.svg";

const Comments = ({ video }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, [video.id]);

  const fetchComments = async () => {
    const commentsData = await fetch(
      YOUTUBE_COMMENTS_BY_VIDEO_ID + video.id + YOUR_PROJECT_CREDENTIAL_API_KEY
    );
    const jsonCommentsData = await commentsData?.json();
    setComments(jsonCommentsData?.items);
  };

  return (
    <div className="mx-1 my-5">
      {comments ? (
        <>
          <p className="font-bold text-xl">
            {formatNumber(video?.statistics?.commentCount)}
            {" Comments"}
          </p>
          {comments.map((comment) => {
            return (
              <div className="flex p-3 w-full" key={comment.id}>
                <div className="mr-3 w-[10%]">
                  <img
                    className="rounded-full w-12 h-12"
                    src={
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorProfileImageUrl
                    }
                    alt="author profile"
                  />
                </div>
                <div className="w-[90%]">
                  <div className="flex">
                    <p className="font-bold mr-2">
                      {
                        comment?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                    </p>
                    <p className="text-sm text-gray-500 self-center">
                      {formatTime(
                        comment?.snippet?.topLevelComment?.snippet?.publishedAt
                      )}
                    </p>
                  </div>
                  <div>
                    <p>
                      {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <p className="flex mr-5">
                      <img className="w-6 h-6" src={likeIcon} alt="like icon" />
                      {comment?.snippet?.topLevelComment?.snippet?.likeCount
                        ? comment?.snippet?.topLevelComment?.snippet?.likeCount
                        : ""}
                    </p>
                    <p>
                      <img
                        className="w-6 h-6"
                        src={dislikeIcon}
                        alt="dislike icon"
                      />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : <p className="text-center">Comments are turned off. <a className="text-blue-500" href="https://support.google.com/youtube/answer/9706180?hl=en-GB" target="_blank" rel="noopener noreferrer">Learn more</a></p>}
    </div>
  );
};

// eslint forces us to include rel="noopener noreferrer" for security related reasons
export default Comments;
