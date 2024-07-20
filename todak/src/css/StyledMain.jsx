import { styled } from "styled-components";

export const Body = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

//최상위 요소
export const Contaianer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: linear-gradient(180deg, #ffda57 17.5%, #faffda 86%);
`;

//3본문 내용
export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 85%;
  width: 100%;
`;
//3버튼들 모아서
export const NavBtns = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 70%;
  height: 50%;
  justify-content: space-between;
`;
//3-1 버튼 wrapping 바깥쪽
export const NavBtnWrapper1 = styled.div`
  display: flex;
  width: 332px;
  height: 332px;
  flex-shrink: 0;
  border-radius: 332px;
  background: rgba(253, 255, 227, 0.45);
  box-shadow: 0px 4px 12px 0px rgba(115, 156, 29, 0.25);
  align-items: center;
  justify-content: center;
`;
//3-2 버튼 wrapping 안쪽
export const NavBtnWrapper2 = styled.div`
  display: flex;
  width: 267px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 268px;
  background: rgba(253, 255, 227, 0.85);
  box-shadow: 0px 4px 12px 0px rgba(115, 156, 29, 0.25);
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: #3d4c00;
    font-family: "Pretendard Variable";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
//맨 아래 이미지
export const ImageGross = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 30vh;
  img {
    height: 100%;
    width: 100%;
  }
`;
