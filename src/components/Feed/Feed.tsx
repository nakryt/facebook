import React from "react";
import "./Feed.scss";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://static-s.aa-cdn.net/img/ios/1257058542/e25ee4c509249d261d2943bfd493f016?v=1"
        image="https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper_279.jpg"
        username="Volodymyr Pestov"
        timestamp="timestamp"
        message="This is a message for the post"
      />

      <Post
        profilePic="https://static-s.aa-cdn.net/img/ios/1257058542/e25ee4c509249d261d2943bfd493f016?v=1"
        username="Volodymyr Pestov"
        timestamp="timestamp"
        message="This is a message for the post"
      />
    </div>
  );
};

export default Feed;
