import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../css/StyledMain";
import Nav from "./Nav";
import Info from "./Info";
import NeedLogin from "./NeedLogin";

const Main = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    // 5초 후에 Info 컴포넌트를 보이게 설정
    const timeoutId = setTimeout(() => {
      setShowInfo(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, []);

  const isTokenValid = (token) => {
    // 토큰 유효성 검사
    return !!token; // 토큰이 존재하면 유효
  };
  const token = localStorage.getItem("token"); // localStorage에서 토큰 가져오기
  const [showLoginModal, setShowLoginModal] = useState(false); // 로그인 모달 창 보이기 여부 상태

  function goToRemeberTree() {
    if (isTokenValid(token)) {
      console.log("vaild");
      navigate("/plantTreeStepOne");
    } else {
      console.log("invaild");
      setShowLoginModal(true); // 토큰이 없는 경우 모달 창 보이기
    }
  }
  function goToMemorialHall() {
    if (isTokenValid(token)) {
      console.log("vaild");
      navigate("/memorialHall");
    } else {
      console.log("invaild");
      setShowLoginModal(true); // 토큰이 없는 경우 모달 창 보이기
    }
  }

  return (
    <M.Body>
      <M.Contaianer>
        {showLoginModal && <NeedLogin />}
        <Nav />
        <M.Content>
          <M.NavBtns>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a onClick={goToMemorialHall}>온라인 헌화</a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a onClick={goToRemeberTree}>기억 나무</a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
            <M.NavBtnWrapper1>
              <M.NavBtnWrapper2>
                <a href="#">
                  헌화 공간
                  <br />
                  신청
                </a>
              </M.NavBtnWrapper2>
            </M.NavBtnWrapper1>
          </M.NavBtns>
        </M.Content>
        <M.ImageGross>
          <img
            id="Gross"
            src={`${process.env.PUBLIC_URL}/img/Gross.png`}
            alt="Gross"
          />
        </M.ImageGross>
      </M.Contaianer>
      {showInfo && <Info />}
    </M.Body>
  );
};

export default Main;
