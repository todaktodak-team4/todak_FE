import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../css/StyledSignup";
import axios from "axios";

const Signup2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;

  const [formData, setFormData] = useState({
    userId: "",
    nickname: "",
    profile: "",
    phone: "",
    address: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "profile" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 항목 검사
    if (!formData.nickname) {
      alert("닉네임은 필수 입력 항목입니다.");
      return;
    }

    const dataToSend = new FormData();
    dataToSend.append("user_id", userId);
    dataToSend.append("nickname", formData.nickname);
    dataToSend.append("phone", formData.phone);
    dataToSend.append("address", formData.address);

    if (formData.profile instanceof File) {
      dataToSend.append("profile", formData.profile);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/register/step2/",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        navigate("/main");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("정보 전송에 실패했습니다.", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

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
              name="nickname"
              type="text"
              placeholder="닉네임 (익명 보장)"
              value={formData.nickname}
              onChange={handleInputChange}
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
            <S.SelectBtn>
              <input
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                name="profile"
              />
              <p>사진 선택하기</p>
            </S.SelectBtn>
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
              name="phone"
              type="text"
              placeholder="010-0000-0000"
              value={formData.phone}
              onChange={handleInputChange}
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
            <S.SelectBtn>
              <p>우편번호 찾기</p>
            </S.SelectBtn>
            <input
              name="address"
              id="address"
              type="text"
              placeholder="상세 주소 입력"
              value={formData.address}
              onChange={handleInputChange}
            />
          </S.Step1Item>
        </S.Step1Items>
        <S.BackBtn onClick={goBack}>
          <p>이전</p>
        </S.BackBtn>
        <S.FinishBtn onClick={handleSubmit}>
          <p>가입하기</p>
        </S.FinishBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Signup2;
