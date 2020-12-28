import React from "react";
import "./Body.scss";

import { Sidebar } from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";

export const Body = () => {
  return (
    <div className="body">
      <Sidebar
        user={{
          displayName: "Volodymyr Pestov",
          photoURL:
            "https://lh3.googleusercontent.com/-_6GoIKqeOYQ/X-n5KAcyCPI/AAAAAAAAAY8/_yKHMyE6QV82N1ybLEUpIBvSuhjtWietgCMICGAYYCw/s83-c/51034660.jpeg",
        }}
      />
      <Feed />
    </div>
  );
};
