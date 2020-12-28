import React from "react";
import "./Header.scss";

import { HeaderCenter } from "./HeaderCenter/HeaderCenter";
import { HeaderRight } from "./HeaderRight/HeaderRight";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";

export const Header = () => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};
