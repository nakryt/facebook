import React, { FC } from "react";
import "./Story.scss";
import { Avatar } from "@material-ui/core";

interface Props {
  image: string;
  profileSrc: string;
  title: string;
}

const Story: FC<Props> = ({ image, profileSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />

      <h4>{title}</h4>
    </div>
  );
};

export default Story;
