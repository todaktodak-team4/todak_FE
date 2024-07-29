import { styled } from "styled-components";

export const Body = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 130vh;
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
export const Title = styled.div`
  color: #2b2b2b;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 10vh;
`;
export const SignupItems = styled.div`
  z-index: 2;
  width: 60vw;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;
`;
export const SignupItem = styled.div`
  display: flex;
  flex-direction: row;
  fieldset {
    height: 30px;
    width: 30px;
  }

  #hallname {
    margin-left: 10%;
    background: none;
    height: 30px;
    width: 30vw;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    position: absolute;
    right: 0;
  }
  #introduce {
    margin-left: 10%;
    background: none;
    height: 30px;
    width: 30vw;
    border: 0;
    border-bottom: 2px solid #2b2b2b;
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    position: absolute;
    right: 0;
  }

  input:focus {
    outline: none;
    background: none;
  }
  input::placeholder {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 300;
    background: none;
  }
`;
export const Number = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${process.env.PUBLIC_URL}/img/NumberWrap2.svg);
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  margin-right: 20px;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin: 0;
  }
`;
export const NavName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 6vh;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span {
    color: var(--, #3d4c00);
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
export const Line = styled.div`
  z-index: 0;
  width: 2.5px;
  height: 50vh;
  position: absolute;
  left: 22px;
  top: 20px;
`;
export const NextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 263px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(0deg, #adadad 0%, #ebebeb 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 5vw;
  bottom: 5vh;
  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const SelectBtn = styled.label`
  position: absolute;
  right: 20vw;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 127px;
  height: 47px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 40px;
  background: linear-gradient(0deg, #ebebeb 0%, #fff 48%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer; /* 포인터 커서 설정 */

  /* 내부 input 요소 스타일링 */
  input {
    opacity: 0; /* 실제 input 요소를 투명하게 만듦 */
    position: absolute; /* 부모 요소 내 절대 위치 설정 */
    top: 0;
    left: 0;
    width: 100%; /* 부모 요소와 동일한 크기 */
    height: 100%; /* 부모 요소와 동일한 크기 */
    cursor: pointer; /* 포인터 커서 설정 */
  }

  p {
    color: #2b2b2b;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0; /* 기본 마진 제거 */
  }
`;
export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10vh;
  position: absolute;
  right: 10vw;
  input {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    stroke-width: 2px;
    background: #2b2b2b;
    margin-right: 1rem;
  }

  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  input::checked {
    color: #2b2b2b;
  }
`;
