import React, { FC } from "react";
import "./SidebarRow.scss";
import { Avatar } from "@material-ui/core";

interface Props {
  title: string;
  src?: string;
  Icon?: FC;
}

const SidebarRow: FC<Props> = ({ title, src, Icon }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
