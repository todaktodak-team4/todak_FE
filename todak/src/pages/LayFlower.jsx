import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "../css/StyledLayFlower";
import Nav from "./Nav";
import LayCheckout from "./LayCheckout";

const LayFlower = () => {
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hall = queryParams.get("hall");
  const [inputs, setInputs] = useState({
    donation: "",
    customDonation: "",
    comment: "",
    name: "",
  });

  const { donation, customDonation, comment, name } = inputs;
  const token = localStorage.getItem("token");

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSaveBtn = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "donation",
        donation === "custom" ? customDonation : donation
      );
      formData.append("name", name);
      formData.append("comment", comment);
      formData.append("hall", hall);

      await axios.post(`/memorialHall/${hall}/wreath`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
      });

      // 결제 모달 열기
      setIsPaymentModalOpen(true);
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [comment]);

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

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
          <S.Title>온라인 헌화</S.Title>

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
                <label htmlFor="price1">
                  <input
                    type="radio"
                    id="price1"
                    name="donation"
                    value="1000"
                    checked={donation === "1000"}
                    onChange={onChange}
                  />
                  1,000원
                </label>

                <label htmlFor="price2">
                  <input
                    type="radio"
                    id="price2"
                    name="donation"
                    value="custom"
                    checked={donation === "custom"}
                    onChange={onChange}
                  />
                  직접입력
                </label>
                {donation === "custom" && (
                  <input
                    type="text"
                    name="customDonation"
                    value={customDonation || ""}
                    onChange={onChange}
                    placeholder="금액을 입력하세요"
                  />
                )}
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
              <textarea
                id="memorialmessage"
                placeholder="간단한 헌화의 말씀을 적어주세요. (50자 이내)"
                ref={textareaRef}
                value={comment}
                onChange={onChange}
                name="comment"
                style={{ resize: "none", overflow: "hidden" }}
                onInput={adjustHeight}
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>3</p>
              </S.Number>
              <S.NavName>
                <p>성함</p>
              </S.NavName>
              <input
                id="name"
                placeholder="헌화자 성함"
                value={name}
                onChange={onChange}
                name="name"
              />
            </S.SignupItem>
            <S.SignupItem>
              <S.Number>
                <p>4</p>
              </S.Number>
              <S.NavName>
                <p>결제 진행</p>
              </S.NavName>
              <S.SelectBtn onClick={handleSaveBtn}>
                <p>결제하기</p>
              </S.SelectBtn>
            </S.SignupItem>
          </S.SignupItems>
          <S.Guide>
            <p>결제를 완료하시면 기부 증서를 발급해 드려요!</p>
          </S.Guide>
        </S.Content>
        {isPaymentModalOpen && (
          <LayCheckout
            donation={donation === "custom" ? customDonation : donation}
            name={name}
            onClose={closePaymentModal}
          />
        )}
      </S.Container>
    </S.Body>
  );
};

export default LayFlower;
