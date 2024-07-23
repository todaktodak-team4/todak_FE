import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../css/StyledLogin";
import axios from "axios";

const Login = () => {
  const [username, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      //response에 사용자 정보 저장
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        {
          username: username,
          password: password,
        }
      );

      console.log(response.data); // 서버로부터 받은 데이터 콘솔에 출력
      localStorage.setItem("token", response.data.token);
      navigate("/main", { state: { loggedInUser: response.data.user } });
    } catch (error) {
      setError("로그인에 실패했습니다.");

      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <S.Body>
      <S.Contaianer>
        <S.Title>로그인</S.Title>

        <S.Step1Items>
          <S.Step1Item>
            <S.NavName>
              <p>아이디</p>
            </S.NavName>
            <input
              name="username"
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setId(e.target.value)}
            />
          </S.Step1Item>
          <S.Step1Item>
            <S.NavName>
              <p>비밀번호</p>
            </S.NavName>
            <input
              name="password"
              type="password"
              placeholder="비밀번호(영어, 숫자, 특수문자 조합 12자 이상)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.Step1Item>
        </S.Step1Items>
        <S.LoginBtn onClick={handleLogin}>
          <p>로그인하기</p>
        </S.LoginBtn>
      </S.Contaianer>
    </S.Body>
  );
};

export default Login;
