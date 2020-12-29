import React from "react";
import "./Body.scss";

import { Sidebar } from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
// import Widgets from "../Widgets/Widgets";

export const Body = () => {
  return (
    <div className="body">
      <Sidebar />
      <Feed />
      {/*<Widgets />*/}
    </div>
  );
};
