import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../css/StyledMemorialHall";

const MemorialHall = () => {
  <H.Body>
    <H.Container>
      <img
        id="flower"
        src={`${process.env.PUBLIC_URL}/img/flower.svg`}
        alt="flower"
      />

      <H.mainImg>
        <H.Title>온라인 헌화</H.Title>

        <H.informationTitle>시청역 역주행 참사 추모관</H.informationTitle>
        <H.Information>
          2024년 7월 1일 발생한 ‘시청역 역주행 참사' 피해자들을 추모하기 위한
          온라인 헌화 추모관입니다.
        </H.Information>
      </H.mainImg>

      <H.Btns>
        <button id="copyPathBtn">
          <p id="btnp">링크 공유</p>
        </button>

        <button id="layFlowerBtn">
          <p id="btnp">헌화하기</p>
        </button>
      </H.Btns>
    </H.Container>
  </H.Body>;
};

export default MemorialHall;
