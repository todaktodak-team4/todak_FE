import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as H from "../css/StyledMemorialHall";
import Nav from "./Nav";
import axios from "axios";
import MemorialMessage from "./MemorialMessage1";
import MemorialMessage2 from "./MemorialMessage2";

const MemorialHall = () => {
  const navigate = useNavigate();
  const textareaRef = useRef(null);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [inputs, setInputs] = useState({ content: "" });
  const { content } = inputs;
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");
  const [messages, setMessages] = useState([]);
  const [wreaths, setWreaths] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  useEffect(() => {
    axios
      .get(`/memorialHall/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [postId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/memorialHall/${postId}/message`);
        setMessages(response.data.results);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [postId]);

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

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [content]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostBtn = async () => {
    try {
      const response = await axios.post(
        `/memorialHall/${postId}/message`,
        {
          content,
          hall: postId,
        },
        { headers: { Authorization: `Token ${token}` } }
      );
      const newComment = response.data;
      setComments((prevComments) => [...prevComments, newComment]);
      setInputs({ content: "" }); // Clear input field after posting
      // 서버 응답 후 페이지 새로고침
      window.location.reload();
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  const copyCurrentURL = () => {
    const currentURL = window.location.href;
    let linkToCopy = currentURL;

    if (post) {
      if (post.private) {
        linkToCopy = `http://localhost:3000/memorialHall/${postId}/access?token=${token}`;
      } else {
        linkToCopy = `http://localhost:3000/memorialHall/${postId}`;
      }
    }

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        setIsLinkCopied(true); // 링크 복사 완료 상태 설정
        console.log("URL이 클립보드에 복사되었습니다.");
        // 3초 후에 복사 완료 메시지를 숨김
        setTimeout(() => setIsLinkCopied(false), 3000);
      })
      .catch((err) => {
        console.error("URL 복사 실패:", err);
      });
  };

  const navigateToLayFlower = () => {
    navigate(`/layFlower?hall=${postId}`);
  };

  return (
    <H.Body>
      <H.Container>
        <Nav />
        <H.Content>
          <img
            id="flower"
            src={`${process.env.PUBLIC_URL}/img/flower.svg`}
            alt="flower"
          />
          <H.mainImg>
            <H.Title>온라인 헌화</H.Title>
            <H.Wrap>
              <H.informationTitle>
                <p>{post && post.name}</p>
              </H.informationTitle>
            </H.Wrap>
            <H.Information>
              {post && formatDate(post.date)} 발생한 <br />
              {post && post.info}
            </H.Information>
          </H.mainImg>
          <H.Btns>
            <button id="copyPathBtn" onClick={copyCurrentURL}>
              <p id="btnp">링크 공유</p>
            </button>
            {/* 복사 완료 메시지 */}
            <button id="layFlowerBtn" onClick={navigateToLayFlower}>
              <p id="btnp">헌화하기</p>
            </button>
          </H.Btns>
          {isLinkCopied && (
            <p
              style={{
                color: "rgba(61, 76, 0, 0.65)",
                textAlign: "center",
                fontFamily: "Pretendard Variable",
                fontSize: "1.75rem",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              추모관 링크가 복사되었습니다.
            </p>
          )}{" "}
        </H.Content>
        <H.BannerBottom>
          <H.BannerContent>
            지금까지의 헌화 수량
            <p id="count">{post && post.wreathCount} 개</p>
          </H.BannerContent>
          <H.BannerContent>
            보내주신 추모 글<p id="count">{post && post.messageCount} 개</p>
          </H.BannerContent>
        </H.BannerBottom>

        <H.MemorialMessage>
          <p>남겨주신 헌화의 한 마디</p>
          <H.MemorialMessageContents>
            {wreaths.map((item) => (
              <MemorialMessage
                key={item.id}
                messageId={item.id}
                donation={item.donation}
                comment={item.comment}
                name={item.name}
                hall={item.hall}
                profile={item.profile}
                createdAt={item.createdAt}
              />
            ))}
          </H.MemorialMessageContents>
        </H.MemorialMessage>

        <H.MemorialMessage2>
          <H.MemorialMessage2Head>
            <img
              id="line"
              src={`${process.env.PUBLIC_URL}/img/ribonblack.svg`}
              alt="line"
            />
            <p>추모의 글</p>
          </H.MemorialMessage2Head>

          <H.MemorialMessage2Input>
            <H.MM1>
              <img
                id="line"
                src={`${process.env.PUBLIC_URL}/img/standardProfile.svg`}
                alt="line"
              />
            </H.MM1>
            <H.MM2>
              <textarea
                ref={textareaRef}
                value={content}
                name="content"
                onChange={onChange}
                placeholder="추모의 글을 남겨주세요. 욕설 및 비방이 담긴 글은 무통보 삭제될 수 있습니다."
              ></textarea>
              <div onClick={handlePostBtn} id="post">
                등록하기
              </div>
              <H.MemorialMessages2>
                {messages.map((item) => (
                  <MemorialMessage2
                    key={item.id}
                    messageId={item.id}
                    content={item.content}
                    comment={item.comment}
                    hall={item.hall}
                    nickname={item.nickname}
                    profile={item.profile}
                    createdAt={item.createdAt}
                  />
                ))}
              </H.MemorialMessages2>
            </H.MM2>
          </H.MemorialMessage2Input>
        </H.MemorialMessage2>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHall;
