import React, { useState } from "react";
import axios from "axios";
import * as H from "../css/StyledMemorialHall";

const MemorialMessage2 = ({
  content,
  hall,
  nickname,
  profile,
  messageId, // 추가된 prop
}) => {
  const [todakCount, setTodakCount] = useState(6); // 초기값 예시
  const [sympathizeCount, setSympathizeCount] = useState(6); // 초기값 예시
  const [sadCount, setSadCount] = useState(6); // 초기값 예시
  const [commemorateCount, setCommemorateCount] = useState(6); // 초기값 예시
  const [togetherCount, setTogetherCount] = useState(6); // 초기값 예시
  const token = localStorage.getItem("token");
  // API 요청 함수
  const sendRequest = async (action, setter, count) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/memorialHall/${hall}/message/${messageId}/${action}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(response);
      // API 응답 상태에 따라 카운트 업데이트
      if (response.data.status === `${action} added`) {
        setter(count + 1);
      } else if (response.data.status === `${action} removed`) {
        setter(count - 1);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

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
        <H.MM6>{content}</H.MM6>
        <H.MM7>
          <hr />
        </H.MM7>

        <H.MM8>
          <H.MM8Content>
            <button
              onClick={() => sendRequest("todak", setTodakCount, todakCount)}
            >
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
              onClick={() =>
                sendRequest("sympathize", setSympathizeCount, sympathizeCount)
              }
            >
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/Imo2.svg`}
                alt="line"
                style={{ width: "1.3rem", marginBottom: "0.2rem" }}
              />
              공감해요
            </button>
          </H.MM8Content>
          <p>x {sympathizeCount}</p>
          <H.MM8Content>
            <button onClick={() => sendRequest("sad", setSadCount, sadCount)}>
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
              onClick={() =>
                sendRequest(
                  "commemorate",
                  setCommemorateCount,
                  commemorateCount
                )
              }
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
            <button
              onClick={() =>
                sendRequest("together", setTogetherCount, togetherCount)
              }
            >
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
