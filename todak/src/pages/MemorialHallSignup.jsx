import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledMemorialHallSignup";
import Nav from "./Nav";

const MemorialHallSignup = () => {
  return (
    <S.Body>
      <S.Container>
        <Nav />
        <S.Content>
          <img
            id="flower"
            src={`${process.env.PUBLIC_URL}/img/flower.svg`}
            alt="flower"
          />
          <S.Title>온라인 헌화 추모관 신청</S.Title>

          <S.SignupItems>
            <S.Line>
              <img
                id="Logo"
                src={`${process.env.PUBLIC_URL}/img/Line_1.png`}
                alt="Logo"
              />
            </S.Line>
            <S.SignupItem>
              <S.Number>
                <p>1</p>
              </S.Number>
              <S.NavName>
                <p>추모관 이름</p>
              </S.NavName>
              <input id="hallname" placeholder="추모관 이름" />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>2</p>
              </S.Number>
              <S.NavName>
                <p>추모일</p>
              </S.NavName>
              <S.SelectBtn>
                <input type="file" id="profile" />
                <p>날짜 선택</p>
              </S.SelectBtn>
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>3</p>
              </S.Number>
              <S.NavName>
                <p>소개글</p>
              </S.NavName>
              <input
                id="introduce"
                placeholder="간단한 소개글을 적어주세요. (50자 이내)"
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>4</p>
              </S.Number>
              <S.NavName>
                <p>공개/비공개</p>
              </S.NavName>
              <S.Checkbox>
                <label for="radio1">
                  <input
                    type="radio"
                    id="radio1"
                    name="contact"
                    value="public"
                  />
                  공개
                </label>

                <label for="radio2">
                  <input
                    type="radio"
                    id="radio2"
                    name="contact"
                    value="private"
                  />
                  비공개
                </label>
              </S.Checkbox>
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>5</p>
              </S.Number>
              <S.NavName>
                <p>
                  대표 사진 등록
                  <br />
                  <span>*선택사항</span>
                </p>
              </S.NavName>
              <S.SelectBtn>
                <input type="file" id="profile" />
                <p>사진 선택</p>
              </S.SelectBtn>
            </S.SignupItem>
          </S.SignupItems>
          <S.NextBtn>
            <p>추모관 신청하기</p>
          </S.NextBtn>
        </S.Content>
      </S.Container>
    </S.Body>
  );
};

export default MemorialHallSignup;
