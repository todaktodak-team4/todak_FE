import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledSignup";

const Signup1 = () => {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [Passward, setPassward] = useState("");
  const [rePassward, setRePassward] = useState("");
  const [Email, setEmail] = useState("");

  const goNext = () => {
    navigate("/Signup2");
  };
  return (
    <S.Body>
      <S.Contaianer>
        <S.Title>회원가입</S.Title>
        <S.Step1>
          <p>STEP 1</p>
        </S.Step1>

        <S.Step1Items>
          <S.Line>
            <img
              id="Logo"
              src={`${process.env.PUBLIC_URL}/img/Line.png`}
              alt="Logo"
            />
          </S.Line>
          <S.Step1Item>
            <S.Number>
              <p>1</p>
            </S.Number>
            <S.NavName>
              <p>아이디</p>
            </S.NavName>
            <input
              name="id"
              type="text"
              placeholder="아이디"
              value={Id}
              onChange={(e) => setId(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>2</p>
            </S.Number>
            <S.NavName>
              <p>비밀번호</p>
            </S.NavName>
            <input
              name="passward"
              type="text"
              placeholder="비밀번호 (영어, 숫자, 특수문자 조합 12자 이상)"
              value={Passward}
              onChange={(e) => setPassward(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>3</p>
            </S.Number>
            <S.NavName>
              <p>비밀번호 확인</p>
            </S.NavName>
            <input
              name="repassward"
              type="text"
              placeholder="비밀번호 재입력"
              value={rePassward}
              onChange={(e) => setRePassward(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>4</p>
            </S.Number>
            <S.NavName>
              <p>이메일</p>
            </S.NavName>
            <input
              name="email"
              type="text"
              placeholder="이메일"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Step1Item>
        </S.Step1Items>
        <S.NextBtn onClick={goNext}>
          <p>다음</p>
        </S.NextBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Signup1;
