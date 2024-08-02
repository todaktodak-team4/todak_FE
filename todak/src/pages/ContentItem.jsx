import React, { useState, useEffect } from "react";
import * as H from "../css/StyledMemorialHallList";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContentItem = ({
  postId,
  img,
  name,
  date,
  wreathCount,
  messageCount,
  initialStatus, // 초기 상태
}) => {
  const navigate = useNavigate();
  const defaultImg = `${process.env.PUBLIC_URL}/img/ListContentImg.png`;
  const token = localStorage.getItem("token");

  const [status, setStatus] = useState(
    localStorage.getItem(`status-${postId}`) || initialStatus
  );

  // 날짜 포맷팅 함수
  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = dateObj.toLocaleDateString("ko-KR", options);
    return `등록일: ${
      formattedDate.endsWith(".") ? formattedDate.slice(0, -1) : formattedDate
    }`;
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${postId}/participate`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log("API Response:", response.data); // 응답 데이터 확인
        const newStatus = response.data.status || "unparticipated";
        console.log("Fetched status:", newStatus);
        setStatus(newStatus);
        localStorage.setItem(`status-${postId}`, newStatus);
      } catch (error) {
        console.error("Error fetching status:", error);
        setStatus("unparticipated");
        localStorage.setItem(`status-${postId}`, "unparticipated");
      }
    };

    fetchStatus();
  }, [postId, token]);

  const handleParticipation = async () => {
    try {
      if (status === "participated") {
        await axios.post(
          `http://127.0.0.1:8000/memorialHall/${postId}/unparticipate`,
          { status: "unparticipated" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
        setStatus("unparticipated");
        localStorage.setItem(`status-${postId}`, "unparticipated");
      } else {
        await axios.post(
          `http://127.0.0.1:8000/memorialHall/${postId}/participate`,
          { status: "participated" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );
        setStatus("participated");
        localStorage.setItem(`status-${postId}`, "participated");
      }
    } catch (error) {
      console.error("Error participating:", error);
      alert("참여 중 오류가 발생했습니다.");
    }
  };

  const goContent = () => {
    navigate(`/memorialHall/${postId}`);
  };

  return (
    <H.ListContentItem>
      <H.ListContentImg>
        <img id="img" src={img || defaultImg} alt="images" />
        <button className="hover-button" onClick={handleParticipation}>
          {status === "participated" ? "참여 취소하기" : "참여하기"}{" "}
          {/* 버튼 텍스트 */}
        </button>
      </H.ListContentImg>
      <H.ListContentInfo onClick={goContent}>
        <H.C1>
          <span onClick={() => navigate(`/memorialHall/${postId}`)}>
            {name}
          </span>
        </H.C1>
        <H.C3>
          <H.C4>{formatDate(date)}</H.C4>
          <H.C5>
            <button id="lotus"></button>
            {wreathCount}
            <button id="feather"></button>
            {messageCount}
          </H.C5>
        </H.C3>
      </H.ListContentInfo>
    </H.ListContentItem>
  );
};

export default ContentItem;
