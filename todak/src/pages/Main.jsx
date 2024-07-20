// Main.jsx

import React from "react";
import * as M from "../css/StyledMain";
import Nav from "./Nav"; // Nav 컴포넌트 import
import Info from "./Info";

const Main = () => {
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
                <a href="#">기억 나무</a>
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
