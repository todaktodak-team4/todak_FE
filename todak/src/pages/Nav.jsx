import React from "react";
import * as M from "../css/StyledNav";

const Nav = () => {
  return (
    <M.Nav>
      <M.Navbar>
        <M.NavItem>
          <a href="#">HOME</a>
          <hr />
        </M.NavItem>
        <M.NavItem>
          <a href="#">온라인 헌화</a>
          <hr />
        </M.NavItem>
        <M.NavItem>
          <a href="#">기억 나무</a>
          <hr />
        </M.NavItem>
        <M.NavItem>
          <a href="#">헌화 공간 신청</a>
          <hr />
        </M.NavItem>
      </M.Navbar>
    </M.Nav>
  );
};

export default Nav;
