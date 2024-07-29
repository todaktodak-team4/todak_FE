import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../css/StyledLogin";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

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
      navigate("/main");
    } catch (error) {
      setError("로그인에 실패했습니다.");

      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const getCSRFToken = () => {
    const tokenElement = document.querySelector('meta[name="csrf-token"]');
    return tokenElement ? tokenElement.getAttribute('content') : '';
  };
  
  const responseGoogle = async (response) => {
    try {
      // id_token을 백엔드에 전송하여 사용자 인증을 수행합니다.
      const res = await axios.post("http://localhost:8000/accounts/google/callback/", {
        id_token: response.credential
      }, {
        headers: { accept: `application/json` }
      });

      // 인증 성공 후, 서버에서 반환한 토큰과 사용자 정보를 로컬 스토리지에 저장합니다.
      localStorage.setItem("token", res.data.token);
      navigate("/main", { state: { loggedInUser: res.data.user } });
    } catch (error) {
      setError("Google login failed.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
      <S.Body>
      <S.Contaianer>
        <img
          id="Img"
          src={`${process.env.PUBLIC_URL}/img/TodakLogo5.svg`}
          alt="Img"
        />
        <S.Title>로그인</S.Title>
        <S.Step1Items>
          <S.Step1Item>
            <S.NavName>
              <p>아이디</p>
            </S.NavName>
            <input
              name="username"
              id="username"
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
              id="password"
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
        <GoogleOAuthProvider clientId={'1068618939888-6ogdouruntgts8kf4689hk6f3gmclloc.apps.googleusercontent.com'}>
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => {
              setError("구글 로그인에 실패했습니다.");
              setTimeout(() => {
                setError("");
              }, 2000);
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </S.Contaianer>
    </S.Body>
  
  );
};

export default Login;
