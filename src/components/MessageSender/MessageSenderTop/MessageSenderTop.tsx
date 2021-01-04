import React, { ChangeEvent, useState } from "react";
import "./MessageSenderTop.scss";

import firebase from "firebase";
import { Avatar, Button } from "@material-ui/core";
import { useStateValue } from "../../../context/StateProvider";
import db from "../../../firebase";

const MessageSenderTop = () => {
  const {
    state: { user },
  } = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user?.photoURL,
      username: user?.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSenderTop">
      <Avatar src={user?.photoURL ? user?.photoURL : undefined} />
      <form onSubmit={handleSubmit}>
        <input
          className="messageSenderTop__input"
          type="text"
          placeholder={`What's on your mind${
            user?.displayName ? ", " + user?.displayName : ""
          }?`}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          value={input}
        />
        <input
          type="text"
          placeholder="image URL (Optional)"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setImageUrl(e.target.value)
          }
          value={imageUrl}
        />

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default MessageSenderTop;
