import React from "react";
import Navbar from "./Navbar";
import * as M from "../css/StyledMain";

const Main = () => {
  return (
    <M.Contaianer>
      <M.Header>
        <M.Logo>
          <img
            id="Logo"
            src={`${process.env.PUBLIC_URL}/img/TodakLogo2.svg`}
            alt="Logo"
          />
          <p>토닥토닥</p>
        </M.Logo>
        <M.Privacy>
          <div>MY</div>
          <div>회원가입</div>
          <div>로그인</div>
        </M.Privacy>
      </M.Header>
      <M.Nav>
        <M.Navbar>
          <div>HOME</div>
          <div>온라인 헌화</div>
          <div>기억 나무</div>
          <div>헌화 공간 신청</div>
        </M.Navbar>
      </M.Nav>
    </M.Contaianer>
  );
};
export default Main;
