import React from "react";
import "./PostOptions.scss";

import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";

const PostOptions = () => {
  return (
    <div className="post__options">
      <div className="post__option">
        <ThumbUp />
        <p>Like</p>
      </div>
      <div className="post__option">
        <ChatBubbleOutline />
        <p>Comment</p>
      </div>
      <div className="post__option">
        <NearMe />
        <p>Share</p>
      </div>
      <div className="post__option">
        <AccountCircle />
        <ExpandMoreOutlined />
      </div>
    </div>
  );
};

export default PostOptions;
