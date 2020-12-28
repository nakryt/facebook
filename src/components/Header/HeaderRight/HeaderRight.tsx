import React from "react";
import "./HeaderRight.scss";

import { Avatar, IconButton } from "@material-ui/core";
import {
  Add as AddIcon,
  Forum as ForumIcon,
  NotificationsActive as NotificationsActiveIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

export const HeaderRight = () => {
  return (
    <div className="headerRight">
      <div className="headerRight__info">
        <Avatar />
        <h4>Volodymyr Pestov</h4>
      </div>

      <div className="headerRight__options">
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};
