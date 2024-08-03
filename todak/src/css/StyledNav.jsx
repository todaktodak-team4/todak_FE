import { styled } from "styled-components";

export const Nav = styled.div`
  height: 60px;
  background: rgba(255, 255, 255, 0.45);
  position: absolute;
  z-index: 1;
  width: 100vw;
`;
export const Navbar = styled.div`
  margin-left: 7%;
  margin-right: 45%;
  display: flex;
  flex-direction: row;
  border: none;
  justify-content: space-between;
  align-item: left;
  color: #3d4c00;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 5px;
`;
//2-1 Nav 각 아이템
export const NavItem = styled.div`
  cursor: pointer;
  margin: 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    hr {
      display: block;
    }
  }
  hr {
    display: none;
    width: 100%;
    border: none;
    border-top: 7px solid #3d4c00;
  }
`;
