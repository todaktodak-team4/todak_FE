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
  const token = localStorage.getItem("access_token");

  const storedStatus = localStorage.getItem(`status-${postId}`);
  const [status, setStatus] = useState(storedStatus || initialStatus || "unparticipated");


  // 날짜 포맷팅 함수
  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = dateObj.toLocaleDateString("ko-KR", options);
    return `등록일: ${
      formattedDate.endsWith(".") ? formattedDate.slice(0, -1) : formattedDate
    }`;
  };

  // Fetch status from server if not already in localStorage
  useEffect(() => {
    if (!storedStatus) {
      const fetchStatus = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/memorialHall/${postId}/participate`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const newStatus = response.data.status || "unparticipated";
          setStatus(newStatus);
          localStorage.setItem(`status-${postId}`, newStatus);
        } catch (error) {
          console.error("Error fetching status:", error);
          if (error.response && error.response.status === 401) {
            // Token expired or invalid, redirect to login
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
            navigate("/login");
          } else {
            setStatus("unparticipated");
            localStorage.setItem(`status-${postId}`, "unparticipated");
          }
        }
      };

      fetchStatus();
    }
  }, [postId, token, storedStatus, navigate]);

  // Handle participation toggle
  const handleParticipation = async () => {
    try {
      let newStatus;
      if (status === "participated") {
        await axios.post(
          `http://127.0.0.1:8000/memorialHall/${postId}/unparticipate`,
          { status: "unparticipated" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        newStatus = "unparticipated";
      } else {
        await axios.post(
          `http://127.0.0.1:8000/memorialHall/${postId}/participate`,
          { status: "participated" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        newStatus = "participated";
      }
      setStatus(newStatus);
      localStorage.setItem(`status-${postId}`, newStatus);
    } catch (error) {
      console.error("Error updating participation status:", error);
      if (error.response && error.response.status === 401) {
        // Token expired or invalid, redirect to login
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
        navigate("/login");
      } else {
        alert("참여 상태를 변경하는 중 오류가 발생했습니다.");
      }
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
          {status=== "participated" ? "참여 취소하기" : "참여하기"}{" "}
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
