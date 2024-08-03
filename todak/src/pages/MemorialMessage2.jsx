import React, { useState, useEffect } from "react";
import axios from "axios";
import * as H from "../css/StyledMemorialHall";

const MemorialMessage2 = ({
  content,
  hall,
  nickname,
  profile,
  comment,
  messageId,
}) => {
  // 상태 변수 초기화
  const [todakCount, setTodakCount] = useState(0);
  const [sympathizeCount, setSympathizeCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);
  const [commemorateCount, setCommemorateCount] = useState(0);
  const [togetherCount, setTogetherCount] = useState(0);
  const [updateTrigger, setUpdateTrigger] = useState(false); // 상태를 새로고침할지 결정하는 변수
  const token = localStorage.getItem("token");

  // API 요청 함수
  const sendRequest = async (action, setter) => {
    const baseUrl = `http://127.0.0.1:8000/memorialHall/${hall}`;
    const url = content
      ? `${baseUrl}/message/${messageId}/${action}`
      : `${baseUrl}/wreath/${messageId}/${action}`;

    console.log(`Sending request to URL: ${url}`); // URL 확인

    try {
      await axios.post(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      setUpdateTrigger((prev) => !prev);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  // 초기값을 서버에서 받아오기
  useEffect(() => {
    const fetchInitialCounts = async () => {
      try {
        const baseUrl = `http://127.0.0.1:8000/memorialHall/${hall}`;
        const endpoints = [
          { action: "todak", setter: setTodakCount },
          { action: "sympathize", setter: setSympathizeCount },
          { action: "sad", setter: setSadCount },
          { action: "commemorate", setter: setCommemorateCount },
          { action: "together", setter: setTogetherCount },
        ];

        for (const { action, setter } of endpoints) {
          const url = content
            ? `${baseUrl}/message/${messageId}/${action}`
            : `${baseUrl}/wreath/${messageId}/${action}`;

          console.log(`Fetching counts from URL: ${url}`); // URL 확인

          try {
            const response = await axios.get(url, {
              headers: {
                Authorization: `Token ${token}`,
              },
            });

            setter(
              response.data[
                `total${action.charAt(0).toUpperCase() + action.slice(1)}`
              ] || 0
            );
          } catch (error) {
            console.error(
              `Failed to fetch ${action} count from ${url}:`,
              error
            );
          }
        }
      } catch (error) {
        console.error("초기 카운트 로드 실패:", error);
      }
    };

    fetchInitialCounts();
  }, [hall, messageId, token, content, updateTrigger]); // 의존성 배열에 content 추가

  return (
    <H.MemorialMessage2Content>
      <H.MM2Profile>
        <H.MM4>
          <img
            id="profile"
            src={
              profile
                ? profile
                : `${process.env.PUBLIC_URL}/img/standardProfile.svg`
            } // 프로필 이미지 또는 기본 이미지
            alt="profile"
          />
        </H.MM4>
        <H.MM5>{nickname}</H.MM5>
      </H.MM2Profile>
      <H.MM2Content>
        <H.MM6>{content || comment}</H.MM6>{" "}
        {/* content가 있으면 content, 없으면 comment 표시 */}
        <H.MM7>
          <hr />
        </H.MM7>
        <H.MM8>
          <H.MM8Content>
            <button onClick={() => sendRequest("todak", setTodakCount)}>
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/Imo1.svg`}
                alt="line"
                style={{ width: "2rem", height: "2rem", margin: "0" }}
              />
              {content ? "토닥토닥" : "토닥토닥"}
            </button>
          </H.MM8Content>
          <p>x {todakCount}</p>
          <H.MM8Content>
            <button
              onClick={() => sendRequest("sympathize", setSympathizeCount)}
            >
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/Imo2.svg`}
                alt="line"
                style={{ width: "2rem", height: "2rem", margin: "0" }}
              />
              {content ? "공감해요" : "공감해요"}
            </button>
          </H.MM8Content>
          <p>x {sympathizeCount}</p>
          <H.MM8Content>
            <button onClick={() => sendRequest("sad", setSadCount)}>
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/Imo3.svg`}
                alt="line"
                style={{ width: "2rem", height: "2rem", margin: "0" }}
              />
              {content ? "슬퍼요" : "슬퍼요"}
            </button>
          </H.MM8Content>
          <p>x {sadCount}</p>
          <H.MM8Content>
            <button
              onClick={() => sendRequest("commemorate", setCommemorateCount)}
            >
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/Imo4.svg`}
                alt="line"
              />
              {content ? "추모해요" : "추모해요"}
            </button>
          </H.MM8Content>
          <p>x {commemorateCount}</p>
          <H.MM8Content>
            <button onClick={() => sendRequest("together", setTogetherCount)}>
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/Imo5.svg`}
                alt="line"
              />
              {content ? "함께해요" : "함께해요"}
            </button>
          </H.MM8Content>
          <p style={{ margin: "0" }}>x {togetherCount}</p>
        </H.MM8>
      </H.MM2Content>
    </H.MemorialMessage2Content>
  );
};

export default MemorialMessage2;
