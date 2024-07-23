import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledSignup";
import axios from "axios";

const Signup1 = () => {
  const navigate = useNavigate();

  // 입력 상태 관리
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });
  // 사용자 ID 상태 관리
  const [userId, setUserId] = useState(null);

  // 입력 값 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 회원가입 완료 처리
  const handleComplete = () => {
    if (
      !formData.username ||
      !formData.password ||
      !formData.passwordConfirm ||
      !formData.email
    ) {
      alert("필수 입력 항목입니다.");
      return;
    }

    // API 요청 데이터
    const requestData = {
      username: formData.username,
      password: formData.password,
      password_confirm: formData.passwordConfirm,
      email: formData.email,
    };

    // 사용자 등록 API 호출
    axios
      .post("http://127.0.0.1:8000/accounts/register/step1/", requestData)
      .then((response) => {
        console.log("Step 1 completed. Proceed to step 2.", response.data);
        const receivedUserId = response.data.userId;

        // 서버에서 부여해준 사용자 아이디 저장
        console.log("Received userId:", receivedUserId);
        setUserId(receivedUserId);

        // signup2로 이동시 사용자 아이디 값 함께 전달
        navigate("/signup2", { state: { userId: receivedUserId } });
      })
      .catch((error) => {
        console.error("Error while registering:", error);
        alert("회원가입 중 오류가 발생했습니다.");
      });
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
              name="username"
              type="text"
              placeholder="아이디"
              value={formData.username}
              onChange={handleInputChange}
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
              name="password" // name 수정
              type="password" // type을 password로 변경
              placeholder="비밀번호(영어, 숫자, 특수문자 조합 12자 이상)"
              value={formData.password}
              onChange={handleInputChange}
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
              name="passwordConfirm" // name 수정
              type="password" // type을 password로 변경
              placeholder="비밀번호 재입력"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
            />
          </S.Step1Item>
        </S.Step1Items>
        <S.NextBtn onClick={handleComplete}>
          <p>다음</p>
        </S.NextBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Signup1;
