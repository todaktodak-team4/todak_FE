import { styled } from "styled-components";

//1헤더
export const Header = styled.div`
  height: 60px;
  background: #627b00;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7%;
`;
//1-1헤더 왼쪽토닥토닥 로고
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: 60px;
    height: 37px;
    margin-top: 14px;
    margin-right: 15px;
  }
  p {
    margin-top: 14px;
    color: #ffda57;
    font-family: twayair;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -1.12px;
  }
`;
//1-2헤더 오른쪽 개인정보
export const Privacy = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: space-evenly;
  width: 300px;
  margin-top: 14px;
  margin-right: 5%;
`;
export const Footer = styled.div`
  height: 300px;
  flex-shrink: 0;
  background: #ffda57;
`;
