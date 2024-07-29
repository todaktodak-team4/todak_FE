import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as H from "../css/StyledMemorialHall";
import Nav from "./Nav";

const MemorialHall = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  // 텍스트 영역의 높이를 내용에 맞게 조절하는 함수
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px"; // 기본 높이 재설정
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 내용에 맞게 높이 조절
    }
  };

  // 입력이 변경될 때마다 높이 조절
  useEffect(() => {
    adjustHeight();
  }, [value]);

  // 입력값을 상태로 관리
  const handleChange = (event) => {
    setValue(event.target.value);
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
                <p>시청역 역주행 참사 추모관</p>
              </H.informationTitle>
            </H.Wrap>
            <H.Information>
              2024년 7월 1일 발생한 <br />
              ‘시청역 역주행 참사' 피해자들을 추모하기 위한
              <br />
              온라인 헌화 추모관입니다.
            </H.Information>
          </H.mainImg>

          <H.Btns>
            <button id="copyPathBtn">
              <p id="btnp">링크 공유</p>
            </button>

            <button id="layFlowerBtn">
              <p id="btnp">헌화하기</p>
            </button>
          </H.Btns>
        </H.Content>
        <H.BannerBottom>
          <H.BannerContent>
            지금까지의 헌화 수량
            <p id="count">122,340 개</p>
          </H.BannerContent>
          <H.BannerContent>
            보내주신 추모 글<p id="count">1,825 개</p>
          </H.BannerContent>
        </H.BannerBottom>
        <H.WhereDonation>
          <img
            id="line"
            src={`${process.env.PUBLIC_URL}/img/line_2.png`}
            alt="line"
          />
          <p>보내주신 헌화금으로 이런 곳에 기부 예정입니다.</p>
          <H.WhereDonationContent></H.WhereDonationContent>
        </H.WhereDonation>
        <H.MemorialMessage>
          <p>남겨주신 헌화의 한 마디</p>
          <H.MemorialMessageContent>
            <H.MMCProfile>
              <H.MMC1>
                <img
                  id="line"
                  src={`${process.env.PUBLIC_URL}/img/standardProfile.svg`}
                  alt="line"
                />
              </H.MMC1>
              <H.MMC2>이장군</H.MMC2>
            </H.MMCProfile>
            <H.MMCContent>
              갑작스런 사고로 인해 안타깝게 돌아가신 분들의 명복을 빕니다.
            </H.MMCContent>
          </H.MemorialMessageContent>
        </H.MemorialMessage>
        <H.MemorialMessage2>
          <p>추모의 글</p>
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
                type="text"
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder="추모의 글을 남겨주세요. 욕설 및 비방이 담긴 글은 무통보 삭제될 수 있습니다."
              ></textarea>
            </H.MM2>
            <H.MM3>
              <p>등록하기</p>
            </H.MM3>
          </H.MemorialMessage2Input>

          <H.MemorialMessage2Content>
            <H.MM2Profile>
              <H.MM4>
                <img
                  id="line"
                  src={`${process.env.PUBLIC_URL}/img/standardProfile.svg`}
                  alt="line"
                />
              </H.MM4>
              <H.MM5>모토</H.MM5>
            </H.MM2Profile>
            <H.MM2Content>
              <H.MM6>
                사랑하는 아버지, 당신의 부재가 너무나 크게 느껴집니다. 당신의
                지혜와 용기, 그리고 따뜻한 품이 그립습니다. 하지만 당신이
                남겨주신 가치관과 인생의 교훈을 마음에 새기며 살아가겠습니다.
                언젠가 다시 만날 그날을 기다리며 편히 쉬세요.
              </H.MM6>
              <H.MM7>
                <hr />
              </H.MM7>

              <H.MM8>
                <H.MM8Content>
                  <button>
                    <img
                      id="line"
                      src={`${process.env.PUBLIC_URL}/img/Imo1.svg`}
                      alt="line"
                      style={{ width: "35px", height: "35px" }}
                    />
                    토닥토닥
                  </button>
                </H.MM8Content>
                <p>x 6</p>
                <H.MM8Content>
                  <button>
                    <img
                      id="line"
                      src={`${process.env.PUBLIC_URL}/img/Imo2.svg`}
                      alt="line"
                    />
                    공감해요
                  </button>
                </H.MM8Content>
                <p>x 6</p>
                <H.MM8Content>
                  <button>
                    <img
                      id="line"
                      src={`${process.env.PUBLIC_URL}/img/Imo3.svg`}
                      alt="line"
                      style={{ width: "35px", height: "35px" }}
                    />
                    슬퍼요
                  </button>
                </H.MM8Content>
                <p>x 6</p>
                <H.MM8Content>
                  <button>
                    <img
                      id="line"
                      src={`${process.env.PUBLIC_URL}/img/Imo4.svg`}
                      alt="line"
                    />
                    추모해요
                  </button>
                </H.MM8Content>
                <p>x 6</p>
                <H.MM8Content>
                  <button>
                    <img
                      id="line"
                      src={`${process.env.PUBLIC_URL}/img/Imo5.svg`}
                      alt="line"
                    />
                    함께해요
                  </button>
                </H.MM8Content>
                <p style={{ margin: "0" }}>x 6</p>
              </H.MM8>
            </H.MM2Content>
          </H.MemorialMessage2Content>
        </H.MemorialMessage2>
      </H.Container>
    </H.Body>
  );
};

export default MemorialHall;
