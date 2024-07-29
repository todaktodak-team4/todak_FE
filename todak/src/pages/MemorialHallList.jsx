import React from "react";
import ContentItem from "./ContentItem";
import * as H from "../css/StyledMemorialHallList";
import Nav from "./Nav";

const MemorialHallList = () => {
  return (
    <H.Body>
      <H.Container>
        <Nav />
        <H.Content>
          <H.TitleContent>
            <img
              id="flower"
              src={`${process.env.PUBLIC_URL}/img/flower.svg`}
              alt="flower"
            />

            <H.Title>온라인 헌화 추모관 목록</H.Title>
          </H.TitleContent>
          <H.InputOption>
            <H.Input>
              <img
                id="Search"
                src={`${process.env.PUBLIC_URL}/img/Search.svg`}
                alt="Search"
              />
              <input placeholder="찾고 싶은 추모관 키워드를 입력해보세요. (예: 세월호 추모)" />
            </H.Input>

            <H.Option>
              <select id="options">
                <option value="none">전체</option>
                <option value="female">내가 참여한 추모관</option>
              </select>
            </H.Option>
          </H.InputOption>

          <H.ListContent>
            <ContentItem
              key="1"
              postId="1"
              name="시청역 역주행 참사 추모관"
              date="2024-07-01T00:00:00Z"
              info="'시청역 역주행 참사'피해자들을 추모하기 위한 온라인 헌화 추모관"
              starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
              chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
              addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
            />
          </H.ListContent>

          <H.NumberBtn></H.NumberBtn>
        </H.Content>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHallList;
