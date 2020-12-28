import React from "react";
import "./MessageSenderBottom.scss";

import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";

const MessageSenderBottom = () => {
  return (
    <div className="messageSenderBottom">
      <div className="messageSenderBottom__option">
        <Videocam style={{ color: "red" }} />
        <h4>Live Video</h4>
      </div>

      <div className="messageSenderBottom__option">
        <PhotoLibrary style={{ color: "green" }} />
        <h4>Photo/Video</h4>
      </div>

      <div className="messageSenderBottom__option">
        <InsertEmoticon style={{ color: "orange" }} />
        <h4>Feeling/Activity</h4>
      </div>
    </div>
  );
};

export default MessageSenderBottom;
