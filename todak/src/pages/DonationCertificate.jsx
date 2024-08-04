import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    43,
    43,
    43,
    0.65
  ); /* Increased opacity for a stronger dimming effect */
  z-index: 99; /* Ensure it sits behind the modal but above other content */
`;

export const Contaianer = styled.div`
  position: fixed;
  z-index: 100; /* Higher than the overlay */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  width: 60vw;
  height: 35rem;
  flex-shrink: 0;
  border-radius: 50px;
  gap: 10px;
  padding: 20px; /* Add padding if needed */
`;

export const Image = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: url(${process.env.PUBLIC_URL}/img/DonationCertificate.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 25rem;
  height: 35rem;
  flex-shrink: 0;
  #title {
    color: #2b2b2b;
    font-family: MuseumClassic;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  #name {
    color: #2b2b2b;
    font-family: MuseumClassic;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    margin-left: 12rem;
  }
  #content {
    color: #2b2b2b;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem; /* 223.81% */
    margin: 0;
    margin-bottom: 2rem;
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10vw;
  #goLoginBtn {
    width: 8rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: 40px;
    background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 10px;
  }
  #btnp {
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;

const DonationCertificate = () => {
  const [wreaths, setWreaths] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchWreaths = async () => {
      try {
        const response = await axios.get(`/memorialHall/${postId}/wreath`);
        setWreaths(response.data);
      } catch (error) {
        console.error("Error fetching wreaths:", error);
      }
    };
    fetchWreaths();
  }, [postId]);
  const handleNav = () => {
    navigate("/");
  };

  return (
    <>
      <Overlay />
      <Contaianer>
        <Image>
          <p id="title">헌화 기부증서</p>
          <p id="name">이름</p>
          <p id="content">
            0000년 00월 00일, 뜻깊은 헌화를 통해 우리에게
            <br />
            있었던 가슴 아픈 일을 잊지 않고 추모합니다.
            <br />
            보내주신 헌화금은 다시는 같은 일이 반복되지 않도록,
            <br />
            유가족의 뜻을 이어 받아 더 나은 사회로 발전할 수 있도록,
            <br /> 같은 아픔과 상처를 가진 사람들이 서로를 보듬어 줄 수<br />
            있도록 관련 재단에 소중히 쓰일 예정입니다.
            <br />
            감사 인사를 담아 이 기부 증서를 드립니다.
          </p>
        </Image>
        <Btns>
          <button id="goLoginBtn" onClick={handleNav}>
            <p id="btnp">닫기</p>
          </button>
          <button id="goLoginBtn" onClick={handleNav}>
            <p id="btnp">저장하기</p>
          </button>
        </Btns>
      </Contaianer>
    </>
  );
};

export default DonationCertificate;
