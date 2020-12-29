import React from "react";
import "./Sidebar.scss";

import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined,
} from "@material-ui/icons";

import SidebarRow from "./SidebarRow/SidebarRow";
import { useStateValue } from "../../context/StateProvider";

export const Sidebar = () => {
  const {
    state: { user },
  } = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow
        src={user?.photoURL ? user?.photoURL : undefined}
        title={user?.displayName ? user?.displayName : "Guest"}
      />
      <SidebarRow title="CORVID-19 Information Center" Icon={LocalHospital} />
      <SidebarRow title="Pages" Icon={EmojiFlags} />
      <SidebarRow title="Friends" Icon={People} />
      <SidebarRow title="Messenger" Icon={Chat} />
      <SidebarRow title="Marketplace" Icon={Storefront} />
      <SidebarRow title="Videos" Icon={VideoLibrary} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreOutlined} />
    </div>
  );
};
