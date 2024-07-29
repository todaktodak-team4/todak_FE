import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledLayFlower";
import Nav from "./Nav";

const LayFlower = () => {
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
                <p>헌화 금액</p>
              </S.NavName>
              <S.Checkbox>
                <label for="price1">
                  <input
                    type="radio"
                    id="price1"
                    name="contact"
                    value="public"
                  />
                  1,000원
                </label>

                <label for="price2">
                  <input
                    type="radio"
                    id="price2"
                    name="contact"
                    value="private"
                  />
                  직접입력
                </label>
              </S.Checkbox>
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>2</p>
              </S.Number>
              <S.NavName>
                <p>
                  헌화의 한 마디
                  <br />
                  <span>*선택사항</span>
                </p>
              </S.NavName>
              <input
                id="memorialmessage"
                placeholder="간단한 헌화의 말씀을 적어주세요. (50자 이내)"
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>3</p>
              </S.Number>
              <S.NavName>
                <p>성함</p>
              </S.NavName>
              <input id="name" placeholder="헌화자 성함" />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>4</p>
              </S.Number>
              <S.NavName>
                <p>결제 진행</p>
              </S.NavName>
              <S.SelectBtn>
                <input type="file" id="pay" />
                <p>결제하기</p>
              </S.SelectBtn>
            </S.SignupItem>
          </S.SignupItems>
          <S.Guide>
            <p>결제를 완료하시면 기부 증서를 발급해 드려요!</p>
          </S.Guide>
        </S.Content>
      </S.Container>
    </S.Body>
  );
};

export default LayFlower;
