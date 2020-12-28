import React from "react";
import "./HeaderLeft.scss";

import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";
import { Search as SearchIcon } from "@material-ui/icons";

export const HeaderLeft = () => {
  return (
    <div className="header__left">
      <FacebookIcon height={60} width={60} className="facebook-icon" />
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search Facebook" />
      </div>
    </div>
  );
};
