import { styled } from "styled-components";
export const Contaianer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #ffda57 17.5%, #faffda 86%);
`;
export const Header = styled.div`
  height: 60px;
  background: #627b00;
  display: flex;
  flex-direction: row;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin-top: 10px;
    margin-left: 7vw;
    margin-right: 10px;
  }
  p {
    color: #ffda57;
    font-family: twayair;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.12px;
  }
`;
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
  margin-left: 7vw;
`;
export const Nav = styled.div`
  height: 65px;
  background: rgba(255, 255, 255, 0.45);
`;
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  justify-content: space-evenly;
  align-item: left;
  color: #3d4c00;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-right: 35%;
  padding-top: 15px;
`;
