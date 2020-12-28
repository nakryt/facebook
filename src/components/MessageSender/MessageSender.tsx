import React from "react";
import "./MessageSender.scss";

import MessageSenderTop from "./MessageSenderTop/MessageSenderTop";
import MessageSenderBottom from "./MessageSenderBottom/MessageSenderBottom";

const MessageSender = () => {
  return (
    <div className="messageSender">
      <MessageSenderTop />
      <MessageSenderBottom />
    </div>
  );
};

export default MessageSender;
