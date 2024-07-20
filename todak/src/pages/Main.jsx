// Main.jsx

import { useNavigate } from "react-router-dom";
import React from "react";
import * as M from "../css/StyledMain";
import Nav from "./Nav"; // Nav 컴포넌트 import
import Info from "./Info";

const Main = () => {
  const navigate = useNavigate();

  function goToRemeberTree() {
    navigate("/plantTreeStepOne");
    //만약 트리 이미 있으면 기존 만들어진 트리로 가야될듯
  }
  return (
    <M.Body>
      <M.Contaianer>
        <Nav /> {/* Nav 컴포넌트 사용 */}
        <M.Content>
          <M.NavBtns>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a href="#">온라인 헌화</a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a onClick={goToRemeberTree}>기억 나무</a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a href="#">
                  헌화 공간
                  <br />
                  신청
                </a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
          </M.NavBtns>
        </M.Content>
        <M.ImageGross>
          <img
            id="Gross"
            src={`${process.env.PUBLIC_URL}/img/Gross.png`}
            alt="Gross"
          />
        </M.ImageGross>
      </M.Contaianer>
      <Info />
    </M.Body>
  );
};

export default Main;
