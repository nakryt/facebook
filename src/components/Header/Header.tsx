import React from "react";
import "./Header.scss";

import { Container } from "@material-ui/core";

import { HeaderCenter } from "./HeaderCenter/HeaderCenter";
import { HeaderRight } from "./HeaderRight/HeaderRight";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";

export const Header = () => {
  return (
    <div className="header">
      <Container fixed={true}>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </Container>
    </div>
  );
};
