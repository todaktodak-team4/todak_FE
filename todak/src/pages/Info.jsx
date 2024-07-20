import React from "react";
import * as I from "../css/StyledInfo";

const Info = () => {
  return (
    <I.Info>
      <I.Info1>
        <img
          id="Logo"
          src={`${process.env.PUBLIC_URL}/img/TodakLogo2.svg`}
          alt="Logo"
        />
        <img
          id="LogoMessage"
          src={`${process.env.PUBLIC_URL}/img/LogoMessage.svg`}
          alt="LogoMessage"
        />

        <p>
          <I.BoldText>
            토닥토닥은 재난 경험자와 유족을 위한 공간입니다.
          </I.BoldText>
          <br />
          함께 같은 아픔을 겪고 감내해야 하는 사람들이 고립되지 않고
          <br />
          자조 모임을 이루어 <I.BoldText>유족의 건강한 애도</I.BoldText>를 돕는
          서비스입니다.
        </p>
      </I.Info1>
      <I.Info2>
        <p id="title"> 재난 참사 유족의 더 나은 삶을 위해</p>
        <p id="content1">
          재난으로 인한 갑작스러운 사별은 유족들에게 극심한 슬픔과 고통을
          야기하고,
          <br />
          <I.BoldText2>심각한 트라우마와 스트레스</I.BoldText2>를 유발할 수 있어
          <I.BoldText2>각별한 주의와 집중 심리 치료</I.BoldText2>가 필요합니다.
          <br />
        </p>
        <p id="content2">
          그러나 재난 참사 유족들의 상당 수는 주변의 차가운 시선과 편견으로
          장기간 심리 회복 과정에
        </p>
        <p id="content2">
          어려움을 느끼고, 정신건강 치료 과정도 꺼리는 것이 현실입니다.
          <br />
        </p>
        <p id="content3">
          토닥토닥은 재난 참사 유족들이 자신의 슬픔을 표현하고 극복하는 과정을
          돕기 위해 만들어졌습니다.
        </p>
      </I.Info2>
      <I.Info3>
        <img
          id="Info3Left"
          src={`${process.env.PUBLIC_URL}/img/Info3Left.png`}
          alt="Info3Left"
        />
        <img
          id="Info3Right"
          src={`${process.env.PUBLIC_URL}/img/Info3Right.png`}
          alt="Info3Right"
        />
        <p id="title">천천히 내 감정을 이해할 수 있게</p>
        <p id="content1">
          일반적으로 유족들이 겪는 <I.BoldText3>애도의 과정</I.BoldText3>은{" "}
          <I.BoldText3>5단계</I.BoldText3>로 이루어져 있습니다.
        </p>
        <I.Info3Contents>
          <I.Info3Content2Wrapp1>
            <I.Info3Content2>부정</I.Info3Content2>
          </I.Info3Content2Wrapp1>
          <I.Info3Arrow></I.Info3Arrow>
          <I.Info3Content2Wrapp2>
            <I.Info3Content2>분노</I.Info3Content2>
          </I.Info3Content2Wrapp2>
          <I.Info3Arrow></I.Info3Arrow>
          <I.Info3Content2Wrapp3>
            <I.Info3Content2>타협</I.Info3Content2>
          </I.Info3Content2Wrapp3>
          <I.Info3Arrow></I.Info3Arrow>
          <I.Info3Content2Wrapp4>
            <I.Info3Content2>우울</I.Info3Content2>
          </I.Info3Content2Wrapp4>
          <I.Info3Arrow></I.Info3Arrow>
          <I.Info3Content2Wrapp5>
            <I.Info3Content2>수용</I.Info3Content2>
          </I.Info3Content2Wrapp5>
        </I.Info3Contents>
        <p id="content2">
          토닥토닥은 유족이 천천히 상실감을 극복해 건강한 일상생활을 영위할 수
          있도록 돕습니다.
        </p>
      </I.Info3>
      <I.Info4>
        <p id="title">재난 참사 유족을 위한 애도 공간</p>
        <I.Info4Contents>
          <I.Info4Content>
            <img
              id="Img"
              src={`${process.env.PUBLIC_URL}/img/Info4Flower.svg`}
              alt="Img"
            />
            <p id="contentTitle">온라인 헌화</p>
            <p id="content">
              온라인 헌화로 기억하고 싶은 대상을
              <br /> 추모하며 같은 아픔을 가진 사람들과
              <br /> 함께 애도를 나눠요.
            </p>
            <p id="boldContent">슬픔을 견디도록 도와줍니다.</p>
          </I.Info4Content>
          <I.Info4Content>
            <img
              id="Img"
              src={`${process.env.PUBLIC_URL}/img/Info4Tree.svg`}
              alt="Img"
            />
            <p id="contentTitle">기억 나무</p>
            <p id="content">
              사진과 편지로 추억하고, 나무의 질문에
              <br /> 답하며 하루하루 자라는 나무와 함께
              <br /> 나의 마음을 보듬어 줘요.
            </p>
            <p id="boldContent">슬픔에 매몰되지 않게 도와줍니다.</p>
          </I.Info4Content>
        </I.Info4Contents>
      </I.Info4>
    </I.Info>
  );
};

export default Info;
