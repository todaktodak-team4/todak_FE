import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledSignup";

const Signup2 = () => {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [Passward, setPassward] = useState("");
  const [rePassward, setRePassward] = useState("");
  const [Email, setEmail] = useState("");

  const goBack = () => {
    navigate("/Signup1");
  };
  return (
    <S.Body>
      <S.Contaianer>
        <S.Title>회원가입</S.Title>
        <S.Step1>
          <p>STEP 2</p>
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
              <p>5</p>
            </S.Number>
            <S.NavName>
              <p>닉네임</p>
            </S.NavName>
            <input
              name="id"
              type="text"
              placeholder="닉네임 (익명 보장)"
              value={Id}
              onChange={(e) => setId(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>6</p>
            </S.Number>
            <S.NavName>
              <p>
                프로필 사진
                <br />
                <span>*선택사항</span>
              </p>
            </S.NavName>
            <S.Select>
              <p>사진 선택하기</p>
            </S.Select>
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>7</p>
            </S.Number>
            <S.NavName>
              <p>
                전화번호
                <br />
                <span>*선택사항</span>
              </p>
            </S.NavName>
            <input
              name="repassward"
              type="text"
              placeholder="010-0000-0000"
              value={rePassward}
              onChange={(e) => setRePassward(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.Number>
              <p>8</p>
            </S.Number>
            <S.NavName>
              <p>
                배송주소
                <br />
                <span>*선택사항</span>
              </p>
            </S.NavName>

            <S.Select>
              <p>우편번호 찾기</p>
            </S.Select>
            <input
              name="email"
              id="postNumber"
              type="text"
              placeholder="상세 주소 입력"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Step1Item>
        </S.Step1Items>
        <S.BackBtn onClick={goBack}>
          <p>이전</p>
        </S.BackBtn>
        <S.FinishBtn>
          <p>가입하기</p>
        </S.FinishBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Signup2;
