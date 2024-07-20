import { styled } from "styled-components";

export const Info = styled.div``;
export const Info1 = styled.div`
  width: 100vw; /* 너비는 필요에 따라 조정하세요 */
  height: 80vh;
  background: linear-gradient(180deg, #999 0%, rgba(153, 153, 153, 0) 100%),
    url(${process.env.PUBLIC_URL}/img/Info1.png);
  background-size: cover; /* 이미지를 요소에 맞춰서 보여주기 */
  background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
  /* 필요한 다른 스타일 추가 */
`;
