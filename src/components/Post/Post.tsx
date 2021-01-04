import React, { FC } from "react";
import "./Post.scss";
import { Avatar } from "@material-ui/core";
import PostOptions from "./PostOptions/PostOptions";

interface Props {
  profilePic: string;
  username: string;
  timestamp: { seconds: number };
  message: string;
  image?: string;
}

const Post: FC<Props> = ({
  profilePic,
  image,
  message,
  timestamp,
  username,
}) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h4>{username}</h4>
          <p>
            {timestamp &&
              new Date(timestamp.seconds * 1000).toLocaleString("ru")}
          </p>
        </div>
      </div>
      <div className="post__text">
        <p>{message}</p>
      </div>

      {image && (
        <div className="post__image">
          <img src={image} alt="for post" />
        </div>
      )}

      <PostOptions />
    </div>
  );
};

export default Post;
