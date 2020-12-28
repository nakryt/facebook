import React, { ChangeEvent, useState } from "react";
import "./MessageSenderTop.scss";

import { Avatar, Button } from "@material-ui/core";

const MessageSenderTop = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="messageSenderTop">
      <Avatar />
      <form onSubmit={handleSubmit}>
        <input
          className="messageSenderTop__input"
          type="text"
          placeholder="What's on your mind?"
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
