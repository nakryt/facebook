import React from "react";
import "./HeaderRight.scss";

import { Avatar, IconButton } from "@material-ui/core";
import {
  Add as AddIcon,
  Forum as ForumIcon,
  NotificationsActive as NotificationsActiveIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import { useStateValue } from "../../../context/StateProvider";

export const HeaderRight = () => {
  const {
    state: { user },
  } = useStateValue();
  return (
    <div className="headerRight">
      <div className="headerRight__info">
        <Avatar src={user?.photoURL ? user?.photoURL : undefined} />
        {user?.displayName && <h4>{user.displayName}</h4>}
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
