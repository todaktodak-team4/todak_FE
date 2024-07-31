import React from "react";
import * as H from "../css/StyledMemorialHallList";
import { useNavigate } from "react-router-dom";
const ContentItem = ({
  key,
  postId,
  img,
  name,
  date,
  info,
  wreathCount,
  messageCount,
  //props
}) => {
  const navigate = useNavigate();
  const goContent = () => {};
  // 날짜 포맷팅 함수
  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    // 날짜를 한국 형식으로 변환
    const formattedDate = dateObj.toLocaleDateString("ko-KR", options);

    // 마지막 점을 제거
    const cleanedDate = formattedDate.endsWith(".")
      ? formattedDate.slice(0, -1)
      : formattedDate;

    return `등록일: ${cleanedDate}`;
  };
  const defaultImg = `${process.env.PUBLIC_URL}/img/ListContentImg.png`;
  return (
    <H.ListContentItem>
      <H.ListContentImg>
        <img id="img" src={img || defaultImg} alt="images" />
        <button className="hover-button" onClick={() => navigate(`/layFlower`)}>
          헌화하기
        </button>
      </H.ListContentImg>
      <H.ListContentInfo onClick={goContent}>
        <H.C1 onClick={() => navigate(`/memorialHall/${postId}`)}>
          {name}
          <H.C2>
            <img
              id="flower"
              src={`${process.env.PUBLIC_URL}/img/ListContentLock.svg`}
              alt="flower"
            />
          </H.C2>
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
