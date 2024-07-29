import { styled } from "styled-components";

export const Body = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Container = styled.div`
  width: 100vw;
  background: linear-gradient(180deg, #c3c3c3 0%, #fff 48%);
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5vh;
  padding-bottom: 10vh;
`;
export const mainImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  background: url(${process.env.PUBLIC_URL}/img/memorialHall_flower.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const Title = styled.div`
  position: absolute;
  top: 0;
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const Wrap = styled.div`
  position: absolute;
  top: 55%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: auto; /* 내용에 따라 가로 길이 조절 */
  max-width: 70vw; /* 최대 가로 길이 */
  box-sizing: border-box;
  padding-right: 0.5vw;
  padding-left: 0.5vw;
  padding-top: 1.1vh;
  padding-bottom: 1.1vh;
  flex-shrink: 0;
  background: #414141;
  box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const informationTitle = styled.div`
  width: auto; /* 내용에 따라 가로 길이 조절 */
  max-width: 70vw; /* 최대 가로 길이 */
  box-sizing: border-box;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  flex-shrink: 0;
  border: 3px solid var(--ff, #fff);
  p {
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
    margin-top: 0.5vh;
  }
`;
export const Information = styled.div`
  position: absolute;
  bottom: -2vh;
  color: var(--, #2b2b2b);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3vw;
  margin-top: 5vh;
  #copyPathBtn {
    width: 11.1875rem;
    height: 4.8125rem;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }
  #layFlowerBtn {
    width: 11.1875rem;
    height: 4.8125rem;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }
  #btnp {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
`;
export const BannerBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10vh;
  width: 100vw;
  height: 70vh;
  background: url(${process.env.PUBLIC_URL}/img/memorialHallImg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const BannerContent = styled.div`
  color: var(--ff, #fff);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin: 0;
  p {
    color: #ffda57;
    text-align: center;
    font-family: "Nanum BuJangNimNunCiCe";
    font-size: 6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;
export const WhereDonation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #line {
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;
export const WhereDonationContent = styled.div`
  margin-top: 5vh;
  margin-bottom: 10vh;
  height: 30vh;
  width: 25vw;
  border-radius: 1.875rem;
  background: var(--y, linear-gradient(180deg, #fff9e4 0%, #ffda57 100%));
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25),
    5px 5px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const MemorialMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
  width: 100vw;
  height: 80vh;
  background: url(${process.env.PUBLIC_URL}/img/MemorialMessage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;
export const MemorialMessageContent = styled.div`
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 2rem;
  flex-direction: column;
  width: 20vw;
  height: 45vh;
  border-radius: 1.875rem;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25),
    5px 5px 10px 0px rgba(0, 0, 0, 0.25) inset;
`;

export const MMCProfile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;
export const MMC1 = styled.div`
  margin-right: 1rem;
`;
export const MMC2 = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MMCContent = styled.div`
  margin-top: 2rem;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem; /* 160.714% */
  letter-spacing: -0.08rem;
`;
export const MemorialMessage2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5vh;
  width: 100vw;
  height: 150vh;
  background: #fff;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const MemorialMessage2Input = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;

export const MM1 = styled.div``;
export const MM2 = styled.div`
  height: 20px;
  resize: none;
  box-sizing: border-box;
  width: 50vw;
  textarea {
    height: 20px;
    margin-left: 2rem;
    background: none;
    overflow: hidden; /* 스크롤바 숨기기 */
    width: 100%;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
  }

  textarea:focus {
    outline: none;
    background: none;
  }
  textarea::placeholder {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    background: none;
  }
`;

export const MM3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 70px;
  margin-left: 5vw;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const MemorialMessage2Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  flex-direction: row;
  width: 55vw;
  height: 40vh;
  border-radius: 3.125rem;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const MM2Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MM4 = styled.div``;
export const MM5 = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MM2Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MM6 = styled.div`
  width: 45vw;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 178.571% */
  letter-spacing: -0.035rem;
`;
export const MM7 = styled.div`
  hr {
    width: 45vw;
    height: 0.125rem;
    background: #adadad;
  }
`;
export const MM8 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  p {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 3vw;
  }
`;

export const MM8Content = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    background: none;
    cursor: pointer;
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 1vw;
  }
`;
