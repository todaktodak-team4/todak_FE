import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../css/StyledLogin";
import axios from "axios";
import LoginModal from "./LoginModal";
//Login 에 추가
const BACKEND_URL = "http://3.38.125.151";

const Login = () => {
  const [username, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/accounts/login/`, {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
          navigate("/", { replace: true });
          window.location.reload();
        }, 500);
      } else {
        alert("로그인 실패: " + response.statusText);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      } else {
        setError("로그인에 실패했습니다.");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  };

  return (
    <S.Body>
      <S.Container>
        <img
          id="Img"
          src={`${process.env.PUBLIC_URL}/static/img/TodakLogo5.svg`}
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
              onKeyDown={handleKeyDown}
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
              placeholder="비밀번호"
              style={{
                width: "275px",
                position: "relative",
                marginLeft: "208px",
                fontSize: "40px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.Step1Item>
        </S.Step1Items>
        <S.LoginBtn onClick={handleLogin}>
          <p>로그인하기</p>
        </S.LoginBtn>
        {modalVisible && (
          <LoginModal onClose={() => setModalVisible(false)} />
        )}
      </S.Container>
    </S.Body>
  );
};

export default Login;
