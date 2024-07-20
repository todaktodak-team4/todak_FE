import { styled } from "styled-components";

export const Info = styled.div``;
export const Info1 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(
      180deg,
      rgba(153, 153, 153, 1) 0%,
      rgba(153, 153, 153, 0) 30%
    ),
    url(${process.env.PUBLIC_URL}/img/Info1.png);
  background-size: cover;
  background-repeat: no-repeat;
  img {
    width: 146px;
    height: 89px;
    flex-shrink: 0;
  }
  p {
    color: var(--ff, #fff);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    line-height: normal;
    margin: 10px;
  }
`;
export const BoldText = styled.p`
  display: inline-block;
  color: var(--ff, #fff);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Info2 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: url(${process.env.PUBLIC_URL}/img/Background2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  #title {
    color: var(---, #323232);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content1 {
    color: var(---, #323232);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 5px;
    margin-bottom: 30px;
    margin-top: 15px;
  }
  #content2 {
    color: var(---, #323232);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 5px;
  }
  #content3 {
    color: var(---, #323232);
    font-family: "Pretendard Variable";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #ffda57;
  }
`;
export const BoldText2 = styled.p`
  display: inline-block;
  color: var(---, #323232);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 5px;
`;
export const Info3 = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 70vh;
  background: linear-gradient(270deg, #fff 0%, #ffda57 65%);
  #Info3Left {
    position: absolute;
    left: 0;
    height: 100%;
  }
  #Info3Right {
    position: absolute;
    right: 0;
    height: 100%;
  }
  #title {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  #content1 {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  #content2 {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 40px;
  }
`;
export const BoldText3 = styled.p`
  display: inline-block;
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Info3Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp1 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.35);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse17.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp2 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.25);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse18.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp3 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.2);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse19.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp4 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.15);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse20.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Content2Wrapp5 = styled.div`
  width: 152px;
  height: 152px;
  flex-shrink: 0;
  fill: rgba(50, 46, 47, 0.1);
  background: url(${process.env.PUBLIC_URL}/img/Ellipse21.svg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Info3Arrow = styled.div`
  background: url(${process.env.PUBLIC_URL}/img/Arrow.svg);
  width: 40px;
  height: 30px;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
`;
export const Info3Content2 = styled.div`
  color: var(--, #2b2b2b);
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Info4 = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  background: url(${process.env.PUBLIC_URL}/img/Info4Background.png);
  background-size: cover;
  background-repeat: no-repeat;
  #title {
    color: var(--ff, #fff);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;
export const Info4Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5vw;
`;
export const Info4Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 520px;
  height: 435px;
  flex-shrink: 0;
  border-radius: 50px;
  background: var(--ff, #fff);
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.25),
    5px 5px 7px 0px rgba(0, 0, 0, 0.25) inset;
  img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }
  #contentTitle {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  #content {
    color: var(--, #2b2b2b);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }
  #boldContent {
    color: var(--, #2b2b2b);
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;
