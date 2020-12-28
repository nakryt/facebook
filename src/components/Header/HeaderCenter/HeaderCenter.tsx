import React from "react";
import "./HeaderCenter.scss";

import {
  Flag as FlagIcon,
  Home as HomeIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
} from "@material-ui/icons";

export const HeaderCenter = () => {
  return (
    <div className="header__center">
      <div className="header__option header__option--active" tabIndex={0}>
        <HomeIcon fontSize="large" />
      </div>
      <div className="header__option" tabIndex={0}>
        <FlagIcon fontSize="large" />
      </div>
      <div className="header__option" tabIndex={0}>
        <SubscriptionsOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option" tabIndex={0}>
        <StorefrontOutlinedIcon fontSize="large" />
      </div>
      <div className="header__option" tabIndex={0}>
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
    </div>
  );
};
