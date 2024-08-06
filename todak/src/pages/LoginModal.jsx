import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
//LoginModal에 추가
const BACKEND_URL = "http://3.38.125.151";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;
  height: 50vh;
  flex-shrink: 0;
  border-radius: 50px;
  background: linear-gradient(0deg, #f9f9c8 0%, #ffffeb 48%);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
  gap: 10px;
  position: relative; /* Add relative positioning for close button */
  
  img {
    width: 88.229px;
    height: 83.052px;
    flex-shrink: 0;
  }
  
  #message {
    width: 325px;
    height: 32px;
    flex-shrink: 0;
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #3d4c00;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #f00; /* Change color on hover */
  }
`;

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/login");
  };

  return (
    <Container>
      <CloseButton onClick={onClose}>×</CloseButton>
      <img
        id="logo"
        src={`${process.env.PUBLIC_URL}/static/img/TodakLogo4.svg`}
        alt="logo"
      />
      <p id="message">로그인을 완료했습니다.</p>
    </Container>
  );
};

export default LoginModal;
