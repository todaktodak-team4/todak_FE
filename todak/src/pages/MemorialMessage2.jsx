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
  const token = localStorage.getItem("access_token");

  // API 요청 함수
  const sendRequest = async (action, setter) => {
    try {
      // POST 요청 보내기
      const response = await axios.post(
        `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/${action}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      // 응답 데이터에서 새로운 카운트 값 얻기
      const newCount = response.data[action] || 0;
      setter(newCount);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  // 초기값을 서버에서 받아오기
  useEffect(() => {
    const fetchInitialCounts = async () => {
      try {
        // GET 요청 보내기
        const todakResponse = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/todak`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTodakCount(todakResponse.data.totalTodak || 0);

        const sympathizeResponse = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/sympathize`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSympathizeCount(sympathizeResponse.data.totalSympathize || 0);

        const sadResponse = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/sad`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSadCount(sadResponse.data.totalSad || 0);

        const commemorateResponse = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/commemorate`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCommemorateCount(commemorateResponse.data.totalCommemorate || 0);

        const togetherResponse = await axios.get(
          `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/together`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTogetherCount(togetherResponse.data.totalTogether || 0);
      } catch (error) {
        console.error("초기 카운트 로드 실패:", error);
      }
    };

    fetchInitialCounts();
  }, [hall, messageId, token]);

  return (
    <H.MemorialMessage2Content>
      <H.MM2Profile>
        <H.MM4>
          <img
            id="line"
            src={`${process.env.PUBLIC_URL}/img/standardProfile.svg`}
            alt="line"
          />
        </H.MM4>
        <H.MM5>{nickname}</H.MM5>
      </H.MM2Profile>
      <H.MM2Content>
        <H.MM6>{content ? content : comment}</H.MM6>

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
              토닥토닥
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
              공감해요
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
              슬퍼요
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
              추모해요
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
              함께해요
            </button>
          </H.MM8Content>
          <p style={{ margin: "0" }}>x {togetherCount}</p>
        </H.MM8>
      </H.MM2Content>
    </H.MemorialMessage2Content>
  );
};

export default MemorialMessage2;
