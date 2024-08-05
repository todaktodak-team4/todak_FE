import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../css/StyledMain";
import Nav from "./Nav";
import Info from "./Info";
import NeedLogin from "./NeedLogin";

const BACKEND_URL = "http://3.38.125.151";

const Main = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("access_token")); // localStorage에서 토큰 가져오기
  const [userId, setUserId] = useState(null); // 추가: 사용자 ID 상태

  useEffect(() => {
    // 5초 후에 Info 컴포넌트를 보이게 설정
    const timeoutId = setTimeout(() => {
      setShowInfo(true);
    }, 1);

    return () => {
      clearTimeout(timeoutId); // 컴포넌트가 언마운트되면 타이머 제거
    };
  }, []);

  useEffect(() => {
    // 토큰 유효성 검사
    const validateToken = async () => {
      if (token) {
        try {
          const response = await fetch(`${BACKEND_URL}/token/verify/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token }),
          });

          if (response.status === 401) {
            // 토큰이 유효하지 않으면 처리
            localStorage.removeItem("access_token");
            setToken(null);
            setShowLoginModal(true);
          }
        } catch (error) {
          console.error("Token validation failed:", error);
          setShowLoginModal(true);
        }
      }
    };

    validateToken();
  }, [token]);

  const [showLoginModal, setShowLoginModal] = useState(false); // 로그인 모달 창 보이기 여부 상태

  const goToRemeberTree = async () => {
    if (token) {
      try {
        const response = await fetch(
          `${BACKEND_URL}/accounts/api/get-user-id-from-token`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const userId = data.userId; // API 응답에서 사용자 ID를 가져옴
          setUserId(userId); // 사용자 ID 상태에 저장
          // 사용자 ID를 상태에 저장하거나 필요한 작업 수행
          console.log("User ID:", userId);

          const treeResponse = await fetch(
            `${BACKEND_URL}/api/rememberTree/user/${userId}/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
              },
            }
          );

          if (treeResponse.ok) {
            const treeData = await treeResponse.json();
            console.log("Remember Tree Data:", treeData);
            // 사용자 ID와 기억나무 데이터로 원하는 작업 수행

            if (treeData.length > 0) {
              navigate("/rememberTree"); // 페이지 이동
            } else {
              alert("기억나무를 생성해주세요.");
              navigate("/plantTreeStepOne"); // 페이지 이동
            }
          } else {
            navigate("/plantTreeStepOne"); // 페이지 이동
          }
        } else {
          setShowLoginModal(true); // 응답이 실패한 경우 로그인 모달 창 보이기
        }
      } catch (error) {
        console.error("Error fetching user ID:", error);
        setShowLoginModal(true); // 에러 발생 시 로그인 모달 창 보이기
      }

      // navigate("/plantTreeStepOne");
    } else {
      setShowLoginModal(true); // 토큰이 없는 경우 모달 창 보이기
    }
  };

  const goToMemorialHall = () => {
    if (token) {
      navigate("/memorialHallList");
    } else {
      setShowLoginModal(true); // 토큰이 없는 경우 모달 창 보이기
    }
  };

  return (
    <M.Body>
      <M.Container>
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
                <a href="/memorialHallSignup">
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
            src={`${process.env.PUBLIC_URL}/static/img/Gross.png`}
            alt="Gross"
          />
        </M.ImageGross>
      </M.Container>
      {showInfo && <Info />}
    </M.Body>
  );
};

export default Main;
