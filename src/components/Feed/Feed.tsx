import React, { useState, useEffect } from "react";
import "./Feed.scss";

import firebase from "firebase";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import db from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState<firebase.firestore.DocumentData[]>([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          message={post.data.message}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
