import React, { useState, useEffect } from "react";
import ContentItem from "./ContentItem";
import * as H from "../css/StyledMemorialHallList";
import Nav from "./Nav";
import axios from "axios";

const MemorialHallList = () => {
  const [listItems, setListItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/memorialHall?page=${page}`
      );
      setListItems(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 6));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

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
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              listItems.map((item) => (
                <ContentItem
                  key={item.id}
                  postId={item.id}
                  img={item.thumbnail}
                  name={item.name}
                  date={item.date}
                  info={item.info}
                  private={item.private}
                  public={item.public}
                  wreathCount={item.wreathCount}
                  messageCount={item.messageCount}
                />
              ))
            )}
          </H.ListContent>

          <H.NumberBtn>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </H.NumberBtn>
        </H.Content>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHallList;
