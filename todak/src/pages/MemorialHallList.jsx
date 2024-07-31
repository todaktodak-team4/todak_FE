import React from "react";
import ContentItem from "./ContentItem";
import * as H from "../css/StyledMemorialHallList";
import Nav from "./Nav";
import axios from "axios";
import { useState, useEffect } from "react";

const MemorialHallList = () => {
  const [ListItems, setItemsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/memorialHall");
        setItemsList(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); //처음에 마운트 될 때 불러오도록

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
            {ListItems.map((item) => (
              <ContentItem
                memorialHall={ListItems}
                key={item.id}
                postId={item.id}
                img={item.thumbnail}
                name={item.name}
                date={item.date}
                info={item.info}
                wreathCount={item.wreathCount}
                messageCount={item.messageCount}
                starImage={`${process.env.PUBLIC_URL}/images/Star.svg`}
                chatIcon={`${process.env.PUBLIC_URL}/images/chatIcon.svg`}
                addMylistImage={`${process.env.PUBLIC_URL}/images/Rectangle21.svg`}
              />
            ))}
          </H.ListContent>

          <H.NumberBtn></H.NumberBtn>
        </H.Content>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHallList;
